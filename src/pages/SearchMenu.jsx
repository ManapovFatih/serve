import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink, Outlet} from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";
import useIsMobile from '../hooks/isMobile';

const SearchMenu = () => {
  const {mobile} = useIsMobile('991px');
  return (
    <div>
      <h1 className='inner'>Каталог услуг</h1>
      <Row>
        <Col xs={12} lg={4} xxl={3}>
          <ul className='categories'>
            <li>
              <NavLink to='1'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='2'>
                <span>Длинное название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='3'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='4'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='5'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='6'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='7'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='8'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='9'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
            <li>
              <NavLink to='10'>
                <span>Название раздела</span>
                <RxDoubleArrowRight/>
              </NavLink>
            </li>
          </ul>
        </Col>
        {
          (!mobile) &&
          <Col lg={8} xxl={9}>
            <Outlet/>
          </Col>
        }
        
      </Row>
    </div>
  );
};

export default SearchMenu;