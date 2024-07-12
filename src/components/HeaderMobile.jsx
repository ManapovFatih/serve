import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SlMagnifier, SlOptions } from "react-icons/sl";
import logo from '../assets/imgs/servicio365.png';
import Notifications from './Notifications';
import SearchForm from './forms/SearchForm';
import LanguageSwitcher from './utils/LanguageSwitcher';
import { RxCross2 } from 'react-icons/rx';
import CreateOrder from './forms/СreateOrder';

const HeaderMobile = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState(false)
  const closeSearch = () => setSearch(false)
  const showSearch = () => setSearch(true)

  const [showFMenu, setShowFMenu] = useState(false);
  const handleCloseFMenu = () => setShowFMenu(false);
  const handleShowFMenu = () => setShowFMenu(true);
  return (
    <>
      <header>
        <Container>
          <nav className='left'>
            <Link to='/'>
              <img src={logo} alt="servicio365" className='logo' />
            </Link>
          </nav>
          <nav className='right'>
            <ul>
              <li>
                <button type='button' onClick={showSearch}>
                  <SlMagnifier />
                </button>
              </li>
              <li>
                <Notifications />
              </li>
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <button type='button' onClick={() => setShowFMenu(!showFMenu)}>
                  <SlOptions />
                </button>
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


      <Offcanvas show={showFMenu} onHide={handleCloseFMenu} placement={'bottom'}>
        <Offcanvas.Body>
          <Container>
            <button type='button' className='close' onClick={handleCloseFMenu}><RxCross2 /></button>
            <nav className='mobile-menu'>
              <ul onClick={handleCloseFMenu}>
                <li>
                  <Link to='/account/profile'>{t('Мой профиль')}</Link>
                </li>
                <li>
                  <Link to='/account/your-orders'>{t('Ваши заказы')}</Link>
                </li>
                <li>
                  <Link to='/account/offers'>{t('Поиск заказов')}</Link>
                </li>
                <li>
                  <Link to='/account/promotion'>{t('Продвижение')}</Link>
                </li>
                <li>
                  <Link to='/account/subscriptions'>{t('Подписки')}</Link>
                </li>
                <li>
                  <Link to='/account/settings'>{t('Настройки')}</Link>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <CreateOrder />
                </li>
                <li onClick={handleCloseFMenu}>
                  <Link to='/search'>{t('Найти специалиста')}</Link>
                </li>
                <li onClick={handleCloseFMenu}>
                  <Link to='/search/my-orders'>{t('Мои заказы')}</Link>
                </li>
              </ul>
            </nav>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderMobile;