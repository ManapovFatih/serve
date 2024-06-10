import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SlBubble, SlEnvolope, SlLogin, SlLogout, SlMagnifier, SlUser } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/imgs/servicio365.png';
import useIsMobile from '../hooks/isMobile';
import Notifications from './Notifications';
import SearchForm from './forms/SearchForm';
import СreateOrder from './forms/СreateOrder';
import LanguageSwitcher from './utils/LanguageSwitcher';
import { logout } from '../services/auth';
const Header = () => {
    const { mobile } = useIsMobile('991px')
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth?.user?.id);
    const unreadCount = useSelector((state) => state.notification.message);
    const [search, setSearch] = useState(false)
    const closeSearch = () => setSearch(false)
    const showSearch = () => setSearch(true)

    return (
        <>
            <header>
                <Container>
                    <nav className='left'>
                        <Link to='/'>
                            <img src={logo} alt="servicio365" className='logo' />
                        </Link>
                        <SearchForm className={'d-none d-xl-block form-search-1'} />
                        {
                            (!mobile) &&
                            <ul>
                                <li><СreateOrder /></li>
                                <li><NavLink to="/search">Найти специалиста</NavLink></li>
                                <li><NavLink to="/search/my-orders">Мои заказы</NavLink></li>
                                <li><NavLink to="/registrationPerformer">Стать исполнителем</NavLink></li>
                            </ul>
                        }
                    </nav>
                    <nav className='right'>
                        <ul>
                            <li className='d-xl-none'>
                                <button type='button' onClick={showSearch}>
                                    <SlMagnifier />
                                </button>
                            </li>
                            {isAuth ?
                                <>
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
                                        <Link to='/account/'>

                                            <SlUser />
                                        </Link>
                                    </li>
                                    <li className='d-none d-lg-block'>
                                        <Link to="/" onClick={() => dispatch(logout())}>
                                            <SlLogout />
                                        </Link>
                                    </li>
                                </>
                                :
                                <li className='d-none d-lg-block'>
                                    <Link to='/login/'>
                                        <span className="d-none d-xl-block">Войти</span>
                                        <SlLogin />
                                    </Link>
                                </li>
                            }
                            <li>
                                <LanguageSwitcher />
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>

            <Offcanvas show={search} onHide={closeSearch} placement={'top'}>
                <Offcanvas.Body>
                    <Container>
                        <SearchForm className={'form-search-1'} />
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;