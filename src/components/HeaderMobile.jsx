import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { SlMagnifier } from "react-icons/sl";
import logo from '../assets/imgs/servicio365.png';
import Notifications from './Notifications';
import SearchForm from './forms/SearchForm';
import LanguageSwitcher from './utils/LanguageSwitcher';

const HeaderMobile = () => {
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
              </nav>
              <nav className='right'>
                <ul>
                  <li>
                    <button type='button' onClick={showSearch}>
                      <SlMagnifier/>
                    </button>
                  </li>
                  <li>
                    <Notifications/>
                  </li>
                  <li>
                    <LanguageSwitcher/>
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

export default HeaderMobile;