import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Task from '../../../components/Task';
import {Link} from 'react-router-dom';
import TaskFilter from '../../../components/TaskFilter';

const OffersNew = () => {
  return (
    <Row className='flex-lg-row-reverse'>
      <Col lg={4}>
        <div className="box mb-4 d-none d-lg-block">
          <h4>Увеличьте количество заказов</h4>
          <p>Подключите продвижение, чтобы поднять ваш профиль в результатах поиска</p>
          <Link to='/account/promotion' className="btn-3 py-3 w-100 mt-3">Подключить продвижение</Link>
        </div>
        <TaskFilter />
      </Col>
      <Col lg={8}>
        <ul className="list-unstyled">
          <li><Task/></li>
          <li><Task/></li>
          <li><Task/></li>
          <li><Task/></li>
          <li><Task/></li>
          <li><Task/></li>
        </ul>
      </Col>
    </Row>
  );
};

export default OffersNew;