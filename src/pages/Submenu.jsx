import { useTranslation } from 'react-i18next';
import React from 'react';
import { Link } from 'react-router-dom';
import { RxDoubleArrowLeft } from "react-icons/rx";
import useIsMobile from '../hooks/isMobile';

const Submenu = () => {
const {t} = useTranslation();
  const isMobile = useIsMobile('991px')
  return (
    <>
      {
        (isMobile) &&
        <Link to='/search/category' className='d-flex align-items-center color-5 mb-4'>
          <RxDoubleArrowLeft className='fs-12 me-2' />
          <span>{t('Вернуться назад')}</span>
        </Link>
      }
      <ul className='subcategories row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 row-cols-xxl-3 g-4'>
        <li>
          <Link to='/search/offers'>{t('Название подраздела')}</Link>
          <div className='gray-3 fs-09'>{t('772 специалиста')}</div>
        </li>
        <li>
          <Link to='/search/offers'>{t('Длинное название подраздела')}</Link>
          <div className='gray-3 fs-09'>{t('772 специалиста')}</div>
        </li>
        <li>
          <Link to='/search/offers'>{t('Название подраздела')}</Link>
          <div className='gray-3 fs-09'>{t('772 специалиста')}</div>
        </li>
        <li>
          <Link to='/search/offers'>{t('Название подраздела')}</Link>
          <div className='gray-3 fs-09'>{t('772 специалиста')}</div>
        </li>
        <li>
          <Link to='/search/offers'>{t('Название подраздела')}</Link>
          <div className='gray-3 fs-09'>{t('772 специалиста')}</div>
        </li>
        <li>
          <Link to='/search/offers'>{t('Название подраздела')}</Link>
          <div className='gray-3 fs-09'>{t('772 специалиста')}</div>
        </li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
        <li><Link to='/search/offers'>{t('Название подраздела')}</Link></li>
      </ul>
    </>
  );
};

export default Submenu;