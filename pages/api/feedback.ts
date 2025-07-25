// pages/api/feedback.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { rating, message } = req.body;
  // TODO: save to DB, send email, etc.
  console.log('New feedback:', rating, message);

  res.status(200).json({ ok: true });
}
