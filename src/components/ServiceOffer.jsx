import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { AiFillStar } from "react-icons/ai";
import { SlPhone } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { RxCross1 } from 'react-icons/rx';
import PhoneInput from 'react-phone-input-2';
import { getImageURL } from '../helpers/all';

const ServiceOffer = ({ user, title, desc, uid }) => {
  const { t } = useTranslation();
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div className='service-offer'>
      <div className='photo'>
        <img src={getImageURL({ path: user?.media, size: "mini", type: "user" })} alt="img2.jpg" />
        <div className='rating'>
          <div className="d-flex align-items-center fs-15">
            <AiFillStar className='color-2' />
            <span className='ms-1 fw-6'>5.0</span>
          </div>
          <div className='fs-08 color-1 ms-3 ms-md-0'>{t('4 оценки')}</div>
        </div>
      </div>
      <div className='content'>
        <Link to={"/search/offers/" + uid}><h4 className='mb-1'>{user.firstName} {user.lastName}</h4></Link>
        <p className='gray-3'>{user.data?.city}</p>
        <h5 className='mb-1'>{title}</h5>
        <p className="text">{desc}</p>

        <div className="btns">
          <button type='button' className='btn-4' onClick={setShowPhone}>
            <SlPhone className='fs-15 d-sm-none' />
            <span className='d-none d-sm-block'>{t('Показать телефон')}</span>
          </button>
          <button type='button' className='btn-4 ms-3'>
            {t('Предложить заказ')}
          </button>
        </div>
      </div>
      <Modal show={showPhone} onHide={setShowPhone} centered size="md" >
        <h3 className='text-center mt-3'>{t('Номер телефона')}</h3>
        <button type='button' onClick={() => setShowPhone(false)} className='close'>
          <RxCross1 />
        </button>
        <Modal.Body className='box bg-1 mt-3'>
          {/* <h3 className='text-center '>{t('Номер телефона')}</h3> */}

          <PhoneInput className="text-center" disabled value={user?.phone} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ServiceOffer;