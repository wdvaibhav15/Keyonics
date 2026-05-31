import React from 'react'
import './Bottom.css'
import call_icon from '../../assets/call_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import schedule_icon from '../../assets/schedule_icon.png'
import bottomRight_image from '../../assets/bottomRight_image.jpg'


const Bottom = () => {
  return (
    <div>
      <div className="bottom">
        <div className="right-img">
            <img src={bottomRight_image} alt="Right Image" />
        </div>
            <div className="center">
                <div className="center-text">
                <h2 className="">Ready to Start Your Career ?</h2>
                <p>Book your free counselling session today!</p>
                </div>
            <div className="float-btn">
                <div className="btn1">
                    <img src={call_icon} alt="Button 1" />
                    <p>Call Us</p>
                </div>
                <div className="btn1">
                    <img src={whatsapp_icon} alt="Button 2" />
                    <p>WhatsApp</p>
                </div>
                <div className="btn1">
                    <img src={schedule_icon} alt="Button 3" />
                    <p>Schedule</p>
                </div>
            </div>
            </div>
            <div className="right">
                <div className="right-btn">
        <button className="btn">Book Free Counselling</button>
    </div>
        <p>Seats are limited. Enroll Now!</p>
            </div>
      </div>
      
    </div>
  )
}

export default Bottom
