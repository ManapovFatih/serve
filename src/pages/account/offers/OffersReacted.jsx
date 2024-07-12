import { useTranslation } from 'react-i18next';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OffersReacted = () => {
const {t} = useTranslation();
  return (
    <Row>
      <Col lg={8}>
        <div className="box">
          <h3>{t('Вы пока не откликались на заказы')}</h3>
          <p>{t('Здесь будут отображаться заказы, на которые вы оставили отклик')}</p>
        </div>
      </Col>
    </Row>
  );
};

export default OffersReacted;