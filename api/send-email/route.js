// app/api/send-email/route.js
import { Resend } from 'resend';

// Initialize Resend with your private API key from your .env file
const resend = new Resend('re_cKhhcVD1_BsWmnrr5pdTf3AjWPJrFoxdg');

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Timeless Wheels <onboarding@resend.dev>',
      to: ['iamukukuruku@gmail.com'], // Where you want to receive the messages
      subject: subject,
      reply_to: email, // Allows you to hit "reply" and email the user back
      text: message,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}