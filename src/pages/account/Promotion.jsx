import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Promotion = () => {
    return (
        <main className='py-4 py-sm-5'>
            <Container>
                <section>
                    <h1 className='inner text-center mb-4'>Выбор тарифного плана</h1>
                    <h5 className='text-center mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
                    <Row xs={1} sm={2} md={3} xl={4} className='justify-content-center g-4 g-lg-5'>
                        <Col>
                            <div className="box tariff">
                                <h5>Название</h5>
                                <hr />
                                <h3>0000 &#8364;</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <button type='button' className='btn-3 py-3 w-100 mt-3 text-uppercase'>Выбрать</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="box tariff">
                                <h5>Название</h5>
                                <hr />
                                <h3>0000 &#8364;</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <button type='button' className='btn-3 py-3 w-100 mt-3 text-uppercase'>Выбрать</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="box tariff">
                                <h5>Название</h5>
                                <hr />
                                <h3>0000 &#8364;</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <button type='button' className='btn-3 py-3 w-100 mt-3 text-uppercase'>Выбрать</button>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Promotion