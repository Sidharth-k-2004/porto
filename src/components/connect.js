import React from 'react';
import './connect.css';
import connectImage from '../screens/contact-img.svg';
const GetInTouch = () => {
  return (
    <div className="background-container">
      <div className="image-section">
        <img src={connectImage} alt="connectimage" />
      </div>
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <form>
          <div className="input-row">
            <input type="text" className="input input-half" placeholder="First Name" required />
            <input type="text" className="input input-half" placeholder="Last Name" required />
          </div>
          <input type="email" className="input" placeholder="Email" required />
          <input type="tel" className="input" placeholder="Phone Number" required />
          <textarea className="textarea" placeholder="Your Message" required></textarea>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
