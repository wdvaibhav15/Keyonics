import React from 'react'
import './BrowseAllCourses.css'
import { useState } from 'react';
import first_icon from '../../assets/first_icon.png'
import second_icon from '../../assets/second_icon.png'
import third_icon from '../../assets/third_icon.png'
import fourth_icon from '../../assets/fourth_icon.png'
import fifth_icon from '../../assets/fifth_icon.png'
import sixth_icon from '../../assets/sixth_icon.png'
import certificate from '../../assets/certificate.png'
import help_icon1 from '../../assets/help_icon1.png'
import help_icon2 from '../../assets/help_icon2.png'
import help_icon3 from '../../assets/help_icon3.png'
import help_icon4 from '../../assets/help_icon4.png'
import next_icon from '../../assets/next-icon.png'

const courses = [
  {
    id: 1,
    title: 'All Courses',
  },
  {
    id: 2,
    title: 'Accounting',
  },
  {
    id: 3,
    title: 'Programming',
  },
  {
    id: 4,
    title: 'Designing',
  },
  {
    id: 5,
    title: 'Productivity',
  },
  {
    id: 6,
    title: 'Typing',
  },
  {
    id: 7,
    title: 'Development',
  },
  {
    id: 8,
    title: 'Data Analytics',
  },

]

const blocks = [
  {
    id: 1,
    title: 'MS Office',
    duration: "1 Month",
  },
  {
    id: 2,
    title: 'Adv. Excel',
    duration: "1.5 Months",
  },
  {
    id: 3,
    title: 'C Programming',
    duration: "2 Months",
  },
  {
    id: 4,
    title: 'Java Programming',
    duration: "3 Months",
  },
  {
    id: 5,
    title: 'Data Analytics',
    duration: "2 Months",
  },
  {
    id: 6,
    title: 'Digital Marketing',
    duration: "2 Months",
  }
]

const keyonicsBlocks = [
  {
    id: 1,
    image: first_icon,
    title: 'KEYONICS Certified Learning',
    Description:'Government-recognized certification that adds value to your career.',
  },
  {
    id: 2,
    image: second_icon,
    title: 'Practical Lab Training',
    Description:'Hands-on training with real projects and industry tools.',
  },
  {
    id: 3,
    image: third_icon,
    title: 'Beginner-Friendly Teaching',
    Description:'Easy-to-understand concepts for students of all backgrounds.',
  },
  {
    id: 4,
    image: fourth_icon,
    title: 'Modern Curriculum',
    Description:'Updated syllabus aligned with industry standards.',
  },
  {
    id: 5,
    image: fifth_icon,
    title: 'Career Guidance',
    Description:'Resume help, interview preparation & career counselling.',
  },
  {
    id: 6,
    image: sixth_icon,
    title: 'Affordable Fee Structure',
    Description:'Quality education at reasonable and transparent fees.',
  }
]



const BrowseAllCourses = () => {
    const [activeTab, setActiveTab] = useState('All Courses');
   
  return (
    <>
    <div className="BrowseCourses">
        {courses.map((course)=>(
            <div className={`Browse-card ${activeTab === course.title ? 'active' : ''}`}
                 onClick={() => setActiveTab(course.title)} key={course.id}>
                <h3  >{course.title}</h3>
            </div>
        ))}
      
    </div>
    <div className="BlockCourses">
        {blocks.map((block)=>(
            <div className="Block-card" key={block.id}>
              <div >
                <h3  >{block.title}</h3>
                <p>{block.duration}</p>
              </div>
                
            </div>
        ))}
      
    </div>
      <div className="heading">
        <h2>Why choose KEYONICS ?</h2>
      </div>
    <div className="keyoncis">
        {keyonicsBlocks.map((block)=>(
            <div className="keyoncis-card" key={block.id}>
              <img src={block.image} alt='' />
                <h3  >{block.title}</h3>
                <p>{block.Description}</p>
            </div>
        ))}
      
    </div>

    
    <div className="journey">
        
        <div className="left-side">
          <h2>Your journey to success</h2>
          <div className="number">
            <p className="number-item1">01</p>
            <p className="number-item1">02</p>
            <p className="number-item1">03</p>
            <p className="number-item1">04</p>
          </div>
          <div className="text">
            <div className="text-item1">
              <h3>Book Councelling</h3>
              <p>Talk to our experts and choose the right course for tou</p>
            </div>
            <div className="text-item1">
              <h3>Learn & Practice</h3>
              <p>Attend classes pratice in lab & work on projects</p>
            </div>
            <div className="text-item1">
              <h3>Get Certified</h3>
              <p>Appear for assessment and earn your KEYONICS certificate</p>
            </div>
            <div className="text-item1">
              <h3>Build Your Career</h3>
              <p>Use your  skills get job-ready & grow your career</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={certificate} alt="certificate" />
        </div>
      </div>


      <div className="job-Ready">
        <h3>We help you become job-Ready</h3>
        <div className="sections">

          <div className="section">
            <div className="img">
              <img src={help_icon1} alt='' />
            </div>
            <div className="text">
              <h4>Resume Building</h4>
              <p>Professional resume that gets your noticed</p>
            </div>
          </div>

          <div className="section">
            <div className="img">
              <img src={help_icon2} alt='' />
            </div>
            <div className="text">
              <h4>Interview Books</h4>
              <p>Prepare with tips , questions & mock interviews</p>
            </div>
          </div>

          <div className="section">
            <div className="img">
              <img src={help_icon3} alt='' />
            </div>
            <div className="text">
              <h4>Practical Assignments</h4>
              <p>Real-world tasks to strengthen your skills</p>
            </div>
          </div>

          <div className="section">
            <div className="img">
              <img src={help_icon4} alt='' />
            </div>
            <div className="text">
              <h4>Mentorship Support</h4>
              <p>Guidance from experts through your journey</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BrowseAllCourses
