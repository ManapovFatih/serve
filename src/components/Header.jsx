import React, { useState } from 'react';
import useIsMobile from '../hooks/isMobile';
import {NavLink, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SlUser, SlMagnifier } from "react-icons/sl";
import logo from '../assets/imgs/servicio365.png';
import СreateOrder from './forms/СreateOrder';
import Notifications from './Notifications';
import SearchForm from './forms/SearchForm';

const Header = () => {
    const {mobile} = useIsMobile('991px')

    const [search, setSearch] = useState(false)
    const closeSearch = () => setSearch(false)
    const showSearch = () => setSearch(true)

    return (
        <>
            <header>
                <Container>
                    <nav className='left'>
                        <Link to='/'>
                            <img src={logo} alt="servicio365" className='logo'/>
                        </Link>
                        <SearchForm className={'d-none d-xl-block form-search-1'}/>
                        {
                            (!mobile) &&
                            <ul>
                                <li><СreateOrder/></li>
                                <li><NavLink to="/search">Найти специалиста</NavLink></li>
                                <li><NavLink to="/search/my-orders">Мои заказы</NavLink></li>
                                <li><NavLink to="/registration">Стать исполнителем</NavLink></li>
                            </ul>
                        }
                    </nav>
                    <nav className='right'>
                        <ul>
                            <li className='d-xl-none'>
                                <button type='button' onClick={showSearch}>
                                    <SlMagnifier/>
                                </button>
                            </li>
                            <li>
                                <Notifications/>
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

            <Offcanvas show={search} onHide={closeSearch} placement={'top'}>
                <Offcanvas.Body>
                    <Container>
                        <SearchForm className={'form-search-1'}/>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;