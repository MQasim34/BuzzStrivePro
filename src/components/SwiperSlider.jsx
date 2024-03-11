import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';

import 'swiper/css'

import { clientlogo1,clientlogo2,clientlogo3,clientlogo4 } from '../assets/images';

const SwiperSlider = () => {
    return (
        <div className='sldierMain'>
            <div> <Swiper className="mySwiper"
                slidesPerView={4}
                loop={true}
                spaceBetween={30}
                autoplay={{
                    delay: 3000
                }}
                modules={[Autoplay]}>
                <SwiperSlide><img src={clientlogo1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={clientlogo2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={clientlogo3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={clientlogo4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={clientlogo1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={clientlogo2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={clientlogo3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={clientlogo4} alt="" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default SwiperSlider