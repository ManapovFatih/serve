import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { SlGrid, SlUser, SlOptions, SlBubble } from "react-icons/sl";
import { TfiPencilAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CreateOrder from './forms/СreateOrder';
import { useSelector } from 'react-redux';

const FooterMob = () => {
    const { t } = useTranslation();
    // const [showFMenu, setShowFMenu] = useState(false);
    // const handleCloseFMenu = () => setShowFMenu(false);
    // const handleShowFMenu = () => setShowFMenu(true);

    const unreadCount = useSelector((state) => state.notification.message);
    return (
        <>
            <footer className="mobile">
                <Container>
                    <nav>
                        <ul className="list-unstyled">
                            <li>
                                <NavLink to="/">
                                    <SlGrid />
                                    <span>{t('Главная')}</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/search/my-orders">
                                    <TfiPencilAlt />
                                    <span>{t('Заказы')}</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/messages">
                                    <SlBubble />

                                    {unreadCount && unreadCount > 0 ? <div className="unread-header-conversations-count" /> : ""}
                                    <span>{t('Чат')}</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/account">
                                    <SlUser />
                                    <span>{t('Профиль')}</span>
                                </NavLink>
                            </li>
                            {/* <li>
                            <button type='button' onClick={handleShowFMenu}>
                                <SlOptions/>
                                <span>Меню</span>
                            </button>
                        </li> */}
                        </ul>
                    </nav>
                </Container>
            </footer>
            {/* <Offcanvas show={showFMenu} onHide={handleCloseFMenu} placement={'bottom'}>
                <Offcanvas.Body>
                    <Container>
                        <button type='button' className='close' onClick={handleCloseFMenu}><RxCross2 /></button>
                        <nav className='mobile-menu'>
                            <ul onClick={handleCloseFMenu}>
                                <li>
                                    <Link to='/account/profile'>Мой профиль</Link>
                                </li>
                                <li>
                                    <Link to='/account/your-orders'>Ваши заказы</Link>
                                </li>
                                <li>
                                    <Link to='/account/offers'>Поиск заказов</Link>
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
                                    <CreateOrder />
                                </li>
                                <li onClick={handleCloseFMenu}>
                                    <Link to='/search'>Найти специалиста</Link>
                                </li>
                                <li onClick={handleCloseFMenu}>
                                    <Link to='/search/my-orders'>Мои заказы</Link>
                                </li>
                            </ul>
                        </nav>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas> */}
        </>
    )
}

export default FooterMob