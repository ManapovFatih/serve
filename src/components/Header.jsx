import React from 'react'
import Container from 'react-bootstrap/Container'
import { SlBubbles, SlBell, SlUser } from "react-icons/sl"
import SearchForm from './SearchForm';

const Header = () => {
    return (
        <header>
            <Container>
                <nav className='left'>
                    <span className='fw-7 fs-20 logo'>LOGO</span>
                    <SearchForm btnType={0} />
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
    );
};

export default Header;