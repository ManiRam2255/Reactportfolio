import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <div className='footerSection'>
          <h3>Contact Information</h3>
          <p>Email: <a href='mailto:bonagirimaniram@gmail.com'>bonagirimaniram@gmail.com</a></p>
          <p>Location: Hyderabad, India</p>
          <p>Phone: <a href='tel:+919494526516'>+91 9494526516</a></p>
        </div>
        <div className='footerSection'>
          <h3>Connect with Me</h3>
          <ul className='socialMediaLinks'>
            <li><a href='https://www.linkedin.com/in/bonagiri-maniram-0296b924b' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
            <li><a href='https://github.com/ManiRam2255' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className='footerBottom'>
        <p>&copy; {new Date().getFullYear()} Maniram Bonagiri. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
