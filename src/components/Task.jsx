import { useTranslation } from 'react-i18next';
import React from 'react';
import { Link } from 'react-router-dom';
import { SlBan, SlLocationPin, SlEvent } from "react-icons/sl";

const Task = () => {
  const { t } = useTranslation();
  return (
    <div className='task'>
      <div className="top">
        <h4><Link to='/account/offers/1'>{t('Доработать форму для сайта на Битрикс')}</Link></h4>
        <h4 className='ms-3'>1500 €</h4>
      </div>
      <ul className="info">
        <li>{t('Поиск исполнителей')}</li>
        <li className='d-none d-lg-block'>{t('Сайты под ключ')}</li>
        <li>{t('3 отклика')}</li>
        <li>{t('7 ч')}<span className='d-none d-lg-inline'>{t('асов назад')}</span></li>
      </ul>
      <hr />
      <p className='text'>{t('Сделали верстку, необходимо прикрутить форму к сайту.')}</p>
      <ul className='work'>
        <li>
          <SlEvent className='fs-13 me-2' />
          <span>{t('22 февраля')}</span>
        </li>
        <li className='ms-sm-4'>
          <SlLocationPin className='fs-13 me-2' />
          <span>{t('Работа выполняется удалённо')}</span>
        </li>
      </ul>
      <hr />
      <div className='user'>
        <img src="/imgs/img2.jpg" alt="img2.jpg" />
        <h5 className='ms-2 ms-sm-4 mb-0'>{t('Михаил')}</h5>
      </div>
      <div className='btns'>
        <button type='button' className='btn-1'>{t('Откликнуться')}</button>
        <button type='button' className='red'><SlBan /></button>
      </div>
    </div>
  );
};

export default Task;