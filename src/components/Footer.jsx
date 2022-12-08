import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import appstore from '../assets/imgs/icons/appstore.png'
import googleplay from '../assets/imgs/icons/googleplay.png'
import appgallery from '../assets/imgs/icons/appgallery.png'
import { RxCaretDown } from "react-icons/rx"

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row lg={2}>
                    <Col>
                        <nav className='menu'>
                            <ul>
                                <li><a href="/">Создать заказ</a></li>
                                <li><a href="/">Заказы</a></li>
                                <li><a href="/">Дополнительные услуги</a></li>
                            </ul>
                            <ul>
                                <li><a href="/">Как стать исполнителем</a></li>
                                <li><a href="/">Написать в поддержку</a></li>
                                <li><a href="/">Настройки уведомлений</a></li>
                            </ul>
                            <ul>
                                <li><a href="/">Журнал</a></li>
                                <li><a href="/">О сервисе</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col>
                        <ul className='apps-links list-unstyled d-flex justify-content-end'>
                            <li>
                                <a href="/">
                                    <img src={appstore} alt="appstore" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={googleplay} alt="googleplay" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={appgallery} alt="appgallery" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <div className='bottom'>
                    <button type='button'>
                        <span>Казань</span>
                        <RxCaretDown className='fs-15'/>
                    </button>
                    <a href="/">Все города</a>
                    <a href="/">Пользовательское соглашение</a>
                    <span>© 2022–2022  Название компании</span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;