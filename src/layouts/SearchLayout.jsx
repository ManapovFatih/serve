import { useTranslation } from 'react-i18next';
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import FooterMob from '../components/FooterMob';
import useIsMobile from '../hooks/isMobile';
import HeaderSearch from '../components/HeaderSearch';
import { SlGrid, SlDocs, SlUser } from "react-icons/sl";
import HeaderMobile from '../components/HeaderMobile';

const SearchLayout = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile('991px');

  return (
    <>
      <ScrollRestoration />
      {
        (isMobile)
          ? <HeaderMobile />
          : <HeaderSearch />
      }
      <main className='py-4 py-lg-5'>
        <Container>
          <Row>
            {
              (!isMobile) &&
              <Col lg={3}>
                <nav className='nav-2'>
                  <ul className='row row-cols-3 row-cols-lg-1'>
                    <li className='mb-4'>
                      <NavLink to="/search/category" end>
                        <SlGrid />
                        <span>{t('Найти специалиста')}</span>
                      </NavLink>
                    </li>
                    <li className='mb-4'>
                      <NavLink to="my-orders" end>
                        <SlDocs />
                        <span>{t('Мои заказы')}</span>
                      </NavLink>
                    </li>
                    <li className='mb-4'>
                      <NavLink to="/account/profile">
                        <SlUser />
                        <span>{t('Кабинет исполнителя')}</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </Col>
            }
            <Col xs={12} lg={9}>
              <section className='sec-7 mb-3 mb-sm-4 mb-md-5'>
                <Outlet />
              </section>
            </Col>
          </Row>
        </Container>
      </main>
      {
        (isMobile === true) ?
          <FooterMob />
          :
          <Footer />
      }
    </>
  );
};

export default SearchLayout;