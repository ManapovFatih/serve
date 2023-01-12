import React from 'react'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { TfiPencilAlt, TfiCommentAlt, TfiIdBadge, TfiLayoutGrid2 } from "react-icons/tfi"

const MyOrders = () => {
    return (
        <main>
            <section className='py-5'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <nav>
                                <ul className='list-unstyled'>
                                    <li className='mb-4'>
                                        <Link to="/">
                                            <TfiLayoutGrid2/>
                                            <span> Найти специалиста</span>
                                        </Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to="/">
                                            <TfiLayoutGrid2/>
                                            <span> Найти специалиста</span>
                                        </Link>
                                    </li>
                                    <li className='mb-4'>
                                        <Link to="/">
                                            <TfiLayoutGrid2/>
                                            <span> Найти специалиста</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                        <Col md={9}>
                            <h2 className='mb-5'>Вы ещё не создавали заказы — время начать!</h2>
                            <Row md={3}>
                                <Col>
                                    <div className="d-flex">
                                        <TfiPencilAlt className='fs-30'/>
                                        <h4 className='ms-3 mb-0'>1. Разместите заказ</h4>
                                    </div>
                                    <p className='gray-3'>Опишите задачу. Если нужно, укажите сроки и бюджет</p>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <TfiCommentAlt className='fs-30'/>
                                        <h4 className='ms-3 mb-0'>2. Получите предложения</h4>
                                    </div>
                                    <p className='gray-3'>Исполнители сами откликнутся на ваш заказ. Обсудите детали заказа в чате или по телефону</p>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <TfiIdBadge className='fs-30'/>
                                        <h4 className='ms-3 mb-0'>3. Выберите исполнителя</h4>
                                    </div>
                                    <p className='gray-3'>Выберите подходящего вам исполнителя по рейтингу, отзывам и цене</p>
                                </Col>
                            </Row>
                            <button type='button' className='btn-1 mx-auto mt-5'>Создать заказ</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default MyOrders