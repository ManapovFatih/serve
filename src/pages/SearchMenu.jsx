import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";
import useIsMobile from '../hooks/isMobile';
import { getCategoryList } from '../services/Home';

const SearchMenu = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile('991px');
  const [categories, setCategories] = useState({ items: [], loading: true });
  useEffect(() => {
    getCategoryList()
      .then((res) => {
        setCategories((prev) => ({
          ...prev,
          items: res,
          loading: false
        }));
      })
      .catch(() => setCategories((prev) => ({ ...prev, loading: false })));
  }, []);
  return (
    <div>
      <h1 className='inner'>{t('Каталог услуг')}</h1>
      <div className='d-flex row gx-4 gy-4 w-100'>
        {categories?.items && categories.items.map(item => (
          <div className='col-auto'> {/* Используйте col-auto для определения ширины блока */}
            <Link to={'/search/category/' + item.id} className='btn-4'>{item.title}</Link>
          </div>
        ))}
      </div>


    </div>
  );
};

export default SearchMenu;