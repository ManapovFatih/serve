import { useTranslation } from 'react-i18next';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { SlBell } from "react-icons/sl";

const Notifications = () => {
const {t} = useTranslation();
  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="none" id="dropdown-basic">
        <SlBell className='gray-3 fs-15'/>
      </Dropdown.Toggle>

      <Dropdown.Menu as={'ol'} className='notifications-list'>
        <h4 className='text-center'>{t('Уведомления')}</h4>
        <p className='text-center gray-3 fs-09'>{t('Сейчас у вас нет новых уведомлений')}</p>
        <Dropdown.Item as={'li'}>
          <div>
            <h6>{t('Заголовок')}</h6>
            <time>{t('10 фев, 10:05')}</time>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Dropdown.Item>
        <Dropdown.Item as={'li'}>
          <div>
            <h6>{t('Заголовок')}</h6>
            <time>{t('10 фев, 10:05')}</time>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Dropdown.Item>
        <Dropdown.Item as={'li'}>
          <div>
            <h6>{t('Заголовок')}</h6>
            <time>{t('10 фев, 10:05')}</time>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Dropdown.Item>
        <Dropdown.Item as={'li'}>
          <div>
            <h6>{t('Заголовок')}</h6>
            <time>{t('10 фев, 10:05')}</time>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Notifications;