import React from 'react'
import Cta from './Cta'
import './header.css'
import ME from '../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Muhammed AbdelRaouf</h1>
        <h5 className="text-light">FrontEnd Developer</h5>        
        <Cta />
        <HeaderSocials/>
      
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header