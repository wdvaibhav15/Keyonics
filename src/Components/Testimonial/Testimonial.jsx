import React, { useRef, useState, useEffect } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'
import plus from '../../assets/plus_icon.png'

const slides = [
  { id: 1, img: user1, name: 'Emily Johnson',  role: 'Computer Science',       text: "Choosing to pursue my degree at Edu-Ray was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
  { id: 2, img: user2, name: 'John Doe',        role: 'UI/UX Designer',          text: "This college has completely transformed my learning experience. The faculty members are highly supportive, and the campus environment motivates students to grow academically and personally." },
  { id: 3, img: user3, name: 'Sophia Williams', role: 'Information Technology',  text: "The practical learning approach and modern facilities helped me build confidence in my skills. I am grateful for the guidance and opportunities provided by the college." },
  { id: 4, img: user4, name: 'Michael Brown',   role: 'Business Administration', text: "Studying here has been one of the best decisions of my life. The teachers are experienced, and the placement support has been excellent for career growth." },
]

const Testimonial = () => {
  const slider = useRef()
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(2)

  // detect how many cards to show based on screen width
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 640) setPerView(1)       // mobile  → 1 card
      else if (window.innerWidth <= 1024) setPerView(2) // tablet  → 2 cards
      else setPerView(2)                                 // desktop → 2 cards
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = slides.length - perView

  const slideForward = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : prev))
  }

  const slideBackward = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev))
  }

  // each card width in % based on perView
  const cardWidth = 100 / perView

  return (
    <>
      {/* ── TESTIMONIAL ── */}
      <div className='testimonial'>

        {/* Back arrow */}
        <img
          src={back_icon}
          alt="back"
          className={`back-btn ${current === 0 ? 'disabled' : ''}`}
          onClick={slideBackward}
        />

        {/* Next arrow */}
        <img
          src={next_icon}
          alt="next"
          className={`next-btn ${current === maxIndex ? 'disabled' : ''}`}
          onClick={slideForward}
        />

        <div className="slider">
          <ul
  ref={slider}
  style={{
    transform: `translateX(-${current * (100 / slides.length)}%)`,
    width: `${(slides.length / perView) * 100}%`,
    display: 'flex',
    transition: 'transform 0.45s ease',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }}
>
  {slides.map((slide) => (
    <li
      key={slide.id}
      style={{
        width: `${100 / slides.length}%`,  /* each card = 1/4 of total ul */
        flexShrink: 0,
        padding: '12px',
        boxSizing: 'border-box',
      }}
    >
      <div className="slide">
        <div className="user-info">
          <img src={slide.img} alt={slide.name} />
          <div>
            <h3>{slide.name}</h3>
            <span>{slide.role}</span>
          </div>
        </div>
        <p>{slide.text}</p>
      </div>
    </li>
  ))}
</ul>
        </div>

        {/* Dot indicators */}
        <div className="dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              className={`dot ${current === i ? 'active-dot' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

      </div>

      {/* ── FAQ SECTION ── */}
      <div className="questions">

        <div className="mainHeading">
          <h2>Frequently Asked <span>Questions</span></h2>
        </div>

        <div className="question">

          <div className="first-three">
            <div className="infront">
              <p>Is the certificate government recognized?</p>
              <img src={plus} alt="" />
            </div>
            <div className="infront">
              <p>Do you provide placement assistance?</p>
              <img src={plus} alt="" />
            </div>
            <div className="infront">
              <p>What is the duration of the courses?</p>
              <img src={plus} alt="" />
            </div>
          </div>

          <div className="last-three">
            <div className="infront">
              <p>Can beginners join the courses?</p>
              <img src={plus} alt="" />
            </div>
            <div className="infront">
              <p>Are classes online or offline?</p>
              <img src={plus} alt="" />
            </div>
            <div className="infront">
              <p>How can I enroll in a course?</p>
              <img src={plus} alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Testimonial