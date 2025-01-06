import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (Replace this with backend API integration)
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setFormStatus('Please fill out all required fields.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Her</h2>
      <p>We'd love to hear from you. Reach out to us via the form below or through our contact details.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}

      <div className="contact-details">
        <h3>Our Contact Details</h3>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>Email:</strong> contact@ministry.org</p>
        <p><strong>Address:</strong> 123 Faith Avenue, City, Country</p>
        <p><strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM</p>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
