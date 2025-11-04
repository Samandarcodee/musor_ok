import type { VercelRequest, VercelResponse } from '@vercel/node';
import { bot } from '../server/bot';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (!bot) {
    return res.status(503).json({ error: 'Bot not configured' });
  }

  try {
    console.log('Fetching bot info from Telegram API');
    const botInfo = await bot.telegram.getMe();
    console.log('Bot info fetched successfully:', botInfo);
    
    return res.json({
      username: botInfo.username,
      id: botInfo.id,
      first_name: botInfo.first_name,
    });
  } catch (error) {
    console.error('Bot info error:', error);
    return res.status(500).json({ error: 'Failed to get bot info' });
  }
}

