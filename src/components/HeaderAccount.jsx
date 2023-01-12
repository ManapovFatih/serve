import React from 'react'
import useIsMobile from '../hooks/isMobile'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import { SlBubbles, SlBell, SlUser } from "react-icons/sl"
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
                                <li><Link to="/">Ваши заказы</Link></li>
                                <li><Link to="/">Поиск заказов</Link></li>
                                <li><Link to="/">Мой профиль</Link></li>
                                <li><Link to="/">Продвижением</Link></li>
                                <li><Link to="/">Подписки</Link></li>
                                <li><Link to="/">Настройки</Link></li>
                            </ul>
                        }
                    </nav>
                    <nav className='right'>
                        <ul>
                            <li className='d-none d-lg-block'>
                                <button type='button'>
                                    <SlBubbles/>
                                </button>
                            </li>
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
    );
};

export default HeaderAccount