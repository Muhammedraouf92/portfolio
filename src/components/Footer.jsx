import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#header" className='footer-logo'>RAOUF</a>
      <ul className="permalink">
        <a href="#header">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <AiFillFacebook/>
        </a>
        <a href="https://facebook.com">
        <BsInstagram/>
        </a>
        <a href="https://facebook.com">
        <AiOutlineTwitter/>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; RAOUF all copy rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer