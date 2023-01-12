import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <nav className='account-nav'>
            <ul>
                <li>
                    <Link to='/'>Профиль</Link>
                </li>
                <li>
                    <Link to='/'>Продвижение: 0 ₽</Link>
                </li>
                <li>
                    <Link to='/'>Фото профиля</Link>
                </li>
                <li>
                    <Link to='/'>Адреса</Link>
                </li>
                <li>
                    <Link to='/'>О себе</Link>
                </li>
                <li>
                    <Link to='/'>Специальности</Link>
                </li>
                <li>
                    <Link to='/'>Видео</Link>
                </li>
            </ul>

            <h6 className='gray-2 fw-4 mt-5 mb-3'>Компьютеры и IT</h6>
            <ul>
                <li>
                    <Link to='/'>Разработка сайтов</Link>
                </li>
                <li>
                    <Link to='/'>Администрирование</Link>
                </li>
                <li>
                    <Link to='/'>Другое</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu