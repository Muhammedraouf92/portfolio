import React from 'react'
import './testimonial.css'
import AVTR1 from '../assets/avatar1.jpg'
import AVTR2 from '../assets/avatar2.jpg'
import AVTR3 from '../assets/avatar3.jpg'
import AVTR4 from '../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
       
      
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="" />            
          </div>
          <h5 className='class__name'>Rachel Green</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam velit esse perspiciatis totam voluptatem libero dolor, tempora, quis non minima commodi soluta iusto quia voluptatum suscipit natus ipsum dicta consequatur?
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="" />            
          </div>
          <h5 className='class__name'>Sheldon Copper</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam velit esse perspiciatis totam voluptatem libero dolor, tempora, quis non minima commodi soluta iusto quia voluptatum suscipit natus ipsum dicta consequatur?
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="" />            
          </div>
          <h5 className='class__name'>Ross Geller</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam velit esse perspiciatis totam voluptatem libero dolor, tempora, quis non minima commodi soluta iusto quia voluptatum suscipit natus ipsum dicta consequatur?
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="" />            
          </div>
          <h5 className='class__name'>Tina snow</h5>
            <small className='client__review'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam velit esse perspiciatis totam voluptatem libero dolor, tempora, quis non minima commodi soluta iusto quia voluptatum suscipit natus ipsum dicta consequatur?
            </small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonial