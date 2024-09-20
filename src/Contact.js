import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    // Send form data using EmailJS
    emailjs.send('service_i167w7u', 'template_3oede77', {
      user_name: formData.name,  // This should match {{user_name}} in your template
      user_email: formData.email, // This should match {{user_email}} in your template
      message: formData.message, // This should match {{message}} in your template
    }, 'FE6In2XMmYmT0IdVj')  // Your actual public key
    .then((result) => {
    //   console.log('SUCCESS!', result.text);
      alert('Message sent successfully!');
    }, (error) => {
    //   console.log('FAILED...', error.text);
      alert('Failed to send the message, please try again.');
    });
  };
  
  

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}  // Ensure this handler is firing correctly
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
