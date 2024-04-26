import React, { useCallback, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/utils/Input'
import { authActivate } from '../../services/auth'
import { NotificationManager } from 'react-notifications'

const Activate = () => {
    const [key, setKey] = useState();
    const auth = useSelector((state) => state?.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const onKey = useCallback((key) => {
        setLoading(true);
        authActivate(key)
            .then(() => {
                NotificationManager.success("Ваш аккаунт подтвержден");

                setLoading(false);
                dispatch(refreshAuth());
                navigate(-1)
            })
            .catch((error) => {
                NotificationManager.error(
                    typeof error?.response?.data?.error === "string"
                        ? error.response.data.error
                        : "Неизвестная ошибка"
                )
                setLoading(false);
            });
    }, []);
    return (
        <main className='py-4 py-sm-5'>
            <Container className='h-100'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
                        <h1 className='inner text-center'>Подтверждение почты</h1>

                        <div className='box bg-1'>
                            <p className='mb-3'>Введите код, отправленный на указанную электронную почту</p>
                            <Row className='g-2 g-sm-4 align-items-center'>
                                <Col md={3}>
                                    <input className='mb-2' type="number" placeholder='0000' value={key} onChange={(e) => { e.target.value.length < 5 && setKey(e.target.value) }} />
                                </Col>
                                <Col md={3}>
                                    <button type='button' className='btn-1 mx-auto mb-2' disabled={!key || key?.length < 4 || loading} onClick={() => onKey(key)}>Отправить</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main >
    )
}

export default Activate