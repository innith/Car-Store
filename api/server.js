// api/server.js (Your new backend)
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
// api/server.js

// Replace the old app.use(cors()) with this:
app.use(cors({
  origin: [
    'https://car-store-4asw.vercel.app', // Your live Vercel frontend
    'http://localhost:3000'              // So you can still test locally!
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
})); app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Timeless Wheels <onboarding@resend.dev>',
      to: [process.env.YOUR_RESEND_EMAIL],
      subject: subject,
      reply_to: email,
      text: message,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));