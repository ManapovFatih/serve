import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillStar, AiOutlineStop } from "react-icons/ai";
import { RxMixerHorizontal } from "react-icons/rx";
import { SlPhone } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { FreeMode, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoEllipsisVertical } from 'react-icons/io5';

const OfferPage = () => {
const {t} = useTranslation();
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);
  return (
    <div>
      <Row>
        <Col xs={12} xl={9}>
          <div className='view-offer'>
            <div className='topic'>
              <div className='head'>
                <div className='photo'><img src="/imgs/img2.jpg" alt="img2.jpg" /></div>
                <div className='title'>
                  <Link to="1"><h2 className='fw-7 mb-1'>{t('Алексей Сергеевич Добанов')}</h2></Link>
                  <p className='gray-3'>{t('Город')}</p>

                  <div className="btns">
                    <button type='button' className='btn-3'>
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

              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <ul className="options">
                <li>
                  <p ><strong>{t('Время для связи:')}</strong>{t('c 08:00 до 21:00')}</p>
                </li>
                <li>
                  <p ><strong>{t('Время для связи:')}</strong>{t('c 08:00 до 21:00')}</p>
                </li>
                <li>
                  <p ><strong>{t('Время для связи:')}</strong>{t('c 08:00 до 21:00')}</p>
                </li>
              </ul>
            </div>
            <div className='works'>
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
            </div>
            <div className='services'>
              <div className="price-list">
                <ul>
                  <li>
                    <h3 className='fw-8 mb-1'>{t('Ремонт квартир и домов')}</h3>
                    <p className='title'>{t('Ремонт и строительсто')}</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </li>
                  <li>
                    <p ><strong>{t('Название услуги')}</strong></p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </li>
                  <li>
                    <p ><strong>{t('Название услуги')}</strong></p>
                    <p ><strong>{t('160 290 Р')}</strong></p>
                  </li>
                  <li>
                    <p ><strong>{t('Еще 10 услуг')}</strong></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={3}>
          {/* <Offcanvas show={showFilter} onHide={handleCloseFilter} responsive="xl" placement={'end'}>
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
          </Offcanvas> */}

        </Col>
      </Row>
    </div>
  );
};

export default OfferPage;