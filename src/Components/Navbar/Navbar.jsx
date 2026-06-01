import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/keyonics_logo.png';
import menu_icon from '../../assets/menu_icon.png';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setMobileMenu(false);
  };

  const navLinks = [
    { id: 'home',           label: 'Home' },
    { id: 'courses',        label: 'Courses' },
    { id: 'about',          label: 'About' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'reviews',        label: 'Student Reviews' },
    { id: 'contact',        label: 'Contact Us' },
  ];

  return (
    <>
      {/* overlay — closes menu when clicked outside */}
      {mobileMenu && (
        <div className="menu-overlay" onClick={() => setMobileMenu(false)} />
      )}

      <nav className="navbar">

        {/* Logo — always on left */}
        <Link to="home" smooth duration={500} offset={-100} onClick={() => handleClick('home')}>
          <img src={logo} alt="logo" className="logo" />
        </Link>

        {/* Nav Links */}
        <ul className={mobileMenu ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth
                duration={500}
                offset={-100}
                className={active === link.id ? 'active-link' : ''}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button — hidden on mobile */}
        <button className="enroll-btn">Book Free Counselling</button>

        {/* Hamburger Icon — visible only on mobile/tablet */}
        <img
          src={menu_icon}
          alt="menu"
          className="menu_icon"
          onClick={() => setMobileMenu(!mobileMenu)}
        />

      </nav>
    </>
  );
};

export default Navbar;