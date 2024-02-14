// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/help">Need Help</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Houseboat</h2>
        <ul>
          <li><Link to="/houseboat">Houseboat</Link></li>
          <li><Link to="/booking-enquiry">Booking Enquiry</Link></li>
          <li><Link to="/booking-details">Booking Details</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
