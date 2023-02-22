import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import TaskMini from '../../../components/TaskMini';
import { SlLocationPin, SlEvent } from "react-icons/sl";
import { MdEuroSymbol } from "react-icons/md";
import Select from 'react-select';

const priceTypeList = [
  {value: '1', label: 'За услугу'},
  {value: '2', label: 'В час'},
]

const OfferPage = () => {
  return (
    <main className='py-4 py-sm-5'>
      <Container className='mb-5'>
        <Row>
          <Col lg={8}>
            <section className="box mb-5">
              <h1 className='inner'>Доработать форму для сайта на Битрикс</h1>
              <hr />
              <p>
                Добрый день!
                <br/>Ищу хорошего добросоветного исполнителя
                <br/>1. Загрузка на сайт товаров через модули импорта (html) ексель модули куплены (движок Битрикс)
                <br/>2. Отрисовка банеров для каждой категории товаров.
                <br/>3. Настройка метаатегов (дискрипшен тайтлы)внутренняя оптимизация на сайте.
                <br/>4. Удобство пользователя на сайте. Улучшения качества юзабилити
                <br/>5. Доукомплектовка сайта страницы портфолио, о компании.
                <br/>5. Оплата сдельная, договорились на определённую сумму (исходя из объёмов) реализовали мы оплатили.
                <br/>6.В случае заинтересованности жду предложение в ватсап восемь девятсот шестнадцать сто шедесят шесть девяносто два ноль два
                <br/>Цена обсуждается
              </p>
              <ul className='list-unstyled mt-4'>
                <li className='mb-3'>
                  <MdEuroSymbol className='fs-13'/>
                  <span className='ms-3'>до 500 €</span>
                </li>
                <li className='mb-3'>
                  <SlEvent className='fs-13'/>
                  <span className='ms-3'>По договорённости</span>
                </li>
                <li className='mb-3'>
                  <SlLocationPin className='fs-13'/>
                  <span className='ms-3'>Работа выполняется удалённо</span>
                </li>
              </ul>
              <hr />
            </section>

            <section className='respond'>
              <h3>6 откликов</h3>
              <p className='color'>Предложения исполнителей скрыты и видны только заказчику</p>

              <div className="d-flex mt-4">
                <img src="imgs/user.png" alt="user" className='photo'/>
                <div className='box flex-1'>
                  <p>Отклики станут доступны после публикации профиля</p>
                </div>
              </div>

              <div className="d-flex mt-4">
                <img src="imgs/user.png" alt="user" className='photo'/>
                <div className='box flex-1'>
                  <form action="">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className='mb-0'>Добавить отклик</h3>
                      <span className="gray-3 fs-08">1000 символов</span>
                    </div>
                    <textarea rows="5" placeholder='Расскажите, как и когда вы можете выполнить заказ.'></textarea>
                    <div className='my-4 d-flex'>
                      <input type="text" placeholder='Ваша цена' className='w-auto me-3'/>
                      <Select
                        name="priceType"
                        placeholder="Единица измерения"
                        classNamePrefix="simple-select"
                        className="simple-select-container"
                        options={priceTypeList}
                        defaultValue={priceTypeList[0]}
                      />
                    </div>
                    <hr />
                    <div className='mt-4 d-flex align-items-center'>
                      <button type='submit' className='btn-3'>Откликнуться</button>
                      <div className='ms-4'>Доступно 7 откликов</div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </Col>
          <Col lg={4}>
            <section className="box mb-4">
              <h3>Что-то не так с заказом?</h3>
              <ul className="list-unstyled d-flex flex-wrap fs-09">
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-4 p-3'>Не оказываю такую услугу</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-4 p-3'>Заказ выглядит сомнительным</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-4 p-3'>Низкая для меня цена</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-4 p-3'>Не указаны сроки</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-4 p-3'>Другое</button>
                </li>
              </ul>
            </section>

            <section className="box">
              <h3>Другие заказы</h3>
              <ul className='list-bordered'>
                <li>
                  <TaskMini/>
                </li>
                <li>
                  <TaskMini/>
                </li>
                <li>
                  <TaskMini/>
                </li>
              </ul>
              <Link to='/account/offers' className='link d-inline-block mt-3'>Все заказы</Link>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default OfferPage;