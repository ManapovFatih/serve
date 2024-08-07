import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

// import Labor from '../components/Labor'
import AppLinks from '../components/AppLinks';
import OrdersSlider from '../components/OrdersSlider';
import HelpSlider from '../components/HelpSlider';
import CategoryCard from '../components/CategoryCard';
import CategoryMini from '../components/CategoryMini';
import SearchForm from '../components/forms/SearchForm';

import icon1 from '../assets/imgs/icons/icon-1.png';
import icon2 from '../assets/imgs/icons/icon-2.png';
import icon3 from '../assets/imgs/icons/icon-3.png';
import icon4 from '../assets/imgs/icons/icon-4.png';
import map from '../assets/imgs/map.jpg';
import beauty from '../assets/imgs/icons/beauty.svg';
import legal from '../assets/imgs/icons/legal.svg';
import delivery from '../assets/imgs/icons/delivery.svg';
import computer from '../assets/imgs/icons/computer.svg';
import repair from '../assets/imgs/icons/repair.svg';
import key from '../assets/imgs/icons/key.svg';
import carRepair from '../assets/imgs/icons/car-repair.svg';
import all from '../assets/imgs/icons/all.svg';
import smartphone from '../assets/imgs/smartphone.png';
import Loader from '../components/utils/Loader';
import { getHome } from '../services/Home';

const Home = () => {
    const { t } = useTranslation();
    const [home, setHome] = useState({ loading: true, top: { items: [] } })
    const onLoad = useCallback(() => {
        getHome()
            .then((res) => {
                setHome((prev) => ({ ...prev, loading: false, categories: res.categories, top: res?.top, stories: res?.stories }))
            })
            .catch(() => {
                setHome((prev) => ({ ...prev, loading: false }))
            })
    }, [])

    useEffect(() => {
        onLoad()
    }, [])
    console.log(home)
    if (home.loading) {
        return <Loader full />;
    }

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
                    <img src="/imgs/1slide1920.jpg" alt="1slide1920" className='bg' />
                    <section>
                        <Container>
                            <Row className='h-100'>
                                <Col md={8} className='d-flex flex-column justify-content-end justify-content-md-center'>
                                    <h1>{t('Не оставим наедине с проблемами')}</h1>
                                    <SearchForm className={'form-search-2'} btnClassName={'btn-3'} btnInner={'var3'} />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/imgs/2slide1920.jpg" alt="2slide1920" className='bg' />
                    <section>
                        <Container>
                            <Row className='h-100'>
                                <Col md={8} className='d-flex flex-column justify-content-end justify-content-md-center'>
                                    <h1>{t('Не оставим наедине с проблемами')}</h1>
                                    <SearchForm className={'form-search-2'} btnClassName={'btn-3'} btnInner={'var3'} />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </SwiperSlide>
            </Swiper>

            <Container>
                <section className="sec-1 p-3 p-sm-4 p-md-5 mt-5">
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
                    <SearchForm className={'mb-4 mb-sm-5'} btnClassName={'btn-3 ms-lg-3'} btnInner={'var2'} />

                    <Swiper
                        className='slider-auto mb-4 mb-sm-5'
                        loop={false}
                        modules={[FreeMode]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        freeMode={true}
                    >
                        {home?.stories && home?.stories.length > 0 && home?.stories.map(item =>
                            <SwiperSlide>
                                <CategoryMini {...item} />
                            </SwiperSlide>
                        )}
                        {/* <SwiperSlide>
                            <CategoryMini title={"Установка техники"} imgUrl={"/imgs/img7.jpg"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CategoryMini title={"Электрика"} imgUrl={"/imgs/img6.jpg"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CategoryMini title={"Стиральные машины"} imgUrl={"/imgs/img8.jpg"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CategoryMini title={"Химчистка мебели"} imgUrl={"/imgs/img9.jpg"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CategoryMini title={"Установка техники"} imgUrl={"/imgs/img7.jpg"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CategoryMini title={"Электрика"} imgUrl={"/imgs/img6.jpg"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CategoryMini title={"Стиральные машины"} imgUrl={"/imgs/img8.jpg"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CategoryMini title={"Химчистка мебели"} imgUrl={"/imgs/img9.jpg"} />
                        </SwiperSlide> */}
                    </Swiper>

                    <h3>{t('Поручите дела специалистам')}</h3>
                    <div className="grid mt-3 mt-sm-4">
                        {home?.categories && home?.categories.length > 0 && home?.categories.map(item =>
                            <div>
                                <CategoryCard {...item} />
                            </div>
                        )}
                        {/* <div>
                            <CategoryCard title={"Электрика"} imgUrl={"/imgs/socket.jpg"} />
                        </div>
                        <div>
                            <CategoryCard title={"Сантехника"} imgUrl={"/imgs/faucet.jpg"} />
                        </div>
                        <div>
                            <CategoryCard title={'Химчистка мебели'} imgUrl={'/imgs/sofa.jpg'} />
                        </div>
                        <div>
                            <CategoryCard title={'Стиральные машины'} imgUrl={'/imgs/washing-machine.jpg'} />
                        </div>
                        <div>
                            <CategoryCard title={'Поверка счётчиков'} imgUrl={'/imgs/chemicals.jpg'} />
                        </div>
                        <div>
                            <CategoryCard title={'Дезинсекция'} imgUrl={'/imgs/pliers.jpg'} />
                        </div>
                        <div>
                            <CategoryCard title={'Ремонт и установка замков'} imgUrl={'/imgs/keys.jpg'} />
                        </div>
                        <div>
                            <CategoryCard title={'Вывоз мусора'} imgUrl={'/imgs/trash.jpg'} />
                        </div> */}
                    </div>
                </section>
            </Container>

            <section className="sec-2 py-4 py-sm-5">
                <Container>
                    <div className="d-lg-none mb-4">
                        <h3>{t('Рядом с вами')}</h3>
                        <p>{t('Мы найдём специалистов, которые живут рядом с вами!')}</p>
                    </div>
                    <Row className='gx-0 position-relative'>
                        <Col lg={4}>
                            <div className="box">
                                <form action="">
                                    <div>
                                        <h3>{t('Рядом с вами')}</h3>
                                        <p>{t('Мы найдём специалистов, которые живут рядом с вами!')}</p>
                                    </div>
                                    <input type="text" placeholder={t('Ваш адрес')} />
                                    <button type='button' className='btn-1 w-100 px-3'>{t('Расскажите, что у вас случилось')}</button>
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
                            <h3>{t('Работаем')}<br className='d-none d-lg-inline' />{t('без остановок')}</h3>
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
                    <h2 className='text-center text-lg-start'>{t('В приложении')}<br />{t('ещё удобнее')}</h2>
                    <AppLinks />
                    <img src={smartphone} alt="smartphone" className='bg' />
                </Container>
            </section>

            <section className="sec-6 py-4 py-sm-5 mb-lg-5">
                <Container>
                    <h3 className='mb-4'>{t('Каталог услуг в Казани')}</h3>
                    <div className="box">
                        <p>{t('Опишите задачу, а мастера сами предложат свои услуги.')}</p>
                        <p>{t('Выберите исполнителя по рейтингу и отзывам других клиентов.')}</p>
                        <p>{t('Договоритесь о цене самостоятельно')}</p>
                    </div>
                    <nav className="services-grid">
                        <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
                            <Col>
                                <a href="/">
                                    <img src={beauty} alt={t('Красота')} />
                                    <span>{t('Красота')}</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <img src={legal} alt={t('Юристы')} />
                                    <span>{t('Юристы')}</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <img src={delivery} alt={t('Перевозки и курьеры')} />
                                    <span>{t('Перевозки и курьеры')}</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <img src={computer} alt={t('Компьютеры и IT')} />
                                    <span>{t('Компьютеры и IT')}</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <img src={repair} alt={t('Ремонт и строительство')} />
                                    <span>{t('Ремонт и строительство')}</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <img src={key} alt={t('Аренда')} />
                                    <span>{t('Аренда')}</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <img src={carRepair} alt={t('Ремонт авто')} />
                                    <span>{t('Ремонт авто')}</span>
                                </a>
                            </Col>
                            <Col>
                                <a href="/">
                                    <img src={all} alt={t('Посмотреть все услуги')} />
                                    <span>{t('Посмотреть все услуги')}</span>
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