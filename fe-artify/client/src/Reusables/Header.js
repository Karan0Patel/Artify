import React, { useState } from 'react';
import '../utils/Assets/CSS/Header.css'; 
import logo from '../utils/Assets/Images/logo.png';


const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <img src={logo} alt="Artify Logo" className="logo" />
      <div className="vertical-line"></div>
      <nav className="navigation">
        <ul>
          <li>
            <a 
              href="#home" 
              className={activeLink === 'Home' ? 'active' : ''} 
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#subscription" 
              className={activeLink === 'Subscription' ? 'active' : ''} 
              onClick={() => handleLinkClick('Subscription')}
            >
              Subscription
            </a>
          </li>
          <li>
            <a 
              href="#explore-art" 
              className={activeLink === 'Explore Art' ? 'active' : ''} 
              onClick={() => handleLinkClick('Explore Art')}
            >
              Explore Art
            </a>
          </li>
          <li>
            <a 
              href="#upload-art" 
              className={activeLink === 'Upload Art' ? 'active' : ''} 
              onClick={() => handleLinkClick('Upload Art')}
            >
              Upload Art
            </a>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        />
      </div>
      <button className="login-button">Login</button>
    </header>
  );
};

export default Header;
