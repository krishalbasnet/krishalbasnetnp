import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const DATA_KEY = 'election_2082_data';

  if (req.method === 'GET') {
    try {
      const data = await kv.get(DATA_KEY);
      if (data) {
        return res.status(200).json(data);
      } else {
        // Fallback or initial state can be handled here
        return res.status(200).json({ error: 'No data found in KV' });
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
      await kv.set(DATA_KEY, data);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
