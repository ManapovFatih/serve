import React, { useCallback, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from '../../components/utils/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../../services/auth'

const Login = () => {
    const auth = useSelector((state) => state?.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuth) {
            return navigate("/");
        }
    }, [auth.isAuth]);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: "all", reValidateMode: "onSubmit" });

    const dispatch = useDispatch();

    const onSubmit = useCallback((data) => {
        dispatch(login(data));
    }, []);
    return (
        <main className='py-4 py-sm-5'>
            <Container className='h-100'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
                        <h1 className='inner text-center'>Войти</h1>

                        <form action="" className='box bg-1'>
                            <Row className='g-2 g-sm-4 align-items-center'>
                                <Col sm={2}>
                                    <div className="text-sm-end">E-mail</div>
                                </Col>
                                <Col sm={10}>
                                    <Input
                                        type="login"
                                        name="login"
                                        placeholder="E-mail"
                                        errors={errors}
                                        register={register}
                                        validation={{
                                            required: "Введите имя пользователя или email",
                                            maxLength: {
                                                value: 250,
                                                message: "Максимально 250 символов",
                                            },
                                        }}
                                    />
                                </Col>
                                <Col sm={2}>
                                    <div className="text-sm-end">Фамилия</div>
                                </Col>
                                <Col sm={10}>
                                    <Input
                                        type="password"
                                        name="password"
                                        errors={errors}
                                        placeholder="Пароль"
                                        register={register}
                                        validation={{
                                            required: "Введите пароль",
                                            minLength: {
                                                value: 4,
                                                message:
                                                    "Минимальный пароль должен состоять из 4-ех символов",
                                            },
                                        }}
                                    />
                                </Col>
                                <Col sm={2}>
                                    <div className="text-sm-end">Телефон</div>
                                </Col>
                                <Col sm={10}>
                                    <input type="tel" placeholder='+79000000000' />
                                </Col>
                                <Col sm={{ span: 10, offset: 2 }} >
                                    <label className='fs-09 mt-3 mt-sm-0'>
                                        <input type="checkbox" />
                                        <span className='ms-2'>Даю свое согласие на использование моих персональных данных</span>
                                    </label>
                                    <label className='fs-09 mt-4'>
                                        <input type="checkbox" />
                                        <span className='ms-2'>Нажимая "Продолжить", я принимаю <a href="/" className='link'>Условия пользовательского соглашения</a></span>
                                    </label>
                                </Col>
                            </Row>
                            <button type="button" className='btn-1 mx-auto mt-4'>Продолжить</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Login