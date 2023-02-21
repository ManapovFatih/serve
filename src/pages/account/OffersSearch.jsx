import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Task from '../../components/Task';
import {Link} from 'react-router-dom';
import TaskFilter from '../../components/TaskFilter';

const OffersSearch = () => {
  return (
    <main className='py-4 py-sm-5'>
      <Container>
        <section>
          <h1 className='inner'>Заказы</h1>
          <ul className='list-unstyled d-flex mb-4'>
            <li>
              <button className="btn-4 py-3">Новые</button>
            </li>
            <li>
              <button className="btn-4 py-3 ms-4">Вы откликнулись</button>
            </li>
            <li>
              <button className="btn-4 py-3 ms-4">Вас пригласили</button>
            </li>
          </ul>
        
          <Row>
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
            <Col lg={4}>
              <div className="box mb-4">
                <h4>Увеличьте количество заказов</h4>
                <p>Подключите продвижение, чтобы поднять ваш профиль в результатах поиска</p>
                <Link to='/account/promotion' className="btn-3 py-3 w-100 mt-3">Подключить продвижение</Link>
              </div>
              <TaskFilter />
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default OffersSearch;