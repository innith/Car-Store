// api/server.js (Your new backend)
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
app.use(cors()); // Allows your React frontend to talk to this server
app.use(express.json());

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