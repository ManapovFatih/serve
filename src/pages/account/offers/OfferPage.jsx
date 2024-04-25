import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import TaskMini from '../../../components/TaskMini';
import { SlLocationPin, SlEvent, SlOptionsVertical } from "react-icons/sl";
import { MdEuroSymbol } from "react-icons/md";
import Select from 'react-select';
import InputFile from '../../../components/utils/InputFile';

const priceTypeList = [
  { value: '1', label: 'За услугу' },
  { value: '2', label: 'В час' },
]

const OfferPage = () => {
  return (
    <main className='py-3 py-sm-4 py-md-5'>
      <Container className='mb-4 mb-md-5'>
        <Row>
          <Col lg={8}>
            <section className="offer-page-card box mb-5">
              <Dropdown align="end">
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <SlOptionsVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as='button'>Пожаловаться</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <h1 className='inner me-4'>Доработать форму для сайта на Битрикс</h1>
              <ul className='horizontal mb-2'>
                <li>Раздел</li>
                <li>Подраздел</li>
              </ul>
              <ul className='horizontal'>
                <li className='pill'>Поиск исполнителей</li>
                <li>Создан 7 часов назад</li>
              </ul>
              <hr />
              <p>
                Добрый день!
                <br />Ищу хорошего добросоветного исполнителя
                <br />1. Загрузка на сайт товаров через модули импорта (html) ексель модули куплены (движок Битрикс)
                <br />2. Отрисовка банеров для каждой категории товаров.
                <br />3. Настройка метаатегов (дискрипшен тайтлы)внутренняя оптимизация на сайте.
                <br />4. Удобство пользователя на сайте. Улучшения качества юзабилити
                <br />5. Доукомплектовка сайта страницы портфолио, о компании.
                <br />5. Оплата сдельная, договорились на определённую сумму (исходя из объёмов) реализовали мы оплатили.
                <br />6.В случае заинтересованности жду предложение в ватсап восемь девятсот шестнадцать сто шедесят шесть девяносто два ноль два
                <br />Цена обсуждается
              </p>
              <ul className='vertical mt-4'>
                <li>
                  <div className="icon"><MdEuroSymbol /></div>
                  <span className='ms-3'>До 500 €</span>
                </li>
                <li>
                  <div className="icon"><SlEvent /></div>
                  <span className='ms-3'>По договорённости</span>
                </li>
                <li>
                  <div className="icon"><SlLocationPin /></div>
                  <span className='ms-3'>Работа выполняется удалённо</span>
                </li>
              </ul>
              <hr />
              <div className='user'>
                <img src="/imgs/user.png" alt="user" className='photo' />
                <h5 className='ms-2 ms-sm-4 mb-0'>Михаил</h5>
              </div>
            </section>

            <section className='respond'>
              <h3>6 откликов</h3>
              <p className='color'>Предложения исполнителей скрыты и видны только заказчику</p>

              <div className="d-flex mt-4">
                <img src="/imgs/user.png" alt="user" className='photo' />
                <div className='box flex-1'>
                  <p>Отклики станут доступны после публикации профиля</p>
                </div>
              </div>

              <div className="d-flex mt-4">
                <img src="/imgs/user.png" alt="user" className='photo' />
                <div className='box flex-1'>
                  <form action="" className='form-respond'>
                    <div className="d-sm-flex justify-content-between align-items-center mb-3 mb-sm-4">
                      <h4 className='mb-0'>Добавить отклик</h4>
                      <span className="gray-3 fs-08">1000 символов</span>
                    </div>
                    <textarea rows="5" placeholder='Расскажите, как и когда вы можете выполнить заказ.'></textarea>
                    <div className='my-3 my-md-4 d-sm-flex'>
                      <input type="text" placeholder='Ваша цена' className='w-xs-100 w-auto me-sm-2 me-md-3' />
                      <Select
                        name="priceType"
                        placeholder="Единица измерения"
                        classNamePrefix="simple-select"
                        className="simple-select-container borderless w-xs-100 mt-2 mt-sm-0"
                        options={priceTypeList}
                        defaultValue={priceTypeList[0]}
                      />
                    </div>
                    <InputFile multiple={true} />
                    <hr />
                    <div className='mt-3 mt-sm-4 d-sm-flex align-items-center'>
                      <button type='submit' className='btn-3 w-xs-100'>Откликнуться</button>
                      <div className='gray-3 ms-sm-4 mt-2 mt-sm-0'>Доступно 7 откликов</div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </Col>
          <Col lg={4} className='mt-4 mt-lg-0'>
            <Row xs={1} md={2} lg={1}>
              <Col>
                <section className="box p-3 p-sm-4 mb-4">
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
              </Col>
              <Col>
                <section className="box p-3 p-sm-4">
                  <h3>Другие заказы</h3>
                  <ul className='list-bordered'>
                    <li>
                      <TaskMini />
                    </li>
                    <li>
                      <TaskMini />
                    </li>
                    <li>
                      <TaskMini />
                    </li>
                  </ul>
                  <Link to='/account/offers' className='link d-inline-block mt-3'>Все заказы</Link>
                </section>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default OfferPage;