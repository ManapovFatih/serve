import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OffersReacted = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="box">
          <h3>Вы пока не откликались на заказы</h3>
          <p>Здесь будут отображаться заказы, на которые вы оставили отклик</p>
        </div>
      </Col>
    </Row>
  );
};

export default OffersReacted;