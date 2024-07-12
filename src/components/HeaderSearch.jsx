import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { SlUser, SlMagnifier, SlBubble } from "react-icons/sl";
import logo from '../assets/imgs/servicio365.png';
import SearchForm from './forms/SearchForm';
import LanguageSwitcher from './utils/LanguageSwitcher';
import Notifications from './Notifications';
import { useSelector } from 'react-redux';

const HeaderSearch = () => {
const {t} = useTranslation();
  const [search, setSearch] = useState(false);
  const closeSearch = () => setSearch(false);
  const showSearch = () => setSearch(true);
  const unreadCount = useSelector((state) => state.notification.message);

  return (
    <>
      <header className='h-search'>
        <Container>
          <nav className='left me-3'>
            <Link to='/'>
              <img src={logo} alt="servicio365" className='logo' />
            </Link>
            <SearchForm className={'form-search-1'} />
          </nav>
          <nav className='right'>
            <ul>
              <li className='d-none d-lg-block'>
                <Link to='/messages'>

                  <SlBubble />
                  {unreadCount && unreadCount > 0 ? <div className="unread-header-conversations-count" /> : ""}
                </Link>
              </li>
              <li className='d-lg-none'>
                <button type='button' onClick={showSearch}>
                  <SlMagnifier />
                </button>
              </li>
              <li>
                <Notifications />
              </li>
              <li>
                <Link to='/account'>
                  <SlUser />
                </Link>
              </li>
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
            <form action="" className='form-search-1'>
              <input type="text" placeholder={t('Чем вам помочь?')} />
              <button type='button'>
                <SlMagnifier />
              </button>
            </form>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderSearch;