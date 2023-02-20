import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { AiFillStar } from "react-icons/ai";

const ServiceOffer = () => {
  return (
    <div className='service-offer'>
      <div className='photo'><img src="imgs/img2.jpg" alt="img2.jpg" /></div>
      <div className='rating'>
        <AiFillStar/>
        <span>5.0</span>
      </div>
      <div className="name">
        <h3>Имя Фамиллия</h3>
        <p>Город</p>
      </div>
      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className='imgs'>
        <Swiper
          className='slider'
          modules={[Navigation, FreeMode]}
          spaceBetween={10}
          slidesPerView={'auto'}
          freeMode={true}
          navigation
          >
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="btns">
        <button type='button' className='btn-4 py-3'>
          Показать телефон
        </button>
        <button type='button' className='btn-4 py-3 ms-3'>
          Предложить заказ
        </button>
      </div>
    </div>
  );
};

export default ServiceOffer;