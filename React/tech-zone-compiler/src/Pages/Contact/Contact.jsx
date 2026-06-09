import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Establish Link</h1>
      <p>Send a transmission to our core systems. We are always listening.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Signal Frequency (Email)</label>
          <input type="email" placeholder="user@network.com" />
        </div>
        <div className="form-group">
          <label>Transmission Payload (Message)</label>
          <textarea rows="5" placeholder="Enter your data here..."></textarea>
        </div>
        <button className="action-btn">Broadcast Transmission</button>
      </form>
    </div>
  );
};

export default Contact;
