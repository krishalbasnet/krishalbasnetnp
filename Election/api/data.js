import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const DATA_KEY = 'election_2082_data';

  if (req.method === 'GET') {
    try {
      let data = null;
      try {
        data = await kv.get(DATA_KEY);
      } catch (kvError) {
        console.error('KV connection error:', kvError);
        // Continue to fallback if KV fails
      }

      if (data) {
        return res.status(200).json(data);
      } else {
        // Fallback to initial data (bundled by Vercel)
        const fs = require('fs');
        const path = require('path');
        const filePath = path.join(__dirname, 'data_initial.json');
        
        if (fs.existsSync(filePath)) {
          let content = fs.readFileSync(filePath, 'utf8');
          // Strip BOM if it exists
          content = content.replace(/^\uFEFF/, '');
          const initialData = JSON.parse(content);
          return res.status(200).json(initialData);
        } else {
           return res.status(500).json({ error: 'Initial data file missing at ' + filePath });
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    const { password, data } = req.body;

    if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized: Invalid Admin Password' });
    }

    try {
      if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
        throw new Error('Missing KV environment variables. Please set KV_REST_API_URL and KV_REST_API_TOKEN in Vercel settings.');
      }
      await kv.set(DATA_KEY, data);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Save failed:', error);
      return res.status(500).json({ 
        error: error.message,
        details: 'Check Vercel Storage tab to ensure KV is created and linked.'
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
