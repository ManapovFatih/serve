import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Subscriptions = () => {
    return (
        <main className='py-4 py-sm-5'>
            <Container>
                <section>
                    <h1 className='inner text-center'>Подписки</h1>
                    <Row className='justify-content-center'>
                        <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
                            <div className="box bg-2">
                                <h3>Безлимитные отклики</h3>
                                <h4>199 ₽ в неделю</h4>

                                <ul>
                                    <li>Отображаются в заказах выше</li>
                                    <li>Не заканчиваются никогда</li>
                                </ul>

                                <button type='button' className='btn-1 py-3 my-3'>Подключить</button>

                                <a href="/" className='gray-3 d-block'>Подробнее о подписке</a>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Subscriptions