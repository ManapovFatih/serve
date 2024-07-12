import { useTranslation } from 'react-i18next';
import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceOffer from '../components/ServiceOffer';
import {Link} from 'react-router-dom';
import { RxCross2, RxMixerHorizontal } from "react-icons/rx";

const ServiceOffersPage = () => {
const {t} = useTranslation();
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className='inner mb-0'>{t('Название подраздела')}</h1>
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
                  <legend>{t('Название подраздела')}</legend>
                  <ul>
                    <li>
                      <Link to='/'>{t('Название подподраздела')}</Link>
                    </li>
                    <li>
                      <Link to='/'>{t('Название подподраздела')}</Link>
                    </li>
                    <li>
                      <Link to='/'>{t('Название подподраздела')}</Link>
                    </li>
                    <li>
                      <Link to='/'>{t('Название подподраздела')}</Link>
                    </li>
                    <li>
                      <button type='button'>{t('Ещё 10')}</button>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>{t('Нужно привезти с собой')}</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>{t('Пылесос')}</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>{t('Швабра')}</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>{t('Моющее средство')}</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='equipment'/>
                        <span className='ms-2'>{t('Тряпки')}</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>{t('Пол')}</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='sex'/>
                        <span className='ms-2'>{t('Мужской')}</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='sex'/>
                        <span className='ms-2'>{t('Женский')}</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>{t('Возраст')}</legend>
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
                  <legend>{t('Тип исполнителя')}</legend>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>{t('Частное лицо')}</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>{t('Организация')}</span>
                      </label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <legend>{t('Место')}</legend>
                  <input type="text" placeholder={t('Место')}/>
                </fieldset>
                <fieldset>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>{t('С примерами')}</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>{t('Скидки и акции')}</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name='executor'/>
                        <span className='ms-2'>{t('Работает сейчас')}</span>
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