import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SlMagnifier } from "react-icons/sl"

const Index = () => {
    return (
        <main className='py-4 py-sm-5'>
            <Container>
                <h1 className='inner text-center mb-4 mb-sm-5'>Ваши заказы</h1>
                <Row className='flex-column flex-lg-row-reverse'>
                    <Col lg={4} className="mb-4 mb-sm-5">
                        <div className="box">
                            <label className='align-items-center'>
                                <div className='flex-1 me-3'>
                                    <h6>Профиль опубликован</h6>
                                    <p className='gray-3 fs-09'>Пользователи могут предлагать вам заказы</p>
                                </div>
                                <input type="checkbox" />
                            </label>
                            <hr />
                            <label className='align-items-center'>
                                <div className='flex-1 me-3'>
                                    <h6>Уведомления включены</h6>
                                    <p className='gray-3 fs-09'>Выключите, чтобы не получать уведомления</p>
                                </div>
                                <input type="checkbox" />
                            </label>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <section className='mb-4 mb-sm-5'>
                            <div className="d-flex justify-content-between mb-4">
                                <h3 className='mb-0'>Ваши контакты</h3>
                                <form action="" className='d-none d-xl-block form-search-1'>
                                    <input type="text" placeholder='Чем вам помочь?'/>
                                    <button type='button'>
                                        <SlMagnifier/>
                                    </button>
                                </form>
                            </div>
                            <div className="box">
                                <h4>У вас нет новых контактов</h4>
                                <p className='gray-3 mb-4'>Ищите заказы через Поиск заказов и оставляйте отклики. Как только кто-то из заказчиков с вами свяжется, здесь появятся новые контакты.</p>
                                <button type='button' className='btn-3 py-3'>Найти заказы</button>
                            </div>
                        </section>

                        <section className='mb-4 mb-sm-5'>
                            <h3>Вас пока никто не выбрал исполнителем</h3>
                            <p className='mb-4'>Чтобы получить заказы, вам нужно найти интересные заказы и договориться с заказчиком</p>

                            <div className="box">
                                <h4>Увеличьте количество заказов</h4>
                                <p className='gray-3 mb-4'>Подключите продвижение, чтобы поднять ваш профиль в результатах поиска</p>
                                <button type='button' className='btn-3 py-3'>Подключить продвижение</button>
                            </div>
                        </section>

                        <section className='mb-4 mb-sm-5'>
                            <h3>Нет выполненных заказов</h3>
                            <p>Найдите и закройте заказ, чтобы у вас появились отзывы и рейтинг</p>
                        </section>
                    </Col>
                </Row>
                
            </Container>
        </main>
    )
}

export default Index