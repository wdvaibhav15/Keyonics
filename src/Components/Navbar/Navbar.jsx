// // import React from 'react'
// // import './Navbar.css'
// // import { Link } from 'react-router-dom'
// // import logo from '../../assets/keyonics_logo.png'

// // const Navbar = () => {
// //   return (
// //     <nav className='navbar'>
// //             <img className='logo' src={logo} alt="logo" />
        
// //         <ul>
// //             <li>
// //                 <Link to="Home/">Home</Link>
// //             </li>
// //             <li>
// //                 <Link to="/PopularCourses">Courses</Link>
// //             </li>
// //             <li>
// //                 <Link to="/Footer">About</Link>
// //             </li>
// //             <li>
// //                 <Link to="/certifications">Certifications</Link>
// //             </li>
// //             <li>
// //                 <Link to="/Testimonials">Student Reviews</Link>
// //             </li>
// //             <li>
// //                 <Link to="/contact">Contact Us</Link>
// //             </li>
// //         </ul>
// //         <button className='enroll-btn'>Book free councelling</button>
      
// //     </nav>
// //   )
// // }

// // export default Navbar
// import React from 'react';
// import './Navbar.css';
// import { Link } from 'react-scroll';
// import logo from '../../assets/keyonics_logo.png';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <Link to="home" smooth={true} duration={500} offset={-120}>
//          <img className='logo' src={logo} alt="logo" />
//      </Link>

//       <ul>
//         <li>
//           <Link to="home" smooth={true} duration={500} offset={-120}>
//             Home
//           </Link>
//         </li>

//         <li>
//           <Link to="courses" smooth={true} duration={500} offset={-120}>
//             Courses
//           </Link>
//         </li>

//         <li>
//           <Link to="about" smooth={true} duration={500} offset={-120}>
//             About
//           </Link>
//         </li>

//         <li>
//           <Link to="certifications" smooth={true} duration={500} offset={-120}>
//             Certifications
//           </Link>
//         </li>

//         <li>
//           <Link to="reviews" smooth={true} duration={500} offset={-120}>
//             Student Reviews
//           </Link>
//         </li>

//         <li>
//           <Link to="contact" smooth={true} duration={500} offset={-120}>
//             Contact Us
//           </Link>
//         </li>
//       </ul>

//       <button className='enroll-btn'>Book Free Counselling</button>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/keyonics_logo.png';

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className='navbar'>
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-120}
        onClick={() => setActive('home')}
      >
        <img className='logo' src={logo} alt="logo" />
      </Link>

      <ul>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-120}
            className={active === 'home' ? 'active-link' : ''}
            onClick={() => setActive('home')}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="courses"
            smooth={true}
            duration={500}
            offset={-120}
            className={active === 'courses' ? 'active-link' : ''}
            onClick={() => setActive('courses')}
          >
            Courses
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-120}
            className={active === 'about' ? 'active-link' : ''}
            onClick={() => setActive('about')}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            offset={-120}
            className={active === 'certifications' ? 'active-link' : ''}
            onClick={() => setActive('certifications')}
          >
            Certifications
          </Link>
        </li>

        <li>
          <Link
            to="reviews"
            smooth={true}
            duration={500}
            offset={-120}
            className={active === 'reviews' ? 'active-link' : ''}
            onClick={() => setActive('reviews')}
          >
            Student Reviews
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-120}
            className={active === 'contact' ? 'active-link' : ''}
            onClick={() => setActive('contact')}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <button className='enroll-btn'>Book Free Counselling</button>
    </nav>
  );
};

export default Navbar;