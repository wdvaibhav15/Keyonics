import React from 'react'
import './Header.css'
import government_icon from '../../assets/government_icon.png'
import keyonics_icon from '../../assets/check_icon.png'
import practical_training_icon from '../../assets/computer_icon.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='government_registration'>
            <img className='image' src={government_icon} alt="" />
            <p>Government registration</p>
        </div>
        <div className='keyonics_certified'>
            <img className='image' src={keyonics_icon} alt="" />
            <p>KEYONICS certified</p>
        </div>
        <div className='practical_training'>
            <img className='image' src={practical_training_icon} alt="" />
            <p>Practical computer training for real courses</p>
        </div>
        
    </div>
  )
}

export default Header
