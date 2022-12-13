import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { SlBubbles, SlBell, SlUser } from "react-icons/sl"
import { IoSearch } from "react-icons/io5"
import { TfiSearch } from "react-icons/tfi"
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '../assets/imgs/servicio365.png'

const Header = () => {
    const [search, setSearch] = useState(false);
    const closeSearch = () => setSearch(false);
    const showSearch = () => setSearch(true);
    return (
        <>
            <header>
                <Container>
                    <nav className='left'>
                        <img src={logo} alt="servicio365" className='logo'/>
                        <button type='button' onClick={showSearch} className='color-1 fs-15 d-xl-none'>
                            <IoSearch/>
                        </button>
                        <form action="" className='d-none d-xl-block form-search-1'>
                            <input type="text" placeholder='Чем вам помочь?'/>
                            <button type='button'>
                                <IoSearch/>
                            </button>
                        </form>
                        <ul>
                            <li><a href="/">Создать заказ</a></li>
                            <li><a href="/">Найти специалиста</a></li>
                            <li><a href="/">Мои заказы</a></li>
                            <li><a href="/">Стать исполнителем</a></li>
                        </ul>
                    </nav>
                    <nav className='right'>
                        <ul>
                            <li>
                                <button type='button'>
                                    <SlBubbles/>
                                </button>
                            </li>
                            <li>
                                <button type='button'>
                                    <SlBell/>
                                </button>
                            </li>
                            <li>
                                <button type='button'>
                                    <SlUser/>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>

            <Offcanvas show={search} onHide={closeSearch} placement={'top'}>
                <Offcanvas.Body>
                    <Container>
                        <form action="" className='form-search-1'>
                            <input type="text" placeholder='Чем вам помочь?'/>
                            <button type='button'>
                                <TfiSearch/>
                            </button>
                        </form>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;