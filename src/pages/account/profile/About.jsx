import React from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import AddInput from '../../../components/utils/AddInput'

import { IoArrowUndoOutline, IoLogoWhatsapp, IoLogoSkype, IoMailOutline, IoLogoYoutube, IoGlobeOutline } from "react-icons/io5"
import { BsTelegram } from "react-icons/bs"
import AddPhoto from '../../../components/utils/AddPhoto'

const About = () => {
    return (
        <section>
            <h1 className='inner text-center mb-4'>О себе</h1>
            <p className='text-center gray-3 mb-4 mb-sm-5'>Расскажите подробно о себе, добавьте ссылки на профили в соц. сетях и мессенджерах, чтобы клиенты смогли получше вас узнать</p>

            <form action="" className='form-about-info box'>
                <fieldset>
                    <legend>Общая информация</legend>

                    <p>Напишите коротко о ваших сильных сторонах, важных качествах, какие инструменты и технологии используете. Про услуги и опыт напишите в специальных полях.</p>
                    <div className='mt-4 mb-3'>О себе</div>
                    <textarea rows="6" placeholder='Расскажите о себе'></textarea>
                    <div className='mt-4 mb-3'>Пол:</div>
                    <div className="d-flex align-items-center">
                        <label className="d-flex">
                            <input type="radio" name='sex'/>
                            <span className='ms-2'>Женский</span>
                        </label>
                        <label className="d-flex ms-5">
                            <input type="radio" name='sex'/>
                            <span className='ms-2'>Мужской</span>
                        </label>
                    </div>

                    <div className='mt-4 mb-3'>Дата рождения</div>
                    <input type="date" />

                    <div className='mt-4 mb-3'>Видео о себе</div>
                    <Form.Control type="file" multiple accept="video/*" />
                </fieldset>

                <fieldset>
                    <legend>Профильное образование</legend>
                    <p className='mb-4'>Подробно опишите ваше образование: вуз, название специальности, тип обучения,например, «РГГУ, маркетинг и технологии, бакалавр» или «УГТУ УПИ, графический дизайн, курсы переподготовки»</p>

                    <AddInput />

                    <h5 className='mt-4'>Дипломы, сертификаты, лицензии</h5>
                    <p>Приложите фотографии или сканы документов, подтверждающих вашу квалификацию</p>
                    <div className="mt-3 d-flex flex-wrap">
                        <AddPhoto name={'img-1'} id={'img1'} className='me-2 mb-2'/>
                        <AddPhoto name={'img-2'} id={'img2'} className='me-2 mb-2'/>
                        <AddPhoto name={'img-3'} id={'img3'} className='me-2 mb-2'/>
                        <AddPhoto name={'img-4'} id={'img4'} className='me-2 mb-2'/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Профили в других сервисах</legend>
                    <p className='mb-4 mb-sm-5'>Скопируйте ссылки на ваши профили в социальных сетях и мессенджеры, вставьте их в соответствующие поля. Это повысит доверие к вашему профилю и ускорит связь с вами.</p>
                    <h5>Мессенджеры</h5>
                    <ul className='list-unstyled row row-cols-md-2 g-3 g-sm-4 mb-4 mb-sm-5'>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoLogoWhatsapp className='fs-13 color-2'/>
                                <span className='ms-1'>WhatsApp</span>    
                            </div>
                            <input type="text" placeholder=''/>
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <BsTelegram className='fs-13 blue'/>
                                <span className='ms-1'>Telegram</span>    
                            </div>
                            <input type="text" placeholder=''/>
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoLogoSkype className='fs-13 blue'/>
                                <span className='ms-1'>Skype</span>    
                            </div>
                            <input type="text" placeholder=''/>
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoMailOutline className='fs-13 color-2'/>
                                <span className='ms-1'>Электронная почта для связи</span>    
                            </div>
                            <input type="text" placeholder=''/>
                        </li>
                    </ul>

                    <h5>Другие сервисы</h5>
                    <ul className='list-unstyled row row-cols-md-2 g-3 g-sm-4'>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoLogoYoutube className='fs-13 red'/>
                                <span className='ms-1'>YouTube</span>    
                            </div>
                            <input type="text" placeholder=''/>
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoGlobeOutline className='fs-13 color-5'/>
                                <span className='ms-1'>Личный сайт</span>    
                            </div>
                            <input type="text" placeholder=''/>
                        </li>
                    </ul>
                </fieldset>

                <button type='button' className='btn-3 w-xs-100'>Сохранить</button>
            </form>

            <Link to='/account/profile' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2'/>
                <span>Вернуться на страницу профиля</span>
            </Link>
        </section>
    );
};

export default About;