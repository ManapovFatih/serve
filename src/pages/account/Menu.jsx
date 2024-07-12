import { useTranslation } from 'react-i18next';
import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
const {t} = useTranslation();
    return (
        <nav className='account-nav'>
            <ul>
                <li>
                    <NavLink to='/account/profile' end className="fs-13">{t('Профиль')}</NavLink>
                </li>
                <li>
                    <NavLink to='/account/promotion'>{t('Продвижение: 0 ₽')}</NavLink>
                </li>
                <li>
                    <NavLink to='/account/profile/photo'>{t('Фото профиля')}</NavLink>
                </li>
                <li>
                    <NavLink to='/account/profile/addresses'>{t('Адреса')}</NavLink>
                </li>
                <li>
                    <NavLink to='/account/profile/about'>{t('О себе')}</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/account/profile/specialties'>Специальности</NavLink>
                </li> */}
            </ul>

            {/* <h6 className='gray-2 fw-4 mt-5 mb-3'>Разное</h6>
            <ul>
                <li>
                    <NavLink to='/account/profile/services'>Интернет-маркетолог</NavLink>
                </li>
                <li>
                    <NavLink to='/account/profile/services'>SMM-продвижение</NavLink>
                </li>
            </ul>

            <h6 className='gray-2 fw-4 mt-5 mb-3'>Компьютеры и IT</h6>
            <ul>
                <li>
                    <NavLink to='/account/profile/services'>Разработка сайтов</NavLink>
                </li>
                <li>
                    <NavLink to='/account/profile/services'>Администрирование</NavLink>
                </li>
                <li>
                    <NavLink to='/account/profile/services'>Другое</NavLink>
                </li>
            </ul> */}
        </nav>
    );
};

export default Menu