import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Project_1 from '../../images/Project 1.jpg'
import Project_2 from '../../images/Project 2.jpg'
import Project_3 from '../../images/Project 3.jpg'
import Project_4 from '../../images/Project 4.jpg'
import 'swiper/css'
const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper>
            <SwiperSlide>
                <img src={Project_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project_2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project_3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project_4} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio