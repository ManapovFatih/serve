import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import { SlGrid, SlUser, SlOptions } from "react-icons/sl";
import { TfiPencilAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import {NavLink, Link} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const FooterMob = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <footer className="mobile">
            <Container>
                <nav>
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/">
                                <SlGrid/>
                                <span>Главная</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <TfiPencilAlt/>
                                <span>Заказы</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">
                                <SlUser/>
                                <span>Профиль</span>
                            </NavLink>
                        </li>
                        <li>
                            <button type='button' onClick={handleShow}>
                                <SlOptions/>
                                <span>Меню</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
        <Offcanvas show={show} onHide={handleClose} placement={'bottom'}>
            <Offcanvas.Body>
                <Container>
                    <button type='button' className='close' onClick={handleClose}><RxCross2/></button>
                    <nav className='mobile-menu' onClick={handleClose}>
                        <ul>
                            <li>
                                <Link to='/account/profile'>Мой профиль</Link>
                            </li>
                            <li>
                                <Link to='/account/your-orders'>Ваши заказы</Link>
                            </li>
                            <li>
                                <Link to='/account/offers-search'>Поиск заказов</Link>
                            </li>
                            <li>
                                <Link to='/account/promotion'>Продвижение</Link>
                            </li>
                            <li>
                                <Link to='/account/subscriptions'>Подписки</Link>
                            </li>
                            <li>
                                <Link to='/account/settings'>Настройки</Link>
                            </li>
                        </ul>
                        <hr />
                        <ul>
                            <li>
                                <Link to='/search'>Найти специалиста</Link>
                            </li>
                            <li>
                                <Link to='/search/my-orders'>Мои заказы</Link>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default FooterMob