
import React from 'react';
import './Footer.css';
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer">
        <p>Connect with Social Networks</p>
      <SocialLinks />
      <div className="footer__bottom">
        <p className="footer__bottom-text">
          &copy; {new Date().getFullYear()} Allsmart Home Appliance Service Center. All rights reserved. Privacy | Terms 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
