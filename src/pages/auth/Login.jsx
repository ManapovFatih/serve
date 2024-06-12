import React, { useCallback, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from '../../components/utils/Input'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../../services/auth'

const Login = () => {
    const auth = useSelector((state) => state?.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuth) {
            return navigate(-1);
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

                        <form action="" className='box bg-1' onSubmit={handleSubmit(onSubmit)}>
                            <Row className='g-2 g-sm-4 align-items-center'>
                                <Col sm={2}>
                                    <div className="text-sm-start mb-2">E-mail</div>
                                </Col>
                                <Col sm={10}>
                                    <Input
                                        className="mb-2"
                                        type="email"
                                        name="email"
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
                                    <div className="text-sm-start mb-2">Пароль</div>
                                </Col>
                                <Col sm={10}>
                                    <Input
                                        className="mb-2"
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


                            </Row>

                            <button type="submit" className='btn-1 mx-auto mt-4' disabled={!isValid}>Войти</button>
                        </form>
                        <p className="mt-4">Ещё нет аккаунта? <Link to="/registration" className="link">Регистрация</Link></p>
                        <p className="mt-2"><Link to="/password" className="link">Забыли пароль?</Link></p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Login