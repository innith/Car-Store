// components/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container ">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
