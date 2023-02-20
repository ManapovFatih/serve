import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { TfiPencilAlt, TfiCommentAlt, TfiIdBadge } from "react-icons/tfi"
import Order from '../components/Order';

const MyOrders = () => {
    return (
        <div>
            <h1 className='inner'>Мои заказы</h1>

            <h3 className='mb-4 mb-sm-5'>Вы ещё не создавали заказы — время начать!</h3>
            <Row xs={1} sm={2} md={3} className='g-4 justify-content-center'>
                <Col>
                    <div className="d-flex align-items-center mb-3">
                        <TfiPencilAlt className='fs-25 color-5'/>
                        <h4 className='ms-3 mb-0'>1. Разместите заказ</h4>
                    </div>
                    <p className='gray-3 fs-09'>Опишите задачу. Если нужно, укажите сроки и бюджет</p>
                </Col>
                <Col>
                    <div className="d-flex align-items-center mb-3">
                        <TfiCommentAlt className='fs-25 color-5'/>
                        <h4 className='ms-3 mb-0'>2. Получите предложения</h4>
                    </div>
                    <p className='gray-3 fs-09'>Исполнители сами откликнутся на ваш заказ. Обсудите детали заказа в чате или по телефону</p>
                </Col>
                <Col>
                    <div className="d-flex align-items-center mb-3">
                        <TfiIdBadge className='fs-25 color-5'/>
                        <h4 className='ms-3 mb-0'>3. Выберите исполнителя</h4>
                    </div>
                    <p className='gray-3 fs-09'>Выберите подходящего вам исполнителя по рейтингу, отзывам и цене</p>
                </Col>
            </Row>
            <button type='button' className='btn-1 mx-auto my-4 my-sm-5'>Создать заказ</button>

            <ul className="orders-list">
                <li><Order active={false} responseCount={3}/></li>
                <li><Order active={true} responseCount={0}/></li>
                <li><Order active={true} responseCount={3}/></li>
            </ul>
        </div>
    );
};

export default MyOrders