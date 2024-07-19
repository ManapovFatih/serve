import React, { useCallback, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { NotificationManager } from 'react-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Timer } from "../../helpers/all";
import useIsMobile from '../../hooks/isMobile';
import { authActivate, authNewKeyActivate, logout, refreshAuth } from '../../services/auth';

const Activate = () => {
    const { t } = useTranslation();
    const [key, setKey] = useState();
    const auth = useSelector((state) => state?.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [endTimer, setEndTimer] = useState(false);
    const isMobile = useIsMobile('767px')
    const status = useSelector((state) => state?.auth?.user?.status);
    useEffect(() => {
        if (status) {
            return navigate("/");
        }
    }, [status]);
    const onKey = useCallback((key) => {
        setLoading(true);
        authActivate(key)
            .then(() => {
                NotificationManager.success(t('Ваш аккаунт подтвержден'));
                dispatch(refreshAuth());

            })
            .catch((error) => {
                NotificationManager.error(
                    typeof error?.response?.data?.error === "string"
                        ? error.response.data.error
                        : t('Неизвестная ошибка')
                )
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    const getKey = useCallback(() => {
        setEndTimer(false)
        authNewKeyActivate()
            .then(() => {
                NotificationManager.success("Код подтверждения отправлен повторно");

                setLoading(false);
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
    useEffect(() => {
        if (!auth.isAuth) {
            return navigate("/");
        }
    }, [auth.isAuth]);
    return (
        <main className='py-4 py-sm-5'>
            <Container className='h-100'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
                        <h1 className='inner text-center'>{t('Подтверждение почты')}</h1>

                        <div className='box bg-1'>
                            <p className='mb-3'>{t('Введите код, отправленный на указанную электронную почту')}</p>
                            <Row className='g-2 g-sm-4 align-items-center justify-content-center'>
                                <Col md={3}>
                                    <input className='mb-2' type="number" placeholder='0000' defaultValuevalue={key} onChange={(e) => { e.target.value.length < 5 && setKey(e.target.value) }} />
                                    {isMobile && (endTimer ? (
                                        <p className="pointer" onClick={() => getKey()}>
                                            Отправить повторно код подтверждения
                                        </p>
                                    ) : (
                                        <p>
                                            Повторить отправку кода через <Timer onEnd={() => setEndTimer(true)} /> сек
                                        </p>
                                    ))}
                                </Col>

                                <Col md={6} className='d-flex'>
                                    <button type='button' className='btn-1 mx-auto mb-2' disabled={!key || key?.length < 4 || loading} onClick={() => onKey(key)}>{t('Отправить')}</button>

                                    <button type='button' className='btn-3 mx-auto mb-2' onClick={() => logout()}>{t('Выйти')}</button>
                                </Col>
                            </Row>
                            {!isMobile && (endTimer ? (
                                <p className="pointer" onClick={() => getKey()}>
                                    Отправить повторно код подтверждения
                                </p>
                            ) : (
                                <p>
                                    Повторить отправку кода через <Timer onEnd={() => setEndTimer(true)} /> сек
                                </p>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </main >
    )
}

export default Activate