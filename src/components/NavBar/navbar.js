import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import ContactForm from './ContactForm/ContactForm';

const Navbar = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true); // Show the contact form when the button or link is clicked
  };

  const closeContactForm = () => {
    setShowContactForm(false); // Hide the contact form when closed
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className='navbar'>
        <a href="/">
          <img src={logo} alt="Home" className='logo' />
        </a>
        <div className='desktopMenu'>
          <Link className='desktopMenuListItem' to="intro" smooth={true} duration={500}>Home</Link>
          <Link className='desktopMenuListItem' to="about" smooth={true} duration={500}>About</Link>
          <Link className='desktopMenuListItem' to="education" smooth={true} duration={500}>Education</Link>
          <Link className='desktopMenuListItem' to="skills" smooth={true} duration={500}>Skills</Link>
          <Link className='desktopMenuListItem' to="portfolio" smooth={true} duration={500}>Portfolio</Link>
          <Link className='desktopMenuListItem' to="workExperience" smooth={true} duration={500}>Work Experience</Link>
          <Link className='desktopMenuListItem' to="footer" smooth={true} duration={500}>Contact</Link>
          <button className='desktopMenuBtn' onClick={handleContactClick}>
            <img src={contactImg} alt='Contact' className='desktopMenuImg' />Contact Me
          </button>
        </div>
        <div className='hamburgerMenu' onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`mobileMenu ${mobileMenuOpen ? 'active' : ''}`}>
          <Link className='mobileMenuListItem' to="intro" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link className='mobileMenuListItem' to="about" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link className='mobileMenuListItem' to="education" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>Education</Link>
          <Link className='mobileMenuListItem' to="skills" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>Skills</Link>
          <Link className='mobileMenuListItem' to="portfolio" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link className='mobileMenuListItem' to="workExperience" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>Work Experience</Link>
          <Link className='mobileMenuListItem' to="footer" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
      {showContactForm && <ContactForm onClose={closeContactForm} />}
    </>
  );
};

export default Navbar;
