// import React from 'react';
// import './Hero.css';
// import star from '../../assets/star.png';
// import user from '../../assets/user.png';
// import system from '../../assets/system.png';
// // Add your classroom photo to assets folder
// import classroomPhoto from '../../assets/classroomPhoto.jpg';

// const Hero = () => {
//   return (
//     <section className="hero">
//       {/* LEFT */}
//       <div className="hero-left">
//         <h1>
//           Government-Certified<br />
//           Computer Courses for<br />
//           <span className="accent">Career-Ready Skills</span>
//         </h1>

//         <p>Practical, hands-on training with KEYONICS certification.<br />
//           Learn from experts. Get certified. Build your future.</p>

//         {/* Trust Badges */}
//         <ul className="badges">
//           <li className="badge">
//             <img src={star} alt="Star" />
//             <span>Govt. Recognized</span>
//           </li>
//           <li className="badge-divider"></li>
//           <li className="badge">
//             <img src={user} alt="User" />
//             <span>KEYONICS Certified</span>
//           </li>
//           <li className="badge-divider"></li>
//           <li className="badge">
//             <img src={system} alt="System" />
//             <span>Industry Relevant</span>
//           </li>
//         </ul>

//         {/* Buttons */}
//         <div className="btn-group">
//           <button className="btn-primary">Book Free Counselling &nbsp;→</button>
//           <button className="btn-secondary">Explore Courses &nbsp;→</button>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="hero-right">
//         <div className="img-wrapper">
//           <div className="deco-circle"></div>

//           {/* Floating card: Students */}
//           <div className="stat-card top-left">
//             <img src={user} alt="students" width={22} />
//             <div>
//               <div className="stat-num">5,800+</div>
//               <div className="stat-lbl">Students Trained</div>
//             </div>
//           </div>

//           {/* Main classroom image */}
//           <img src={classroomPhoto} className="hero-img" alt="Students in class" />

//           {/* Floating card: Courses */}
//           <div className="stat-card mid-left">
//             <img src={system} alt="courses" width={22} />
//             <div>
//               <div className="stat-num">12+</div>
//               <div className="stat-lbl">Courses</div>
//             </div>
//           </div>

//           {/* Rating card */}
//           <div className="rating-card">
//             <div className="star-icon">☆</div>
//             <div className="rating-num">4.9<span className="red-star">★</span></div>
//             <div className="rating-lbl">Student Rating<br />(Google)</div>
//           </div>
//         </div>
//       </div>

//       {/* STATS BAR */}
//       <div className="stats-bar">
//         <div className="stat-item">
//           <div className="stat-icon"><img src={user} alt="" width={26} /></div>
//           <div className="stat-text">
//             <div className="num">5,800+</div>
//             <div className="lbl">Students Trained</div>
//           </div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-icon"><img src={system} alt="" width={26} /></div>
//           <div className="stat-text">
//             <div className="num">12+</div>
//             <div className="lbl">Professional Courses</div>
//           </div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-icon"><img src={star} alt="" width={26} /></div>
//           <div className="stat-text">
//             <div className="num">4.9/5</div>
//             <div className="lbl">Average Rating (Google)</div>
//           </div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-icon"><img src={star} alt="" width={26} /></div>
//           <div className="stat-text">
//             <div className="num">100%</div>
//             <div className="lbl">Certificate Support</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import './Hero.css';
import star from '../../assets/star.png';
import user from '../../assets/user.png';
import system from '../../assets/system.png';
import classroomPhoto from '../../assets/classroomPhoto.jpg';

const Hero = () => {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Government-Certified<br />
            Computer Courses for<br />
            <span className="accent">Career-Ready Skills</span>
          </h1>

          <p>
            Practical, hands-on training with KEYONICS certification.<br />
            Learn from experts. Get certified. Build your future.
          </p>

          {/* Trust Badges */}
          <ul className="badges">
            <li className="badge">
              <img src={star} alt="Star" />
              <span>Govt. Recognized</span>
            </li>
            <li className="badge-divider"></li>
            <li className="badge">
              <img src={user} alt="User" />
              <span>KEYONICS Certified</span>
            </li>
            <li className="badge-divider"></li>
            <li className="badge">
              <img src={system} alt="System" />
              <span>Industry Relevant</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="btn-group">
            <button className="btn-primary">Book Free Counselling &nbsp;→</button>
            <button className="btn-secondary">Explore Courses &nbsp;→</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="img-wrapper">

            {/* Decorative circle */}
            <div className="deco-circle"></div>

            {/* Floating card: Students */}
            <div className="stat-card top-left">
              <img src={user} alt="students" width={22} />
              <div>
                <div className="stat-num">5,800+</div>
                <div className="stat-lbl">Students Trained</div>
              </div>
            </div>

            {/* Main classroom image */}
            <img src={classroomPhoto} className="hero-img" alt="Students in class" />

            {/* Floating card: Courses */}
            <div className="stat-card mid-left">
              <img src={system} alt="courses" width={22} />
              <div>
                <div className="stat-num">12+</div>
                <div className="stat-lbl">Courses</div>
              </div>
            </div>

            {/* Rating card */}
            <div className="rating-card">
              <div className="star-icon">☆</div>
              <div className="rating-num">4.9<span className="red-star">★</span></div>
              <div className="rating-lbl">Student Rating<br />(Google)</div>
            </div>

          </div>
        </div>

      </section>

      {/* ── STATS BAR — moved OUTSIDE hero ── */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-icon"><img src={user} alt="" width={26} /></div>
          <div className="stat-text">
            <div className="num">5,800+</div>
            <div className="lbl">Students Trained</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><img src={system} alt="" width={26} /></div>
          <div className="stat-text">
            <div className="num">12+</div>
            <div className="lbl">Professional Courses</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><img src={star} alt="" width={26} /></div>
          <div className="stat-text">
            <div className="num">4.9/5</div>
            <div className="lbl">Average Rating (Google)</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><img src={star} alt="" width={26} /></div>
          <div className="stat-text">
            <div className="num">100%</div>
            <div className="lbl">Certificate Support</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;