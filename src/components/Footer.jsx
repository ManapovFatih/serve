import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RxCaretDown } from "react-icons/rx"
import AppLinks from './AppLinks'
import useIsMobile from '../hooks/isMobile'
import { SlBubbles, SlGrid, SlOptions } from "react-icons/sl"
import { TfiPencilAlt } from "react-icons/tfi";

const Footer = () => {
    const {mobile} = useIsMobile('991px')

    return (
        <>
        <footer>
            <Container>
                <Row xs={1} xl={2}>
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
                    <Col className='mt-4 mt-xl-0'>
                        <AppLinks/>
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

        {
            (mobile === true) &&
            <footer className="mobile">
                <Container>
                    <nav>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className='active'>
                                    <SlGrid/>
                                    <span>Главная</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <TfiPencilAlt/>
                                    <span>Заказы</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <SlBubbles/>
                                    <span>сообщения</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <SlOptions/>
                                    <span>Меню</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </footer>
        }
        </>
    );
};

export default Footer;