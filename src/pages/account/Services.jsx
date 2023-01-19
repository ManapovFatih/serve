import React from 'react'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import { IoAddOutline, IoArrowUndoOutline } from "react-icons/io5"

const experienceList = [
    {value: '1', label: 'Менее года'},
    {value: '2', label: '1 год'},
    {value: '3', label: '2 года'},
    {value: '4', label: '3 года'},
    {value: '5', label: '4 года'},
    {value: '6', label: '5 лет'},
    {value: '7', label: '6 лет'},
    {value: '8', label: '7 лет'},
    {value: '9', label: '8 лет'},
    {value: '10', label: '9 лет'},
    {value: '11', label: 'Более 10 лет'},
]
const paramsList = [
    {value: '1', label: 'param 1'},
    {value: '2', label: 'param 2'},
    {value: '3', label: 'param 3'},
]
const weekList = [
    {value: '1', label: 'Понедельник'},
    {value: '2', label: 'Вторник'},
    {value: '3', label: 'Среда'},
    {value: '4', label: 'Четверг'},
    {value: '5', label: 'Пятница'},
    {value: '6', label: 'Суббота'},
    {value: '7', label: 'Воскресенье'},
]
const timeList = [
    {value: '1', label: '00:00'},
    {value: '2', label: '00:01'},
    {value: '3', label: '00:02'},
    {value: '4', label: '00:03'},
    {value: '5', label: '00:04'},
    {value: '6', label: '00:05'},
    {value: '7', label: '00:06'},
    {value: '1', label: '00:07'},
    {value: '1', label: '00:08'},
    {value: '1', label: '00:09'},
    {value: '1', label: '00:10'},
    {value: '1', label: '00:11'},
    {value: '1', label: '00:12'},
    {value: '1', label: '00:13'},
    {value: '1', label: '00:14'},
    {value: '1', label: '00:15'},
    {value: '1', label: '00:16'},
    {value: '1', label: '00:17'},
    {value: '1', label: '00:18'},
    {value: '1', label: '00:19'},
    {value: '1', label: '00:20'},
    {value: '1', label: '00:21'},
    {value: '1', label: '00:22'},
    {value: '1', label: '00:23'},
]

const Services = () => {
    return (
        <section>
            <h1 className='inner text-center mb-2'>Услуги</h1>
            <h6 className='gray-3 text-center mb-4 mb-sm-5'>Специальность</h6>
            
            <div className="box">
                <h3 className='mb-2'>Добавьте услуги</h3>
                <p className='mb-4'>Выберите из предложенных услуг или добавьте свои</p>

                <ul className='servises-list'>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                </ul>

                <button type='button' className='btn-1 py-3 px-5 mt-4 w-xs-100'>
                    <IoAddOutline className='fs-15 me-1'/>
                    <span>Добавить</span>
                </button>
            </div>

            <form className="box form-about-info mt-4 mt-sm-5">
                <fieldset>
                    <legend>О специализации</legend>
                    <ul className="list-unstyled row row-cols-sm-2 g-4">
                        <li>
                            <div className='mb-1'>Опыт работы</div>
                            <Select
                                name="experience"
                                placeholder="Опыт работы"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={experienceList}
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li>
                            <div className='mb-1'>Параметр 1</div>
                            <Select
                                name="experience"
                                placeholder="Параметры"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={paramsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li>
                            <div className='mb-1'>Параметр 2</div>
                            <Select
                                name="experience"
                                placeholder="Параметры"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={paramsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li>
                            <div className='mb-1'>Параметр 3</div>
                            <Select
                                name="experience"
                                placeholder="Параметры"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={paramsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Дни и время работы</legend>
                    <ul className="list-unstyled row g-4">
                        <li className="col-12 col-md-6">
                            <Select
                                name="experience"
                                placeholder="День недели"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={weekList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <Select
                                name="start"
                                placeholder="С"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={timeList}
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <Select
                                name="end"
                                placeholder="До"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={timeList}
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Дополнительное описание</legend>
                    <textarea rows="5" placeholder='Описание'></textarea>
                </fieldset>
                <button type='submit' className='btn-1 px-5 w-xs-100'>Сохранить</button>
            </form>

            <form className="box form-about-info mt-4 mt-sm-5">
                <h3 className='fw-6 mb-2'>Специальное предложение</h3>
                <p className='mb-4'>Например, скидка или подарок клиенту</p>
                <h6 className='mb-2'>Размер скидки и сроки</h6>
                <ul className="list-unstyled row g-4">
                    <li className='col-12 col-sm-6'>
                        <Select
                            name="discont"
                            placeholder="Скидки"
                            classNamePrefix="simple-select"
                            className="simple-select-container w-100"
                            options={paramsList}
                            isClearable={true}
                            isSearchable={true}
                        />
                    </li>
                    <li className='col-12 col-sm-6'>
                        <Select
                            name="discont"
                            placeholder="Сроки"
                            classNamePrefix="simple-select"
                            className="simple-select-container w-100"
                            options={paramsList}
                            isMulti
                            isClearable={true}
                            isSearchable={true}
                        />
                    </li>
                    <li className='col-12'>
                        <h6 className='mb-2'>Описание</h6>
                        <textarea rows="4" placeholder='В чём заключается ваше спецпредложение и какие у него условия?'></textarea>
                    </li>
                </ul>
                <button type='button' className='btn-1 px-5 mt-4 w-xs-100'>Запустить</button>
            </form>

            <form className="box form-about-info mt-4 mt-sm-5">
                <h3 className='fw-6 mb-4'>Как вы оказываете услуги</h3>
                <label>
                    <input type="checkbox"/>
                    <span className='ms-2'>Выезжаю в указанные районы</span>
                </label>
                <label className='mt-3 mt-sm-4'>
                    <input type="checkbox"/>
                    <span className='ms-2'>Оказываю услуги по адресу</span>
                </label>
                <label className='mt-3 mt-sm-4'>
                    <input type="checkbox"/>
                    <span className='ms-2'>Оказываю удалённо услуги этой специализации</span>
                </label>
                <button type='button' className='btn-1 px-5 mt-4 w-xs-100'>Сохранить</button>
            </form>

            <Link to='/account' className='btn-4 mx-auto mt-4 mt-sm-5 w-xs-100'>
                <IoArrowUndoOutline className='fs-13 me-2'/>
                <span>Вернуться на страницу профиля</span>
            </Link>
        </section>
    )
}

export default Services