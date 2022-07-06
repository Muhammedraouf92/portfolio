import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact-container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>mohamedraouf27@gmail.com</h5>
          <a href="mailto:mohamedraouf27@gmail.com">Send A msg</a>
        </article>
        <article className="contact__option">
          <BsMessenger className='contact__option-icon'/>
          <h4>Facebook</h4>
          <h5>mohamedraouf27@gmail.com</h5>
          <a href="https://facebook.com/muhammedraouf92">Messenger</a>
        </article>
        <article className="contact__option">
          <AiOutlineWhatsApp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+01112234556</h5>
          <a href="mailto:mohamedraouf27@gmail.com">Send a message</a>
        </article>
      </div>
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name'required/>
        <input type="email" name='email' placeholder='Your Email'required/>
        <textarea name="message" rows="7"placeholder='Your Message'required></textarea>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
