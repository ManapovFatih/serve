import React, {useState} from 'react'
import useIsMobile from '../hooks/isMobile'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Thumbs, EffectFade, EffectCreative, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/effect-fade'
import "swiper/css/effect-creative"

const HelpSlider = () => {
    const {mobile} = useIsMobile('991px')
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    if (mobile) {
        return (
            <div>
                <h3 className='mb-4'>Поможем с подбором исполнителя</h3>
                <Swiper
                    className='help-slider'
                    grabCursor={true}
                    effect={"creative"}
                    direction={"vertical"}
                    mousewheel={true}
                    creativeEffect={{
                    prev: {
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: [0, "100%", 0],
                    },
                    }}
                    modules={[EffectCreative, Mousewheel]}
                >
                    <SwiperSlide>
                        <h4>Предлагаем исполнителей, которые соответствуют вашему заказу. Вам больше не нужно изучать десятки профилей — выбирайте сразу из подходящих вариантов</h4>
                        <img src="imgs/img2.jpg" alt="Предлагаем исполнителей, которые соответствуют вашему заказу. Вам больше не нужно изучать десятки профилей — выбирайте сразу из подходящих вариантов" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h4>Находим исполнителей, которые точно готовы взяться за дело</h4>
                        <img src="imgs/img3.jpg" alt="Находим исполнителей, которые точно готовы взяться за дело" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h4>Проверяем каждый отзыв. Если заказ спорный, мы узнаем подробности у исполнителя и заказчика</h4>
                        <img src="imgs/img4.jpg" alt="Проверяем каждый отзыв. Если заказ спорный, мы узнаем подробности у исполнителя и заказчика" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <h4>Ставим объективную оценку. В рейтинге мы учитываем опыт исполнителя, стабильность качества работы, культуру общения и пунктуальность</h4>
                        <img src="imgs/img5.jpg" alt="Ставим объективную оценку. В рейтинге мы учитываем опыт исполнителя, стабильность качества работы, культуру общения и пунктуальность" />
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    } else return (
        <Row>
            <Col lg={6} xxl={7}>
                <h3 className='mb-4'>Поможем с подбором <br /> исполнителя</h3>
                <Swiper
                    direction="vertical"
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs, Autoplay]}
                    className="thumbslides"
                    onSwiper={setThumbsSwiper}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        waitForTransition: true
                    }}
                >
                    <SwiperSlide>
                        <div className="indicator"></div>
                        <p>Предлагаем исполнителей, которые соответствуют вашему заказу. Вам больше не нужно изучать десятки профилей — выбирайте сразу из подходящих вариантов</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="indicator"></div>
                        <p>Находим исполнителей, которые точно готовы взяться за дело</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="indicator"></div>
                        <p>Проверяем каждый отзыв. Если заказ спорный, мы узнаем подробности у исполнителя и заказчика</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="indicator"></div>
                        <p>Ставим объективную оценку. В рейтинге мы учитываем опыт исполнителя, стабильность качества работы, культуру общения и пунктуальность</p>
                    </SwiperSlide>
                </Swiper>
            </Col>
            <Col lg={6} xxl={5}>
                <Swiper
                    spaceBetween={20}
                    thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}
                    modules={[FreeMode, Thumbs, Autoplay, EffectFade]}
                    className="thumbs-main"
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        waitForTransition: true
                    }}
                    breakpoints={{
                        768: {
                            pagination: false,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img src="imgs/img2.jpg" alt="Предлагаем исполнителей, которые соответствуют вашему заказу. Вам больше не нужно изучать десятки профилей — выбирайте сразу из подходящих вариантов" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="imgs/img3.jpg" alt="Находим исполнителей, которые точно готовы взяться за дело" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="imgs/img4.jpg" alt="Проверяем каждый отзыв. Если заказ спорный, мы узнаем подробности у исполнителя и заказчика" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="imgs/img5.jpg" alt="Ставим объективную оценку. В рейтинге мы учитываем опыт исполнителя, стабильность качества работы, культуру общения и пунктуальность" />
                    </SwiperSlide>
                </Swiper>
            </Col>
        </Row>
    );
};

export default HelpSlider;