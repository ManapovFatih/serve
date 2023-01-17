import React from 'react'
import {Link} from 'react-router-dom'
import { IoAddOutline, IoArrowUndoOutline } from "react-icons/io5"

const Specialties = () => {
    return (
        <section>
            <h1 className='inner text-center mb-4'>Специальности</h1>
            <p className='text-center gray-3 mb-5'>Специальности — это категории услуг, которые вы оказываете. В каждой из них мы предустановили наборы популярных услуг, вам останется проставить им цены.</p>

            <div className="box">
                <form action="">
                    <fieldset>
                        <legend>Компьютеры и IT</legend>
                        <ul className="list-unstyled row row-cols-3 g-4">
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Администрирование</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Администрирование 1С</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Заправка картриджей</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Компьютерная помощь</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Настройка Битрикс</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Настройка серверов</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка СRM и ERP</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка игр</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка мобильных приложений</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка на 1C</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка на С++</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка на Java</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка на Python</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка навыков Алисы</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка программ</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка сайтов</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Разработка систем автоматизации электронного документооборота</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Регистрация доменов</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Сайты под ключ</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>Другое</span>
                                </label>
                            </li>
                        </ul>
                    </fieldset>


                    <fieldset>
                        <legend>Добавьте специальности</legend>
                        <div className="d-flex align-items-center mt-4">
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <button type='button' className='btn-4 p-3'>
                                <IoAddOutline className='fs-13 me-1'/>
                                <span>Добавить</span>
                            </button>
                        </div>
                    </fieldset>
                    
                    
                        
                        <button type='submit' className='btn-1 ms-4 py-3'>Сохранить</button>
                    
                </form>
            </div>

            <Link to='/account' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2'/>
                <span>Вернуться на страницу профиля</span>
            </Link>
        </section>
    )
}

export default Specialties