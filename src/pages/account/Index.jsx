import React from 'react'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoAlertCircleOutline, IoTrendingUpOutline, IoAddOutline, IoEyeOutline, IoCashOutline, IoPersonCircleOutline, IoInformationCircleOutline, IoLocationOutline, IoVideocamOutline, IoListOutline } from "react-icons/io5"

const Index = () => {
    return (
        <section>
            <h1 className='inner text-center mb-4'>Имя Фамиллия</h1>
            <p className='d-flex align-items-center justify-content-center text-center gray-3 mb-5'>
                <IoAlertCircleOutline className='fs-15 red'/>
                <span className='ms-2'>Профиль опубликован – 1 ошибка</span>
            </p>

            <div className="box mb-4">
                <div className='d-flex align-items-center'>
                    <IoAlertCircleOutline className='fs-18 red'/>
                    <h4 className='mb-0 ms-2'>Профиль не опубликован</h4>
                </div>
                <ul className="list-unstyled">
                    <li className='mt-3'>
                        <a href='/' className='link'>Паспорт</a> — 
                        <span className='red'> не заполнено</span>
                    </li>
                    <li className='mt-3'>
                        <a href='/' className='link'>Телефон</a> — 
                        <span className='red'> уже используется другим пользователем</span>
                    </li>
                </ul>
            </div>

            <div className="box mb-4 d-flex align-items-center">
                <div className='flex-1'>
                    <h3>Увеличьте количество заказов</h3>
                    <p className='gray-3'>Подключите продвижение, чтобы поднять ваш профиль в результатах поиска</p>
                    <button type='button' className='btn-3 py-3 mt-3'>Подключить продвижение</button>
                </div>
                <div className='icon'>
                    <IoTrendingUpOutline />
                </div>
            </div>

            <Link to='/' className="box d-block mb-4">
                <div className='d-flex align-items-center mb-3'>
                    <IoEyeOutline className='fs-18 color-2'/>
                    <h4 className='mb-0 ms-2'>Публичный профиль</h4>
                </div>
                <p>Посмотрите, как заказчики видят ваш профиль</p>
            </Link>

            <Row md={2}>
                <Col>
                    <Link to='/' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoCashOutline className='fs-18 color-2'/>
                            <h4 className='mb-0 ms-2'>Продвижение: 0 ₽</h4>
                        </div>
                        <p>Счёт для оплаты продвижения</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='/' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoPersonCircleOutline className='fs-18 color-2'/>
                            <h4 className='mb-0 ms-2'>Фото профиля</h4>
                        </div>
                        <p>Фото не добавлено</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='/' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoLocationOutline className='fs-18 color-2'/>
                            <h4 className='mb-0 ms-2'>Адреса</h4>
                        </div>
                        <p>Адрес не добавлен</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='/' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoInformationCircleOutline className='fs-18 color-2'/>
                            <h4 className='mb-0 ms-2'>О себе</h4>
                        </div>
                        <p>Заполнено 0 из 18</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='/' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoListOutline className='fs-18 color-2'/>
                            <h4 className='mb-0 ms-2'>Специальности</h4>
                        </div>
                        <p>Специальности добавлены (1)</p>
                    </Link>
                </Col>
                <Col>
                    <Link to='/' className="box d-block mb-4">
                        <div className='d-flex align-items-center mb-3'>
                            <IoVideocamOutline className='fs-18 color-2'/>
                            <h4 className='mb-0 ms-2'>Видео</h4>
                        </div>
                        <p>Видео не добавлено</p>
                    </Link>
                </Col>
            </Row>
            <Link to='/' className="box d-flex align-items-center justify-content-between mb-4">
                <div className='flex-1'>
                    <div className='mb-1'>Компьютеры и IT</div>
                    <h3 className='mb-0'>Разработка сайтов</h3>
                </div>
                <div>1 услуга</div>
            </Link>

            <button type="button" className='btn-4 w-100'>
                <IoAddOutline/>
                <span className='ms-2'>Добавить специальность</span>
            </button>
        </section>
    );
};

export default Index;