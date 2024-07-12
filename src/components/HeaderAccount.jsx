import { useTranslation } from 'react-i18next';
import React from 'react'
import useIsMobile from '../hooks/isMobile'
import { Link, NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import { SlBubble, SlEnvolope, SlLogout, SlUser } from "react-icons/sl"
import logo from '../assets/imgs/servicio365.png'
import LanguageSwitcher from './utils/LanguageSwitcher'
import Notifications from './Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../services/auth'

const HeaderAccount = () => {
const {t} = useTranslation();
    const { mobile } = useIsMobile('991px')
    const dispatch = useDispatch();

    const unreadCount = useSelector((state) => state.notification.message);
    return (
        <>
            <header>
                <Container>
                    <nav className='left'>
                        <Link to="/">
                            <img src={logo} alt="servicio365" className='logo' />
                        </Link>
                        {
                            (!mobile) &&
                            <ul>
                                <li><NavLink to="/account/your-orders">{t('Ваши заказы')}</NavLink></li>
                                <li><NavLink to="/account/offers">{t('Поиск заказов')}</NavLink></li>
                                <li><NavLink to="/account/profile">{t('Мой профиль')}</NavLink></li>
                                <li><NavLink to="/account/promotion">{t('Продвижение')}</NavLink></li>
                                <li><NavLink to="/account/subscriptions">{t('Подписки')}</NavLink></li>
                                <li><NavLink to="/account/settings">{t('Настройки')}</NavLink></li>
                            </ul>
                        }
                    </nav>
                    <nav className='right'>
                        <ul>
                            <li className='d-none d-lg-block'>
                                <Link to='/messages'>

                                    <SlBubble />
                                    {unreadCount && unreadCount > 0 ? <div className="unread-header-conversations-count" /> : ""}
                                </Link>
                            </li>
                            <li>
                                <Notifications />
                                {unreadCount && unreadCount > 0 ? <div className="unread-header-conversations-count" /> : ""}
                            </li>
                            <li className='d-none d-lg-block'>
                                <Link to='/account'>
                                    <SlUser />
                                </Link>
                            </li>
                            <li className='d-none d-lg-block'>
                                <Link to="/" onClick={() => dispatch(logout())}>
                                    <SlLogout />
                                </Link>
                            </li>
                            <li>
                                <LanguageSwitcher />
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default HeaderAccount