import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

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
import CategoryCard from '../components/CategoryCard'


const Home = () => {
    return (
        <main>
            <Swiper
                className='slider-main'
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                >
                <SwiperSlide>
                    <section className="main">
                        <Container>
                            <Row className='h-100'>
                                <Col md={8} className='d-flex flex-column justify-content-end justify-content-md-center'>
                                    <h1>Не&nbsp;оставим наедине с&nbsp;проблемами</h1>
                                    <SearchForm2 />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="main">
                        <Container>
                            <Row className='h-100'>
                                <Col md={8} className='d-flex flex-column justify-content-end justify-content-md-center'>
                                    <h1>Не&nbsp;оставим наедине с&nbsp;проблемами</h1>
                                    <SearchForm2 />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </SwiperSlide>
            </Swiper>

            <section className="sec-1 py-4 py-sm-5">
                <Container>
                    {/* <h3>Предложите ваше задание</h3>
                    <div className="position-relative">
                        <Swiper
                            className='slider-6 mt-4'
                            modules={[Navigation, FreeMode]}
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            freeMode={true}
                            navigation
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    freeMode: false,
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
                    </div> */}

                    <h3>Поручите дела специалистам</h3>
                    <div className="grid mt-4 mt-sm-5">
                        <div>
                            <CategoryCard title={"Электрика"} imgUrl={"imgs/1.png"}/>
                        </div>
                        <div>
                            <CategoryCard title={"Сантехника"} imgUrl={"imgs/2.png"}/>
                        </div>
                        <div>
                            <CategoryCard title={'Химчистка мебели'} imgUrl={'imgs/3.png'}/>
                        </div>
                        <div>
                            <CategoryCard title={'Стиральные машины'} imgUrl={'imgs/4.png'}/>
                        </div>
                        <div>
                            <CategoryCard title={'Поверка счётчиков'} imgUrl={'imgs/5.png'}/>
                        </div>
                        <div>
                            <CategoryCard title={'Дезинсекция'} imgUrl={'imgs/6.png'}/>
                        </div>
                        <div>
                            <CategoryCard title={'Ремонт и установка замков'} imgUrl={'imgs/7.png'}/>
                        </div>
                        <div>
                            <CategoryCard title={'Вывоз мусора'} imgUrl={'imgs/8.png'}/>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="sec-2 py-4 py-sm-5">
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
                            <svg className='svg-animation' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1614 780" width="1614" height="780" preserveAspectRatio="xMidYMid slice">
                                <image width="1614px" height="780px" x="0px" y="0px" xlinkHref={map} />
                                <image width="144px" height="144px" x="100px" y="100px" xlinkHref={icon1} />
                                <image width="144px" height="144px" x="200px" y="200px" xlinkHref={icon2} />
                                <image width="144px" height="144px" x="300px" y="300px" xlinkHref={icon3} />
                                <image width="144px" height="144px" x="400px" y="400px" xlinkHref={icon4} />
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

            <section className="sec-4 py-4 py-sm-5 mb-3 mb-sm-5">
                <Container>
                    <HelpSlider />
                </Container>
            </section>

            <section className="sec-5 mb-5">
                <Container>
                    <h2 className='text-center text-lg-start'>В приложении <br />ещё удобнее</h2>
                    <AppLinks/>
                    <img src={smartphone} alt="smartphone" className='bg' />
                </Container>
            </section>
            
            <section className="sec-6 py-4 py-sm-5 mb-lg-5">
                <Container>
                    <h3 className='mb-4'>Каталог услуг в Казани</h3>
                    <div className="box">
                        <p>Опишите задачу, а мастера сами предложат свои услуги.</p>
                        <p>Выберите исполнителя по рейтингу и отзывам других клиентов.</p>
                        <p>Договоритесь о цене самостоятельно</p>
                    </div>
                    <nav className="services-grid">
                        <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
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
                </Container>
            </section>
        </main>
    );
};

export default Home;