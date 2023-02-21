import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceOffer from '../components/ServiceOffer';
import {Link} from 'react-router-dom';
import { RxCross2, RxMixerHorizontal } from "react-icons/rx";

const ServiceOffersPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className='inner mb-0'>Название подраздела</h1>
        <button type='button' className='color-2 d-flex d-xl-none' onClick={handleShowFilter}>
          <RxMixerHorizontal className='fs-20'/>
        </button>
      </div>
      
      <Row>
        <Col xs={12} xl={8}>
          <ul className="list-unstyled">
            <li><ServiceOffer/></li>
            <li><ServiceOffer/></li>
            <li><ServiceOffer/></li>
            <li><ServiceOffer/></li>
            <li><ServiceOffer/></li>
            <li><ServiceOffer/></li>
          </ul>
        </Col>
        <Col xl={4}>
          <Offcanvas show={showFilter} onHide={handleCloseFilter} responsive="xl" placement={'end'}>
            <Offcanvas.Body>
              <button type='button' className='close d-xl-none' onClick={handleCloseFilter}>
                <RxCross2/>
              </button>
              <form action="" className="filter">
                <fieldset>
                  <legend>Название подраздела</legend>
                  <ul>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <Link to='/'>Название подподраздела</Link>
                    </li>
                    <li>
                      <button type='button'>Ещё 10</button>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Нужно привезти с собой</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>Пылесос</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>Швабра</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>Моющее средство</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>Тряпки</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Пол</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='sex'/>
                        <span className='ms-2'>Мужской</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='sex'/>
                        <span className='ms-2'>Женский</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Возраст</legend>
                  <Row xs={2} className='gx-2'>
                    <Col>
                      <input type="number" placeholder='0'/>
                    </Col>
                    <Col>
                      <input type="number" placeholder='0'/>
                    </Col>
                  </Row>
                </fieldset>
                <fieldset>
                  <legend>Тип исполнителя</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>Частное лицо</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>Организация</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>Место</legend>
                  <input type="text" placeholder='Место'/>
                </fieldset>
                <fieldset>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>С примерами</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>Скидки и акции</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>Работает сейчас</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
              </form>
            </Offcanvas.Body>
          </Offcanvas>
          
        </Col>
      </Row>
    </div>
  );
};

export default ServiceOffersPage;