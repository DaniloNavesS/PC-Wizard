import { Navigation, Pagination, Scrollbar, A11y } from '../../../node_modules/swiper';

import logo from './logo_ds/LOGO_FUNDO_PURPLE.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import css
import './Carrosel.css'

const slides = [logo]

export default () => {
  return (
    <div className='container'>
      <Swiper className='swiper-container'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {slides.map (slide => (
        <SwiperSlide>
        <img src={slide}/>
        </SwiperSlide>) ) }
        {slides.map (slide => (
        <SwiperSlide>
        <img src={slide}/>
        </SwiperSlide>) ) }
        {slides.map (slide => (
        <SwiperSlide>
        <img src={slide}/>
        </SwiperSlide>) ) }

        {slides.map (slide => (
        <SwiperSlide>
        <img src={slide}/>
        </SwiperSlide>) ) }

        {slides.map (slide => (
        <SwiperSlide>
        <img src={slide}/>
        </SwiperSlide>) ) }

    </Swiper>
    </div>
    
  );
};