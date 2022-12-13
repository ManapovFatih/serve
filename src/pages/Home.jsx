import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import Labor from '../components/Labor'
import SearchForm2 from '../components/SearchForm2'
import AppLinks from '../components/AppLinks'

import icon1 from '../assets/imgs/icons/icon-1.png'
import icon2 from '../assets/imgs/icons/icon-2.png'
import icon3 from '../assets/imgs/icons/icon-3.png'
import icon4 from '../assets/imgs/icons/icon-4.png'
import map from '../assets/imgs/map.jpg'
import smartphone from '../assets/imgs/smartphone.png'
import { TfiPaintRoller, TfiBriefcase, TfiTruck, TfiCar, TfiMore } from "react-icons/tfi"
import { SlScreenDesktop } from "react-icons/sl"
import { RxScissors, RxLapTimer } from "react-icons/rx"
import OrdersSlider from '../components/OrdersSlider'
import HelpSlider from '../components/HelpSlider'


const Home = () => {
    return (
        <main>
            <section className="main">
                <Container>
                    <Row className='h-100'>
                        <Col md={8} className='d-flex flex-column justify-content-center'>
                            <h1>Не&nbsp;оставим наедине с&nbsp;проблемами</h1>
                            <SearchForm2 />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="sec-1 py-5">
                <Container>
                    <h3>Предложите ваше задание</h3>
                    <div className="position-relative">
                        <Swiper
                            className='slider-6 mt-4'
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={6}
                            navigation
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1400: {
                                    slidesPerView: 6,
                                    spaceBetween: 20,
                                },
                            }}
                            >
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Labor />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </section>

            <section className="sec-2 py-5">
                <Container>
                    <h3>114 исполнителей живут неподалёку</h3>
                    <p className='mb-4'>Обратитесь к ним, чтобы не ждать специалиста с другого конца города</p>
                    <Row className='gx-0 position-relative'>
                        <Col lg={4}>
                            <div className="box">
                                <form action="">
                                    <div>
                                        <h3>Рядом с вами</h3>
                                        <p>Мы найдём специалистов, которые живут рядом с вами!</p>
                                    </div>
                                    <input type="text" placeholder='Ваш адрес'/>
                                    <button type='button' className='btn-1 w-100 px-3'>Расскажите, что у&nbsp;вас случилось</button>
                                </form>
                            </div>
                        </Col>
                        <Col xs={12} lg={8}>
                            <svg className='svg-animation' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1614 780" width="1614" height="780" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <clipPath id="__lottie_element_28">
                                <rect width="1614" height="780" x="0" y="0"></rect>
                            </clipPath>
                                <image href={icon1} />
                                <image href={icon2} />
                                <image href={icon3} />
                                <image href={icon4} />
                                <image href={map} />
                            </defs>
                            
                            <g clipPath="url(#__lottie_element_28)">
                                <g className="png" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                    <image width="1614px" height="780px" preserveAspectRatio="xMidYMid slice" xlinkHref={map} />
                                </g>
                                <g className="png" transform="matrix(1,0,0,1,322.4026794433594,508.68353271484375)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon2} />
                                </g>
                                <g className="png" transform="matrix(1,0,0,1,1283.14404296875,405.8525695800781)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon3} />
                                </g>
                                <g className="png" transform="matrix(1,0,0,1,386.5847473144531,13.723678588867188)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon4} />
                                </g>
                                <g className="png" transform="matrix(1,0,0,1,1311.2757568359375,-70.97584533691406)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon1} />
                                </g>
                                <g className="png" transform="matrix(1,0,0,1,1216.4716796875,62.08978271484375)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon3} />
                                </g>
                                <g className="png" transform="matrix(1,0,0,1,85.34599304199219,499.53399658203125)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon4} />
                                </g>
                                <g className="png" transform="matrix(1,0,0,1,1238.5101318359375,234.16940307617188)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon1} />
                                </g>
                            </g>
                            </svg>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="sec-3">
                <Container>
                    <Row className='gx-0 align-items-center'>
                        <Col lg={3} xxl={4}>
                            <h3>Работаем <br className='d-none d-lg-inline'/> без остановок</h3>
                        </Col>
                        <Col lg={9} xxl={8}>
                            <OrdersSlider />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="sec-4 py-5 mb-5">
                <Container>
                    <HelpSlider />
                </Container>
            </section>

            <Container className='mb-5'>
                <section className="sec-5 mb-5">
                    <h2>В приложении <br />ещё удобнее</h2>
                    <AppLinks/>
                    <img src={smartphone} alt="smartphone" className='bg' />
                </section>

                <section className="sec-6 py-5">
                    <h3 className='mb-4'>Каталог услуг в Казани</h3>
                    <div className="box">
                        <p>Опишите задачу, а мастера сами предложат свои услуги.</p>
                        <p>Выберите исполнителя по рейтингу и отзывам других клиентов.</p>
                        <p>Договоритесь о цене самостоятельно</p>
                    </div>
                    <nav className="services-grid">
                        <Row md={4} className='g-4'>
                            <Col>
                                <a href="/">
                                    <TfiPaintRoller/>
                                    <span>Ремонт и строительство</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <TfiBriefcase/>
                                    <span>Юристы</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <TfiTruck/>
                                    <span>Перевозки и курьеры</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <SlScreenDesktop/>
                                    <span>Компьютеры и IT</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <RxScissors/>
                                    <span>Красота</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <RxLapTimer/>
                                    <span>Аренда</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <TfiCar/>
                                    <span>Ремонт авто</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <TfiMore/>
                                    <span>Посмотреть все услуги</span>
                                </a>
                            </Col>
                        </Row>
                    </nav>
                </section>
            </Container>
        </main>
    );
};

export default Home;