import { useTranslation } from 'react-i18next';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { AiFillStar } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";
import { Link } from 'react-router-dom';

const ServiceOffer = () => {
const {t} = useTranslation();
  return (
    <div className='service-offer'>
      <div className='photo'><img src="/imgs/img2.jpg" alt="img2.jpg" /></div>
      <div className='rating'>
        <div className="d-flex align-items-center fs-15">
          <AiFillStar className='color-2' />
          <span className='ms-1 fw-6'>5.0</span>
        </div>
        <div className='fs-08 color-1 ms-3 ms-md-0'>{t('4 оценки')}</div>
      </div>
      <div className="name">
        <Link to="1"><h4 className='mb-1'>{t('Имя Фамиллия')}</h4></Link>
        <p className='gray-3'>{t('Город')}</p>
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
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/imgs/img2.jpg" alt="img2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="price-list">
        <ul>
          <li>
            <div>{t('Название услуги')}</div>
            <div>10 €/h</div>
          </li>
          <li>
            <div>{t('Название услуги')}</div>
            <div>{t('По договоренности')}</div>
          </li>
          <li>
            <div>{t('Еще 1 услуга')}</div>
          </li>
        </ul>
      </div>
      <div className="btns">
        <button type='button' className='btn-4'>
          <SlPhone className='fs-15 d-sm-none' />
          <span className='d-none d-sm-block'>{t('Показать телефон')}</span>
        </button>
        <button type='button' className='btn-4 ms-3'>
          {t('Предложить заказ')}
        </button>
      </div>
    </div>
  );
};

export default ServiceOffer;