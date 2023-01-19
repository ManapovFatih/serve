import React from 'react'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import { IoAddOutline, IoArrowUndoOutline } from "react-icons/io5"

const optionsList = [
    {value: '1', label: 'Аренда'},
    {value: '2', label: 'Артисты'},
    {value: '3', label: 'Дизайнеры'},
    {value: '4', label: 'Красота'},
    {value: '5', label: 'Организация мероприятий'},
    {value: '6', label: 'Охрана и детективы'},
    {value: '7', label: 'Перевозки и курьеры'},
    {value: '8', label: 'Ремонт авто'},
    {value: '9', label: 'Ремонт и строительство'},
    {value: '10', label: 'Ремонт и установка техники'},
    {value: '11', label: 'Репетиторы и обучение'},
    {value: '12', label: 'Творчество, рукоделие и хобби'},
    {value: '13', label: 'Тренеры'},
    {value: '14', label: 'Услуги для животных'},
    {value: '15', label: 'Фото, видео, аудио'},
    {value: '16', label: 'Хозяйство и уборка'},
    {value: '17', label: 'Юристы'},
    {value: '18', label: 'Разное'},
]

const Specialties = () => {
    return (
        <section>
            <h1 className='inner text-center mb-3'>Специальности</h1>
            <p className='text-center gray-3 mb-4 mb-sm-5'>Специальности — это категории услуг, которые вы оказываете. В каждой из них мы предустановили наборы популярных услуг, вам останется проставить им цены.</p>

            <div className="box">
                <form action="">
                    <fieldset>
                        <legend className='mb-3'>Компьютеры и IT</legend>
                        <ul className="list-unstyled row row-cols-sm-2 row-cols-md-3 g-4">
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

                    <fieldset className='mt-5'>
                        <legend className='mb-3'>Добавьте специальности</legend>
                        <div className="d-sm-flex">
                            <Select
                                name="sort"
                                placeholder="Специальности"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-xs-100"
                                options={optionsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                            <button type='button' className='btn-4 p-3 ms-sm-4 mt-3 mt-sm-0 w-xs-100'>
                                <IoAddOutline className='fs-13 me-1'/>
                                <span>Добавить</span>
                            </button>
                        </div>
                    </fieldset>

                    <button type='submit' className='btn-1 mt-4 mt-sm-5 py-3 px-5 w-xs-100'>Сохранить</button>
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