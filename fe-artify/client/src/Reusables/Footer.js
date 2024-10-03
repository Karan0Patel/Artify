import React, { useState } from 'react';
import '../utils/Assets/CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Artify</h3>
          <p>The world’s first and largest digital marketplace for various art collectibles and artworks. Bid, lease, and discover exclusive digital items.</p>
        </div>
        <div className="footer-section">
          <h4>Artwork Categories</h4>
          <a href="#allartwork">All Artwork</a>
          <a href="#New">New</a>
          <a href="#Sports">Sports</a>
          <a href="#Utility">Utility</a>
          <a href="#Music">Music</a>
        </div>
        <div className="footer-section">
          <h4>My Account</h4>
          <a href="#Profile">Profile</a>
          <a href="#Favourite">Favourite</a>
          <a href="#My Collection">My Collection</a>
          <a href="#Settings">Settings</a>
        </div>
        <div className="footer-section">
          <h4>Stay in the loop</h4>
          <p>Join our mailing list to stay in the loop with our newest feature releases, Art drops, and tips and tricks for navigating Artwork.</p>
          <div className="subscribe-container">
            <input type="email" placeholder="Enter your email address" aria-label="Email" />
            <button type="submit">Subscribe Now</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
