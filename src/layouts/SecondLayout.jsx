import React from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from 'react-router-dom';
import Footer from '../components/Footer';
import FooterMob from '../components/FooterMob';
import useIsMobile from '../hooks/isMobile';
import HeaderSearch from '../components/HeaderSearch';
import { SlGrid, SlDocs, SlUser } from "react-icons/sl";

const SecondLayout = () => {
  const {mobile} = useIsMobile('991px');

  return (
    <>
      <ScrollRestoration />
      <HeaderSearch/>
      <main className='py-4 py-lg-5'>
        <Container>
          <Row>
            <Col lg={3}>
              <nav className='nav-2'>
                <ul className='row row-cols-3 row-cols-lg-1'>
                  <li className='mb-4'>
                    <NavLink to="/search/1" end>
                      <SlGrid/>
                      <span>Найти специалиста</span>
                    </NavLink>
                  </li>
                  <li className='mb-4'>
                    <NavLink to="my-orders" end>
                      <SlDocs/>
                      <span>Мои заказы</span>
                    </NavLink>
                  </li>
                  <li className='mb-4'>
                    <NavLink to="/account/profile">
                      <SlUser/>
                      <span>Кабинет исполнителя</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col lg={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
      {
        (mobile) &&
        <FooterMob/>
      }
    </>
  );
};

export default SecondLayout;