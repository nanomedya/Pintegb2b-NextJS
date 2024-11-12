import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import slider1 from '../images/slider1.svg'

const HomeSlider = () => {
    return (
        <div className='home-slider'>
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                speed={2000}
                loop
            >
                <SwiperSlide>
                    <div>
                        <img src={slider1} alt='' className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider1} alt='' className='w-100' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider1} alt='' className='w-100' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeSlider
