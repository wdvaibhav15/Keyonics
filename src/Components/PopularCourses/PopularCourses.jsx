import React from 'react';
import './PopularCourses.css';

// Import your course icons from assets
import excelIcon   from '../../assets/excel.png';
import tallyIcon   from '../../assets/tally.png';
import pythonIcon  from '../../assets/python.png';
import webdevIcon  from '../../assets/webdev.png';
import photoshopIcon from '../../assets/dtp.png';
import dtpIcon     from '../../assets/typing.png';

const courses = [
  {
    id: 1,
    icon: excelIcon,
    title: 'Advanced Excel & Data Analytics',
    desc: 'Analyze data, build dashboards and make smarter decisions.',
    duration: '1.5 Months',
  },
  {
    id: 2,
    icon: tallyIcon,
    title: 'Tally Prime with GST',
    desc: 'Master accounting, invoicing, GST & business management.',
    duration: '1.5 Months',
  },
  {
    id: 3,
    icon: pythonIcon,
    title: 'Python Programming',
    desc: 'Learn Python from basics to advanced with real projects.',
    duration: '2.5 Months',
  },
  {
    id: 4,
    icon: webdevIcon,
    title: 'Full Web Development',
    desc: 'HTML, CSS, JavaScript, PHP, MySQL & more.',
    duration: '3 Months',
  },
  {
    id: 5,
    icon: photoshopIcon,
    title: 'Graphic Design & Photoshop',
    desc: 'Design creatives, banners, social media & more.',
    duration: '1.5 Months',
  },
  {
    id: 6,
    icon: dtpIcon,
    title: 'DTP & Kannada Typing',
    desc: 'Learn DTP, MS Office & Kannada/English Typing.',
    duration: '1 Month',
  },
];

const PopularCourses = () => {
  return (
    <>
    <section className="popular-courses">
      

      {/* Cards Grid */}
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            {/* Icon */}
            <div className="card-icon">
              <img src={course.icon} alt={course.title} />
            </div>

            {/* Content */}
            <div className="card-content">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>

              {/* Footer: duration + arrow */}
              <div className="card-footer">
                <span className="duration-badge">Duration: {course.duration}</span>
                <button className="arrow-btn" aria-label="View course">→</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="view-all-wrap">
        <button className="view-all-btn">View All Courses &nbsp;→</button>
      </div>
    </section>
    </>
  );
};

export default PopularCourses;