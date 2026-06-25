// components/Contact.js
import React, { useState } from 'react'; // Make sure useState is imported!
import '../styles/Contact.css';

const Contact = () => {
  // 1. THESE WERE MISSING: We must define our state variables here
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  // 2. THIS WAS MISSING: We must define how to handle typing in the inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {status === 'success' && <p style={{ color: 'green' }}>Message sent successfully!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>Failed to send message. Please try again.</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
        </div>
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact;