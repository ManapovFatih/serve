import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <nav className='account-nav'>
            <ul>
                <li>
                    <NavLink to='/account' end>Профиль</NavLink>
                </li>
                <li>
                    <NavLink to='promotion'>Продвижение: 0 ₽</NavLink>
                </li>
                <li>
                    <NavLink to='photo'>Фото профиля</NavLink>
                </li>
                <li>
                    <NavLink to='addresses'>Адреса</NavLink>
                </li>
                <li>
                    <NavLink to='about'>О себе</NavLink>
                </li>
                <li>
                    <NavLink to='specialties'>Специальности</NavLink>
                </li>
            </ul>

            <h6 className='gray-2 fw-4 mt-5 mb-3'>Разное</h6>
            <ul>
                <li>
                    <NavLink to='/'>Интернет-маркетолог</NavLink>
                </li>
                <li>
                    <NavLink to='/'>SMM-продвижение</NavLink>
                </li>
            </ul>

            <h6 className='gray-2 fw-4 mt-5 mb-3'>Компьютеры и IT</h6>
            <ul>
                <li>
                    <NavLink to='/'>Разработка сайтов</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Администрирование</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Другое</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu