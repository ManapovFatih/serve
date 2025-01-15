import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillStar, AiOutlineStop } from "react-icons/ai";
import { RxCross1, RxMixerHorizontal } from "react-icons/rx";
import { SlPhone } from "react-icons/sl";
import { Link, useParams } from 'react-router-dom';
import { FreeMode, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { getAd } from '../services/ads';
import { Modal } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import { getImageURL } from '../helpers/all';

const OfferPage = () => {
  const { t } = useTranslation();
  const [showFilter, setShowFilter] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const { offerId } = useParams();


  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);
  const [offers, setOffers] = useState({ items: [], loading: true });
  useEffect(() => {
    getAd({ id: offerId })
      .then((res) => {
        setOffers((prev) => ({
          ...prev,
          ...res,
          loading: false
        }));
      })
      .catch(() => setOffers((prev) => ({ ...prev, loading: false })));
  }, []);
  console.log(offers)
  return (
    <div>
      <Row>
        <Col xs={12} xl={9}>
          <div className='view-offer'>
            <div className='topic'>
              <div className='head'>
                <div className='photo'> <img src={getImageURL({ path: offers?.user?.media, size: "mini", type: "user" })} alt="img2.jpg" /></div>
                <div className='title'>
                  <Link to="1"><h2 className='fw-7 mb-1'>{offers?.user?.firstName} {offers?.user?.lastName}</h2></Link>
                  <p className='gray-3'>{offers?.user?.data?.city}</p>

                  <div className="btns">
                    <button type='button' className='btn-3' onClick={setShowPhone}>
                      <SlPhone className='fs-15 d-sm-none' />
                      <span className='d-none d-sm-block'>{t('Показать телефон')}</span>
                    </button>
                    <button type='button' className='btn-4 ms-3'>
                      {t('Предложить заказ')}
                    </button>
                  </div>
                </div>
                <div className='drop'>
                  <Dropdown>
                    <Dropdown.Toggle variant="none">
                      <IoEllipsisVertical className="fs-15" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                      <Dropdown.Item as="button">
                        <span>{t('Пожаловаться')}</span>
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <span>{t('Поделиться')}</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <p className="text">{offers?.user?.about}</p>
              <ul className="options">
                <li>
                  <p ><strong>{t('Время для связи:')}</strong> {t('c')} {offers?.user?.data?.startPhone} {t('до')} {offers?.user?.data?.endPhone}</p>
                </li>
              </ul>
            </div>
            {/* <div className='works'>
              <div className='imgs'>
                <h3 className='fw-8'>{t('Пример работ')}</h3>
                <Swiper
                  className='slider'
                  loop={false}
                  spaceBetween={15}
                  slidesPerView={'auto'}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Mousewheel]}
                  initialSlide={1}
                  freeMode={{
                    enabled: true,
                    sticky: true,
                  }}
                  mousewheel={true}
                >
                  <SwiperSlide key={1}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={2}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={3}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={4}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={5}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={6}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={7}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>


                  <SwiperSlide key={8}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={9}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={10}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>

                  <SwiperSlide key={11}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={12}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                  <SwiperSlide key={13}>
                    <img src="/imgs/img2.jpg" alt="img2.jpg" />
                    <p className='title'>{t('Дизайн проект')}</p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
            <div className='services'>
              <div className="price-list">
                <ul>
                  <li>
                    <h3 className='fw-8 mb-1'>{offers?.title}</h3>
                    <p className='title'>{offers?.category?.title}</p>
                    <p className="text">{offers?.desc}</p>
                  </li>
                  {/* <li>
                    <p ><strong>{t('Название услуги')}</strong></p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </li>
                  <li>
                    <p ><strong>{t('Название услуги')}</strong></p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </li> */}
                  <li>
                    {/* <p ><strong>{t('Цена')}</strong></p> */}
                    <p ><strong>{t('Цена')}: {offers?.price}</strong></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        {/* <Col xl={3}>
          <Offcanvas show={showFilter} onHide={handleCloseFilter} responsive="xl" placement={'end'}>
            <Offcanvas.Body>
              <button type='button' className='close d-xl-none' onClick={handleCloseFilter}>
                <RxCross2 />
              </button>
              <form action="" className="filter">
                <fieldset>
                  <legend>Название подраздела</legend>
                  <ul>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <button type='button'>Ещё 10</button>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Нужно привезти с собой</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment' />
                        <span className='ms-2'>Пылесос</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment' />
                        <span className='ms-2'>Швабра</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment' />
                        <span className='ms-2'>Моющее средство</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment' />
                        <span className='ms-2'>Тряпки</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Пол</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='sex' />
                        <span className='ms-2'>Мужской</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='sex' />
                        <span className='ms-2'>Женский</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Возраст</legend>
                  <Row xs={2} className='gx-2'>
                    <Col>
                      <input type="number" placeholder='0' />
                    </Col>
                    <Col>
                      <input type="number" placeholder='0' />
                    </Col>
                  </Row>
                </fieldset>
                <fieldset>
                  <legend>Тип исполнителя</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='executor' />
                        <span className='ms-2'>Частное лицо</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor' />
                        <span className='ms-2'>Организация</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Место</legend>
                  <input type="text" placeholder='Место' />
                </fieldset>
                <fieldset>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='executor' />
                        <span className='ms-2'>С примерами</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor' />
                        <span className='ms-2'>Скидки и акции</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor' />
                        <span className='ms-2'>Работает сейчас</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
              </form>
            </Offcanvas.Body>
          </Offcanvas>

        </Col> */}
      </Row>
      <Modal show={showPhone} onHide={setShowPhone} centered size="md" >
        <h3 className='text-center mt-3'>{t('Номер телефона')}</h3>
        <button type='button' onClick={() => setShowPhone(false)} className='close'>
          <RxCross1 />
        </button>
        <Modal.Body className='box bg-1 mt-3'>
          {/* <h3 className='text-center '>{t('Номер телефона')}</h3> */}

          <PhoneInput className="text-center" disabled value={offers.user?.phone} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OfferPage;