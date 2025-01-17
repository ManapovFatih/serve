import React, { useCallback, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { RxOpenInNewWindow } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { IoAddOutline, IoCashOutline, IoEyeOutline, IoInformationCircleOutline, IoLocationOutline, IoPersonCircleOutline, IoTrendingUpOutline } from "react-icons/io5";
import { NotificationManager } from 'react-notifications';
import { useSelector } from 'react-redux';
import { deleteAd, getUserAds } from '../../../services/ads';

const Profile = () => {
    const { t } = useTranslation();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const [ads, setAds] = useState({ loading: true })
    const onLoad = useCallback(() => {
        getUserAds()
            .then((res) => {
                setAds((prev) => ({ ...prev, ...res, loading: false }))
            })
            .catch(() => {
                setAds((prev) => ({ ...prev, loading: false }))
            })
    }, [])
    const onDeleteAds = useCallback((id) => {
        deleteAd(id)
            .then((res) => {
                NotificationManager.success(t('Услуга удалена'));
                onLoad();
            })
            .catch((error) =>
                NotificationManager.error(
                    typeof error?.response?.data?.error == "string"
                        ? error.response.data.error
                        : t('Неизвестная ошибка при удалении')
                )
            );
    }, [])
    useEffect(() => {
        onLoad()
    }, [])
    return (
        <section>
            <h1 className='inner text-center mb-2'>{user?.firstName} {user?.lastName}</h1>
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
                    <h3>{t('Увеличьте количество заказов')}</h3>
                    <p className='gray-3'>{t('Подключите продвижение, чтобы поднять ваш профиль в результатах поиска')}</p>
                    <Link to='/account/promotion' className='btn-3 py-3 mt-3'>{t('Подключить продвижение')}</Link>
                </div>
                <div className='d-none d-sm-flex icon-mini'>
                    <IoTrendingUpOutline />
                </div>
            </div>

            <Link to='/' className="box d-block mb-4">
                <div className='d-flex align-items-center mb-3'>
                    <IoEyeOutline className='fs-18 color-2' />
                    <h4 className='mb-0 ms-2'>{t('Публичный профиль')}</h4>
                </div>
                <p>{t('Посмотрите, как заказчики видят ваш профиль')}</p>
            </Link>

            <Row xs={1} md={2}>
                <Col>
                    <Link to='/account/promotion' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoCashOutline className='fs-18 color-5' />
                            <h4 className='mb-0 ms-2'>{t('Продвижение: 0 ₽')}</h4>
                        </div>
                        <p>{t('Счёт для оплаты продвижения')}</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='photo' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoPersonCircleOutline className='fs-18 color-2' />
                            <h4 className='mb-0 ms-2'>{t('Фото профиля')}</h4>
                        </div>
                        {user.media ?
                            <p>{t('Фото добавлено')}</p>
                            :
                            <p className='color-5'>Фото не добавлен</p>
                        }
                    </Link>
                </Col>
                <Col>
                    <Link to='addresses' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoLocationOutline className='fs-18 color-5' />
                            <h4 className='mb-0 ms-2'>{t('Адреса')}</h4>
                        </div>
                        <p>{t('Адрес не добавлен')}</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='about' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoInformationCircleOutline className='fs-18 color-5' />
                            <h4 className='mb-0 ms-2'>{t('О себе')}</h4>
                        </div>
                        <p>{t('Заполнено 0 из 18')}</p>
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
            {ads?.items && ads?.items.length > 0 && ads.items.map(item =>
                <Link to={'services/' + item.uid} className="box d-flex align-items-center justify-content-between mb-4">
                    <div className='flex-1'>
                        <div className='mb-1'>{item.category?.title}</div>
                        <h3 className='mb-0'>{item.title}</h3>
                        <div className='d-flex mt-3'>
                            <button type="button" className='btn-4 me-3' onClick={(e) => {
                                e.preventDefault(); // Предотвращаем стандартное поведение ссылки
                                navigate("/search/offers/" + item.uid);
                            }}>
                                <RxOpenInNewWindow />
                                <span className='ms-2'>{t('Посмотреть на сайте')}</span>
                            </button>
                            <button type="button" className='btn-4 me-3' onClick={(e) => {
                                e.preventDefault(); // Предотвращаем стандартное поведение ссылки
                                navigate('services/' + item.uid);
                            }}>
                                <FiEdit3 />
                                <span className='ms-2'>{t('Редактировать')}</span>
                            </button>
                            <button type="button" className='btn-3' onClick={(e) => {
                                e.preventDefault(); // Предотвращаем стандартное поведение ссылки
                                onDeleteAds(item.id); // Добавлен e, чтобы иметь доступ к event
                            }}>
                                <FiTrash2 />
                                <span className='ms-2'>{t('Удалить')}</span>
                            </button>
                        </div>

                    </div>

                </Link>
            )}
            <button type="button" className='btn-4 w-100' onClick={() => navigate("/account/profile/services")}>
                <IoAddOutline />
                <span className='ms-2'>{t('Добавить услугу')}</span>
            </button>
        </section>
    )
}

export default Profile