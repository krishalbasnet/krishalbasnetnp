import Redis from 'ioredis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use a singleton Redis client to avoid connection leaks
let redisClient = null;
function getRedisClient() {
  if (!redisClient && process.env.REDIS_URL) {
    redisClient = new Redis(process.env.REDIS_URL);
  }
  return redisClient;
}

export default async function handler(req, res) {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const DATA_KEY = 'election_2082_data';
  const kv = getRedisClient();

  if (req.method === 'GET') {
    try {
      let data = null;
      if (kv) {
        try {
          const rawData = await kv.get(DATA_KEY);
          data = rawData ? JSON.parse(rawData) : null;
        } catch (kvError) {
          console.error('Redis connection error:', kvError);
        }
      }

      if (data) {
        return res.status(200).json(data);
      } else {
        // Fallback to initial data
        const filePath = path.join(__dirname, 'data_initial.json');
        
        if (fs.existsSync(filePath)) {
          let content = fs.readFileSync(filePath, 'utf8');
          content = content.replace(/^\uFEFF/, '');
          const initialData = JSON.parse(content);
          return res.status(200).json(initialData);
        } else {
           // Provide debug info to help resolve Vercel deployment issues
           return res.status(500).json({ 
             error: 'Initial data file missing',
             debug: {
               dirname: __dirname,
               lookingAt: filePath,
               filesInDir: fs.existsSync(__dirname) ? fs.readdirSync(__dirname) : 'dir not found'
             }
           });
        }
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    const { password, data } = req.body;

    if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!kv) {
      return res.status(500).json({ error: 'Redis connection unconfigured. Please check REDIS_URL environment variable.' });
    }

    try {
      await kv.set(DATA_KEY, JSON.stringify(data));
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
