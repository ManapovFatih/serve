import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Registration = () => {
    const [userType, setUserType] = useState(0)

    return (
        <main className='py-4 py-sm-5'>
            <Container className='h-100'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
                        <h1 className='inner text-center'>Регистрация</h1>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <button 
                                type="button" 
                                className={(userType === 0) ? 'btn-4 active py-2 py-sm-3 px-3 px-sm-4' : 'btn-4 py-2 py-sm-3 px-3 px-sm-4'} 
                                onClick={()=>setUserType(0)}>
                                Частное лицо
                            </button>
                            <button 
                                type="button" 
                                className={(userType === 1) ? 'btn-4 active py-2 py-sm-3 px-3 px-sm-4 ms-2 ms-sm-4' : 'btn-4 py-2 py-sm-3 px-3 px-sm-4 ms-2 ms-sm-4'} 
                                onClick={()=>setUserType(1)}>
                                Организация
                            </button>
                        </div>
                        {
                            (userType === 0)
                            ? <form action="" className='box bg-1'>
                                <Row className='g-2 g-sm-4 align-items-center'>
                                    <Col sm={2}>
                                        <div className="text-sm-end">Имя</div>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="text" placeholder='Имя'/>
                                    </Col>
                                    <Col sm={2}>
                                        <div className="text-sm-end">Фамилия</div>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="text" placeholder='Фамилия'/>
                                    </Col>
                                    <Col sm={2}>
                                        <div className="text-sm-end">Телефон</div>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="tel" placeholder='+79000000000'/>
                                    </Col>
                                    <Col sm={{ span: 10, offset: 2 }} >
                                        <label className='fs-09 mt-3 mt-sm-0'>
                                            <input type="checkbox"/>
                                            <span className='ms-2'>Даю свое согласие на использование моих персональных данных</span>
                                        </label>
                                        <label className='fs-09 mt-4'>
                                            <input type="checkbox"/>
                                            <span className='ms-2'>Нажимая "Продолжить", я принимаю <a href="/" className='link'>Условия пользовательского соглашения</a></span>
                                        </label>
                                    </Col>
                                </Row>
                                <button type="button" className='btn-1 mx-auto mt-4'>Продолжить</button>
                            </form>
                            : <form action="" className='box bg-1'>
                                <Row className='g-2 g-sm-4 align-items-center'>
                                    <Col sm={2}>
                                        <div className="text-sm-end">Название</div>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="text" placeholder='Название'/>
                                    </Col>
                                </Row>
                                <hr className='dark'/>
                                <h6 className='text-center mb-2'>Представитель организации</h6>
                                <Row className='g-2 g-sm-4 align-items-center'>
                                    <Col sm={2}>
                                        <div className="text-sm-end">Имя</div>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="text" placeholder='Имя'/>
                                    </Col>
                                    <Col sm={2}>
                                        <div className="text-sm-end">Фамилия</div>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="text" placeholder='Фамилия'/>
                                    </Col>
                                    <Col sm={2}>
                                        <div className="text-sm-end">Телефон</div>
                                    </Col>
                                    <Col sm={10}>
                                        <input type="tel" placeholder='+79000000000'/>
                                    </Col>
                                    <Col sm={{ span: 10, offset: 2 }} >
                                        <label className='fs-09 mt-3 mt-sm-0'>
                                            <input type="checkbox"/>
                                            <span className='ms-2'>Даю свое согласие на использование моих персональных данных</span>
                                        </label>
                                        <label className='fs-09 mt-4'>
                                            <input type="checkbox"/>
                                            <span className='ms-2'>Нажимая "Продолжить", я принимаю <a href="/" className='link'>Условия пользовательского соглашения</a></span>
                                        </label>
                                    </Col>
                                </Row>
                                <button type="button" className='btn-1 mx-auto mt-4'>Продолжить</button>
                            </form>
                        }
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Registration