// import React from 'react'
// import Header from './Components/Header/Header.jsx'
// import Navbar from './Components/Navbar/Navbar.jsx'
// import Hero from './Components/Hero/Hero.jsx'
// import './App.css'
// import Title from './Components/Title/Title.jsx'
// import PopularCourses from './Components/PopularCourses/PopularCourses.jsx'
// import BrowseCourses from './Components/BrowseAllCourses/BrowseAllCourses.jsx'
// import Testimonial from './Components/Testimonial/Testimonial.jsx'
// import Bottom from './Components/Bottom/Bottom.jsx'
// import Footer from './Components/Footer/Footer.jsx'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Navbar/>
//       <Hero/>
//       <div className="container">
//         <Title title="Popular Courses" subTitle="learn in-demand skills and get certified by KEYONICS"/>
//         <PopularCourses/>
//         <Title title="Browse All Courses" subTitle=""/>
//         <BrowseCourses/>
//         <Title title="What Our Students Say" subTitle=""/>
//         <Testimonial/>
//         <Bottom/>
//         <Footer/>
//       </div>
//     </div>
//   )
// }

// export default App
import React from 'react';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import './App.css';
import Title from './Components/Title/Title.jsx';
import PopularCourses from './Components/PopularCourses/PopularCourses.jsx';
import BrowseCourses from './Components/BrowseAllCourses/BrowseAllCourses.jsx';
import Testimonial from './Components/Testimonial/Testimonial.jsx';
import Bottom from './Components/Bottom/Bottom.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />

      {/* Home Section */}
      <div id="home"><Hero /></div>

      <div className="container">

        {/* Courses Section */}
        <div id="courses">
          <Title title="Popular Courses" subTitle="learn in-demand skills and get certified by KEYONICS"/>
          <PopularCourses />
        </div>

        {/* Certifications Section */}
        <div id="certifications">
          <Title title="Browse All Courses"subTitle="" />
          <BrowseCourses />
        </div>

        {/* Reviews Section */}
        <div id="reviews">
          <Title title="What Our Students Say" subTitle=""/>
          <Testimonial />
        </div>

        {/* About Section */}
        <div id="about"> <Bottom /></div>

        {/* Contact Section */}
        <div id="contact">
          <Footer />
        </div>

      </div>
    </div>
  );
};

export default App;