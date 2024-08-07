import { useTranslation } from 'react-i18next';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OffersSuggested = () => {
const {t} = useTranslation();
  return (
    <Row>
      <Col lg={8}>
        <div className="box">
          <h3>{t('Нет предложений')}</h3>
          <p>{t('Здесь будут отображаться заказы, в которых заказчик сам выбрал вас и предлагает стать исполнителем')}</p>
        </div>
      </Col>
    </Row>
  );
};

export default OffersSuggested;