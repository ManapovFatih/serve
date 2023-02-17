import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Outlet} from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";

const SearchMenu = () => {
  return (
    <section className='sec-7 mb-5'>
      <h1 className='inner'>Каталог услуг</h1>
      <Row>
        <Col md={4} xxl={3}>
          <ul className='categories'>
            <li>
              <button type='button' className='active'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Длинное название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
            <li>
              <button type='button'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </button>
            </li>
          </ul>
        </Col>
        <Col md={8} xxl={9}>
          {/* <ul className='subcategories row row-cols-2 row-cols-xxl-3 g-4'>
            <li>
              <Link to='/'>Название подраздела</Link>
              <div className='gray-3 fs-09'>772 специалиста</div>
            </li>
            <li>
              <Link to='/'>Длинное название подраздела</Link>
              <div className='gray-3 fs-09'>772 специалиста</div>
            </li>
            <li>
              <Link to='/'>Название подраздела</Link>
              <div className='gray-3 fs-09'>772 специалиста</div>
            </li>
            <li>
              <Link to='/'>Название подраздела</Link>
              <div className='gray-3 fs-09'>772 специалиста</div>
            </li>
            <li>
              <Link to='/'>Название подраздела</Link>
              <div className='gray-3 fs-09'>772 специалиста</div>
            </li>
            <li>
              <Link to='/'>Название подраздела</Link>
              <div className='gray-3 fs-09'>772 специалиста</div>
            </li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
            <li><Link to='/'>Название подраздела</Link></li>
          </ul> */}
          <Outlet/>
        </Col>
      </Row>
    </section>
  );
};

export default SearchMenu;