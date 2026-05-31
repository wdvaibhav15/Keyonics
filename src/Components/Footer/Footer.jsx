import React from 'react'
import './Footer.css'

// import your assets
import logo from '../../assets/keyonics_logo.png'
import fb_icon from '../../assets/fb_icon.png'
import ig_icon from '../../assets/ig_icon.png'
import yt_icon from '../../assets/yt_icon.png'
import li_icon from '../../assets/li_icon.png'
import location_icon from '../../assets/location_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import email_icon from '../../assets/email_icon.png'
import time_icon from '../../assets/time_icon.png'

const quickLinks = ['Home', 'Courses', 'About Us', 'Certifications', 'Student Reviews', 'Contact Us']

const courses = ['Advanced Excel', 'Tally Prime with GST', 'Python Programming', 'Full Web Development', 'Graphic Design', 'DTP & Kannada Typing']

const contactItems = [
  { icon: location_icon, text: '#123, 1st Floor, 15th Cross, Rajajinagar, Sonbhadra – 231216' },
  { icon: phone_icon,    text: '+91 96000 00000' },
  { icon: email_icon,    text: 'info@keyonics.gov.in' },
  { icon: time_icon,     text: 'Mon - Sat: 9:00 AM - 7:00 PM' },
]

const socialLinks = [
  { icon: fb_icon, href: '#', className: 'fb',  alt: 'Facebook'  },
  { icon: ig_icon, href: '#', className: 'ig',  alt: 'Instagram' },
  { icon: yt_icon, href: '#', className: 'yt',  alt: 'YouTube'   },
  { icon: li_icon, href: '#', className: 'li',  alt: 'LinkedIn'  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* ── COL 1: Logo + description ── */}
        <div className="footer-col footer-col-logo">
          <div className="footer-logo">
            <img src={logo} alt="KEYONICS Logo" className="logo-img" />
            <div className="logo-text">
              <strong>KEYONICS</strong>
              <span>GOVERNMENT CERTIFIED<br />COMPUTER EDUCATION</span>
            </div>
          </div>
          <p>Empowering students with practical computer skills and government-recognized certification for a brighter future.</p>
        </div>

        {/* ── COL 2: Quick Links ── */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* ── COL 3: Courses ── */}
        <div className="footer-col">
          <h4>Courses</h4>
          <ul>
            {courses.map((course) => (
              <li key={course}><a href="#">{course}</a></li>
            ))}
          </ul>
        </div>

        {/* ── COL 4: Contact Us ── */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          {contactItems.map((item, i) => (
            <div className="contact-item" key={i}>
              <img src={item.icon} alt="" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* ── COL 5: Follow Us ── */}
        <div className="footer-col footer-col-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {socialLinks.map((s) => (
              <a href={s.href} className={s.className} key={s.alt} aria-label={s.alt}>
                <img src={s.icon} alt={s.alt} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <p>© june2026 KEYONICS Computer Education. All Rights Reserved.❤️VAIBHAV</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
