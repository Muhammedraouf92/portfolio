import React,{useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'

const Nav = () => {
  const [active, setActive] = useState('#header')
 
  return (
    <nav>
      <a href="#header" 
      onClick={()=>setActive('#header')}
      className={active === '#header'? 'active' : ''}><AiOutlineHome /> </a> 
      <a href="#about" onClick={()=>setActive('#about')} 
      className={active === '#about'? 'active' : ''}>
        <BiUserCircle /> </a> 
      <a href="#experience"
      onClick={()=>setActive('#experience')} 
      className={active === '#experience'? 'active' : ''}
      ><BiBook /> </a> 
      <a href="#services"
       onClick={()=>setActive('#services')} 
       className={active === '#services'? 'active' : ''}
      ><MdMiscellaneousServices /> </a> 
      <a href="#contact"
       onClick={()=>setActive('#contact')} 
       className={active === '#contact'? 'active' : ''}
      ><AiOutlineContacts /> </a> 
    </nav>
  )
}

export default Nav