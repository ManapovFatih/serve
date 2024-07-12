import { useTranslation } from 'react-i18next';
import React from 'react';
import {Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';

const OffersLayout = () => {
const {t} = useTranslation();
  return (
    <main className='py-4 py-sm-5'>
      <Container>
        <section>
          <h1 className='inner'>{t('Заказы')}</h1>
          <nav className='offers'>
            <ul>
              <li>
                <NavLink to='new' className="btn-4">{t('Новые')}</NavLink>
              </li>
              <li>
                <NavLink to='reacted' className="btn-4">{t('Вы откликнулись')}</NavLink>
              </li>
              <li>
                <NavLink to='suggested' className="btn-4">{t('Вас пригласили')}</NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </section>
      </Container>
    </main>
  );
};

export default OffersLayout;