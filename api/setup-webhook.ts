import type { VercelRequest, VercelResponse } from '@vercel/node';
import { bot } from '../server/bot';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (!bot) {
    return res.status(503).json({ error: 'Bot not configured' });
  }

  // Get URL from environment or request
  let webappUrl = process.env.WEBAPP_URL;
  
  if (!webappUrl) {
    // VERCEL_URL is already a full URL (https://...)
    if (process.env.VERCEL_URL) {
      webappUrl = process.env.VERCEL_URL.startsWith('http') 
        ? process.env.VERCEL_URL 
        : `https://${process.env.VERCEL_URL}`;
    } else if (req.headers.host) {
      const protocol = req.headers['x-forwarded-proto'] || 'https';
      webappUrl = `${protocol}://${req.headers.host}`;
    }
  }

  if (!webappUrl) {
    return res.status(400).json({ 
      error: 'WEBAPP_URL or VERCEL_URL must be set' 
    });
  }

  try {
    const webhookUrl = `${webappUrl}/api/webhook`;
    console.log(`Setting up webhook: ${webhookUrl}`);
    
    await bot.telegram.setWebhook(webhookUrl);
    const webhookInfo = await bot.telegram.getWebhookInfo();
    
    return res.json({
      success: true,
      webhookUrl: webhookInfo.url,
      webhookInfo,
    });
  } catch (error: any) {
    console.error('Failed to set webhook:', error);
    return res.status(500).json({ 
      error: 'Failed to set webhook',
      message: error.message 
    });
  }
}

