import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { IoAlertCircleOutline, IoTrendingUpOutline, IoAddOutline, IoEyeOutline, IoCashOutline, IoPersonCircleOutline, IoInformationCircleOutline, IoLocationOutline, IoListOutline, IoCheckmarkCircleOutline, IoArrowForwardOutline } from "react-icons/io5"
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <section>
            <h1 className='inner text-center mb-2'>{user?.firstName}</h1>
            {/* <p className='d-flex align-items-center justify-content-center text-center gray-3 mb-4 mb-sm-5'>
                <IoAlertCircleOutline className='fs-13 red' />
                <span className='ms-2'>Профиль опубликован – 1 ошибка</span>
            </p> */}
            {/* 
            <div className="box mb-4">
                <div className="d-flex">
                    <button type='button' className='btn-4 p-2 p-sm-3'>
                        <span>Заказчик</span>
                        <IoArrowForwardOutline className='fs-14 ms-2' />
                    </button>
                    <button type='button' className='btn-4 p-2 p-sm-3 ms-3 ms-sm-4'>
                        <span>Исполнитель</span>
                        <IoArrowForwardOutline className='fs-14 ms-2' />
                    </button>
                </div>
                <hr />
                <label className='fs-12 fw-6'>
                    <input type="checkbox" />
                    <span className='ms-2'>Принимаю заказы</span>
                </label>
            </div> */}

            {/* <div className="box mb-4 position-relative">
                <Swiper
                    className='sw-mini'
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        clickable: true,
                        enabled: true,
                    }}
                    breakpoints={{
                        992: {
                            pagination: {
                                enabled: false,
                            },
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='d-flex align-items-center'>
                            <IoAlertCircleOutline className='fs-18 red' />
                            <h4 className='mb-0 ms-2'>Профиль не опубликован</h4>
                        </div>
                        <ul className="list-unstyled">
                            <li className='mt-3'>
                                <a href='/' className='link'>Паспорт</a> —
                                <span className='red'> не заполнено</span>
                            </li>
                            <li className='mt-3'>
                                <a href='/' className='link'>Телефон</a> —
                                <span className='red'> уже используется другим пользователем</span>
                            </li>
                        </ul>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center'>
                            <IoAlertCircleOutline className='fs-18 red' />
                            <h4 className='mb-0 ms-2'>Подтвердите, что вы — это вы</h4>
                        </div>
                        <div className='d-md-flex align-items-start mt-3'>
                            <div className="flex-1">
                                <p>Чтобы опубликовать ваш профиль на Яндекс.Услугах, нужно пройти проверку: загрузить фото профиля и показать нам паспорт (больше его никто не увидит).</p>
                            </div>
                            <button type='button' className='btn-4 p-3 mt-3 mt-md-0 ms-md-2'>
                                <IoAddOutline className='fs-13 me-1' />
                                <span>Начать</span>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center'>
                            <IoCheckmarkCircleOutline className='fs-18 gray-3' />
                            <h4 className='mb-0 ms-2'>Добавьте цены</h4>
                        </div>
                        <div className='d-md-flex mt-3'>
                            <div className="flex-1">
                                <p>Так заказчикам будет легче сделать выбор</p>
                            </div>
                            <button type='button' className='btn-4 p-3 mt-3 mt-md-0 ms-md-2'>
                                <IoAddOutline className='fs-13 me-1' />
                                <span>Добавить</span>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-items-center'>
                            <IoCheckmarkCircleOutline className='fs-18 gray-3' />
                            <h4 className='mb-0 ms-2'>Добавьте детали работы</h4>
                        </div>
                        <div className='d-md-flex mt-3'>
                            <div className="flex-1">
                                <p>Укажите специфику работы, рабочее время в категории «Разработка сайтов»</p>
                            </div>
                            <button type='button' className='btn-4 p-3 mt-3 mt-md-0 ms-md-2'>
                                <IoAddOutline className='fs-13 me-1' />
                                <span>Добавить</span>
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> */}

            <div className="box mb-4 d-flex align-items-center">
                <div className='flex-1'>
                    <h3>Увеличьте количество заказов</h3>
                    <p className='gray-3'>Подключите продвижение, чтобы поднять ваш профиль в результатах поиска</p>
                    <Link to='/account/promotion' className='btn-3 py-3 mt-3'>Подключить продвижение</Link>
                </div>
                <div className='d-none d-sm-flex icon-mini'>
                    <IoTrendingUpOutline />
                </div>
            </div>

            <Link to='/' className="box d-block mb-4">
                <div className='d-flex align-items-center mb-3'>
                    <IoEyeOutline className='fs-18 color-2' />
                    <h4 className='mb-0 ms-2'>Публичный профиль</h4>
                </div>
                <p>Посмотрите, как заказчики видят ваш профиль</p>
            </Link>

            <Row xs={1} md={2}>
                <Col>
                    <Link to='/account/promotion' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoCashOutline className='fs-18 color-5' />
                            <h4 className='mb-0 ms-2'>Продвижение: 0 ₽</h4>
                        </div>
                        <p>Счёт для оплаты продвижения</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='photo' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoPersonCircleOutline className='fs-18 color-2' />
                            <h4 className='mb-0 ms-2'>Фото профиля</h4>
                        </div>
                        <p>Фото добавлено</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='addresses' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoLocationOutline className='fs-18 color-5' />
                            <h4 className='mb-0 ms-2'>Адреса</h4>
                        </div>
                        <p>Адрес не добавлен</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='about' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoInformationCircleOutline className='fs-18 color-5' />
                            <h4 className='mb-0 ms-2'>О себе</h4>
                        </div>
                        <p>Заполнено 0 из 18</p>
                    </Link>
                </Col>
            </Row>

            {/* <Link to='specialties' className="box d-block mb-4">
                <div className='d-flex align-items-center mb-3'>
                    <IoListOutline className='fs-18 color-2' />
                    <h4 className='mb-0 ms-2'>Специальности</h4>
                </div>
                <p>Специальности добавлены (1)</p>
            </Link> */}

            <Link to='services' className="box d-flex align-items-center justify-content-between mb-4">
                <div className='flex-1'>
                    <div className='mb-1'>Компьютеры и IT</div>
                    <h3 className='mb-0'>Разработка сайтов</h3>
                </div>
                <div>1 услуга</div>
            </Link>

            <button type="button" className='btn-4 w-100'>
                <IoAddOutline />
                <span className='ms-2'>Добавить услугу</span>
            </button>
        </section>
    )
}

export default Profile