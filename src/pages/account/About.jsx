import React from 'react'
// import {Link} from 'react-router-dom'

import { IoArrowUndoOutline } from "react-icons/io5"

const About = () => {
    return (
        <section>
            <h1 className='inner text-center mb-4'>О себе</h1>
            <p className='text-center gray-3 mb-5'>Расскажите подробно о себе, добавьте ссылки на профили в соц. сетях и мессенджерах, <br/>чтобы клиенты смогли получше вас узнать</p>

            <form action="" className='box bg-1'>
                <fieldset>
                    <legend className='fs-15 fw-6 mb-4'>Общая информация</legend>
                    <p>Напишите коротко о ваших сильных сторонах, важных качествах, какие инструменты и технологии используете. Про услуги и опыт напишите в специальных полях.</p>
                    <div className='mt-4 mb-3'>О себе</div>
                    <textarea rows="10" placeholder='Расскажите о себе'></textarea>
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
                </fieldset>
            </form>

            <button type='button' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2'/>
                <span>Вернуться на страницу профиля</span>
            </button>
        </section>
    );
};

export default About;