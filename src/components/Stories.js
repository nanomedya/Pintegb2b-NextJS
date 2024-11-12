import React from 'react'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'

const Stories = () => {
    return (
        <div className='stories'>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                speed={800}
                slidesPerView={5}
                loop
                breakpoints={{
                    300: {
                        slidesPerView: 3,
                        modules: null,
                    },
                    800: {
                        slidesPerView: 5,
                        modules: null,
                    }
                }}
            >
                <SwiperSlide>
                    <Link to="/news" className='item text-dark'>
                        <div><img src={c1} alt='' /></div>
                        <div><strong>Haberler</strong></div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/notice" className='item text-dark'>
                        <div><img src={c2} alt='' /></div>
                        <div><strong>Duyurular</strong></div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products" className='item text-dark'>
                        <div><img src={c3} alt='' /></div>
                        <div><strong>Yeni Ürünler</strong></div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products" className='item text-dark'>
                        <div><img src={c4} alt='' /></div>
                        <div><strong>Bugünün Ürünleri</strong></div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products" className='item text-dark'>
                        <div><img src={c5} alt='' /></div>
                        <div><strong>Favori Ürünlerim</strong></div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Stories
