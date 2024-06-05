import React from 'react'
import useIsMobile from '../hooks/isMobile'
import RecentOrder from '../components/RecentOrder'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'

const OrdersSlider = () => {
    const isMobile = useIsMobile('991px')

    if (isMobile) {
        return (
            <Swiper
                modules={[Autoplay, FreeMode]}
                className='slider-orders'
                loop={true}
                spaceBetween={20}
                slidesPerView={'auto'}
                allowTouchMove={true}
                direction={'horizontal'}
                speed={15000}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <RecentOrder scope={1} name={'Генеральная уборка'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={2} name={'Сделать ремонт в квартире'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={6} name={'Ремонт и установка телевизоров'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={3} name={'Провести личную консультацию по банкротству физического лица'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={2} name={'Постелить линолеум и монтаж плинтусов'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={6} name={'Заменить аккумулятор телефона'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={7} name={'Отремонтировать экран на Леново'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={8} name={'Установка смесителя в ванной'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={5} name={'Оказать услуги службы буксировки'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={1} name={'Поддерживающая уборка'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={9} name={'Стрижка'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={10} name={'Создать файл с текстом'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={2} name={'Постелить линолеум и монтаж плинтусов'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={6} name={'Заменить аккумулятор телефона'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={7} name={'Отремонтировать экран на Леново'} />
                </SwiperSlide>
                <SwiperSlide>
                    <RecentOrder scope={8} name={'Установка смесителя в ванной'} />
                </SwiperSlide>
            </Swiper>
        )
    } else return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            className='slider-orders'
            loop={true}
            spaceBetween={20}
            slidesPerView={'auto'}
            allowTouchMove={false}
            direction={'vertical'}
            speed={15000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                waitForTransition: true
            }}
        >
            <SwiperSlide>
                <div className="recent-orders">
                    <RecentOrder scope={1} name={'Генеральная уборка'} />
                    <RecentOrder scope={2} name={'Сделать ремонт в квартире'} />
                    <RecentOrder scope={6} name={'Ремонт и установка телевизоров'} />
                    <RecentOrder scope={3} name={'Провести личную консультацию по банкротству физического лица'} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="recent-orders">
                    <RecentOrder scope={2} name={'Постелить линолеум и монтаж плинтусов'} />
                    <RecentOrder scope={6} name={'Заменить аккумулятор телефона'} />
                    <RecentOrder scope={7} name={'Отремонтировать экран на Леново'} />
                    <RecentOrder scope={8} name={'Установка смесителя в ванной'} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="recent-orders">
                    <RecentOrder scope={5} name={'Оказать услуги службы буксировки'} />
                    <RecentOrder scope={1} name={'Поддерживающая уборка'} />
                    <RecentOrder scope={9} name={'Стрижка'} />
                    <RecentOrder scope={10} name={'Создать файл с текстом'} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="recent-orders">
                    <RecentOrder scope={2} name={'Постелить линолеум и монтаж плинтусов'} />
                    <RecentOrder scope={6} name={'Заменить аккумулятор телефона'} />
                    <RecentOrder scope={7} name={'Отремонтировать экран на Леново'} />
                    <RecentOrder scope={8} name={'Установка смесителя в ванной'} />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default OrdersSlider