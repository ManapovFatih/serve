import React from 'react'
import useIsMobile from '../hooks/isMobile'
import {Link, NavLink} from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import { SlBell, SlUser } from "react-icons/sl"
import logo from '../assets/imgs/servicio365.png'

const HeaderAccount = () => {
    const {mobile} = useIsMobile('991px')

    return (
        <>
            <header>
                <Container>
                    <nav className='left'>
                        <Link to="/">
                            <img src={logo} alt="servicio365" className='logo'/>
                        </Link>
                        {
                            (!mobile) &&
                            <ul>
                                <li><NavLink to="/account/your-orders">Ваши заказы</NavLink></li>
                                <li><NavLink to="/account/offers-search">Поиск заказов</NavLink></li>
                                <li><NavLink to="/account/profile">Мой профиль</NavLink></li>
                                <li><NavLink to="/account/promotion">Продвижение</NavLink></li>
                                <li><NavLink to="/account/subscriptions">Подписки</NavLink></li>
                                <li><NavLink to="/account/settings">Настройки</NavLink></li>
                            </ul>
                        }
                    </nav>
                    <nav className='right'>
                        <ul>
                            <li>
                                <button type='button'>
                                    <SlBell/>
                                </button>
                            </li>
                            <li className='d-none d-lg-block'>
                                <Link to='/account'>
                                    <SlUser/>
                                </Link>
                            </li>
                            <li>
                                <button type='button'>
                                    RU
                                </button>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default HeaderAccount