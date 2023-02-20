import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceOffer from '../components/ServiceOffer';

const ServiceOffersPage = () => {
  return (
    <div>
      <h1 className='inner'>Название подраздела</h1>
      <Row>
        <Col lg={8}>
          <ServiceOffer/>
        </Col>
        <Col lg={4}>
          <form action="" className="filter">
            <fieldset>
              <legend>Пол</legend>
              <label>
                <input type="radio" name='sex'/>
                <span>Мужской</span>
              </label>
              <label>
                <input type="radio" name='sex'/>
                <span>Женский</span>
              </label>
            </fieldset>
            <fieldset>
              <legend>Возраст</legend>
              
            </fieldset>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceOffersPage;