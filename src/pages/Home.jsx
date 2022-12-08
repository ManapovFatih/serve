import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Labor from '../components/Labor'
import SearchForm from '../components/SearchForm'

import icon1 from '../assets/imgs/icons/icon-1.png'
import icon2 from '../assets/imgs/icons/icon-2.png'
import icon3 from '../assets/imgs/icons/icon-3.png'
import icon4 from '../assets/imgs/icons/icon-4.png'
import map from '../assets/imgs/map.jfif'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Home = () => {
    return (
        <main>
            <section className="main">
                <Container>
                    <Row className='h-100'>
                        <Col md={8} className='d-flex flex-column justify-content-center'>
                            <h1>Не&nbsp;оставим наедине с&nbsp;проблемами</h1>
                            <SearchForm btnType={1} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="sec-1 py-5">
                <Container>
                    <h3>Предложите ваше задание</h3>
                    <Swiper
                        className='slider-6 mt-4'
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={6}
                        navigation
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
                </Container>
            </section>

            <section className="sec-2 py-5">
                <Container>
                    <Row className='gx-0'>
                        <Col lg={4}>
                            <div className="box">
                                <form action="">
                                    <div>
                                        <h3>Рядом с вами</h3>
                                        <p>Мы найдём специалистов, которые живут рядом с вами!</p>
                                    </div>
                                    <input type="text" placeholder='Ваш адрес'/>
                                    <button type='button' className='btn-1 w-100'>Расскажите, что у&nbsp;вас случилось</button>
                                </form>
                                
                            </div>
                        </Col>
                        <Col lg={8}>
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
                            
                            <g clip-path="url(#__lottie_element_28)">
                                <g class="png" transform="matrix(1,0,0,1,0,0)" opacity="1">
                                    <image width="1614px" height="780px" preserveAspectRatio="xMidYMid slice" xlinkHref={map} />
                                </g>
                                <g class="png" transform="matrix(1,0,0,1,322.4026794433594,508.68353271484375)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon2} />
                                </g>
                                <g class="png" transform="matrix(1,0,0,1,1283.14404296875,405.8525695800781)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon3} />
                                </g>
                                <g class="png" transform="matrix(1,0,0,1,386.5847473144531,13.723678588867188)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon4} />
                                </g>
                                <g class="png" transform="matrix(1,0,0,1,1311.2757568359375,-70.97584533691406)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon1} />
                                </g>
                                <g class="png" transform="matrix(1,0,0,1,1216.4716796875,62.08978271484375)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon3} />
                                </g>
                                <g class="png" transform="matrix(1,0,0,1,85.34599304199219,499.53399658203125)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon4} />
                                </g>
                                <g class="png" transform="matrix(1,0,0,1,1238.5101318359375,234.16940307617188)" opacity="1">
                                    <image width="144px" height="144px" preserveAspectRatio="xMidYMid slice" xlinkHref={icon1} />
                                </g>
                            </g>
                            </svg>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Home;