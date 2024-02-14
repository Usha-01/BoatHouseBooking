// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
import '../assets/css/Home.css';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>

                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>

            <p>&copy; 2024 Boat House Booking. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
