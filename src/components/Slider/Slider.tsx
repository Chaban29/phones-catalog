import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import firstSlide from '../../images/category-images/Iphone15-Banner.jpg';
import secondSlide from '../../images/category-images/aalp-magsafe-header-202309.png';
import thirdSlice from '../../images/category-images/tablet-banner.jpg';
import cl from './slider.module.scss';

interface Slide {
  image: string;
  title: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={secondSlide} alt='' className={cl.img__slider} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={firstSlide} alt='' className={cl.img__slider} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={thirdSlice} alt='' className={cl.img__slider} />
      </SwiperSlide>
    </Swiper>
  );
};

export { Slider };
