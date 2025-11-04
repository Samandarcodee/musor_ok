import type { VercelRequest, VercelResponse } from '@vercel/node';
import { bot } from '../server/bot';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!bot) {
    console.error('Bot not initialized');
    return res.status(503).json({ error: 'Bot not configured' });
  }

  try {
    console.log('Received webhook request:', req.body);
    await bot.handleUpdate(req.body);
    console.log('Webhook handled successfully');
    return res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

