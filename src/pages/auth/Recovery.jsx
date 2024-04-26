import React, { useCallback } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useForm, useWatch } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/utils/Input'
import { authPasswordRecovery } from '../../services/auth'
import { NotificationManager } from 'react-notifications'

const Recovery = () => {
    const navigate = useNavigate()
    const {
        control,
        formState: { errors, isValid },
        handleSubmit,
        setValue,
        reset,
        register,
    } = useForm({
        mode: "all", reValidateMode: "onSubmit", defaultValues: {
            step: 1,
        },
    });

    const data = useWatch({ control });


    const onSubmit = useCallback((data) => {
        authPasswordRecovery(data)
            .then(() => {
                if (data.step == 1 || data.step == 3) {
                    NotificationManager.success(
                        data.step == 1
                            ? "Код подтверждения отправлен"
                            : data.step == 3 && "Пароль успешно изменен"
                    );
                    if (data.step == 3) {
                        navigate("/login/")
                    }
                }
                reset({ ...data, step: data.step + 1 });
            })
            .catch((error) => {
                NotificationManager.error(
                    typeof error?.response?.data?.error === "string"
                        ? error.response.data.error
                        : "Неизвестная ошибка"
                )
            });
    }, []);
    return (
        <main className='py-4 py-sm-5'>
            <Container className='h-100'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
                        <h1 className='inner text-center'>Восстановление пароля</h1>

                        <form action="" className='box bg-1' onSubmit={handleSubmit(onSubmit)}>
                            {!data.step || data.step === 1 ? (
                                <>
                                    <Row className='g-2 g-sm-4 align-items-center'>
                                        <p className='mb-3'>Введите адрес электронной почты, которую вы вводили при регистрации</p>
                                        <Col sm={2}>
                                            <div className="text-sm-start mb-2">E-mail</div>
                                        </Col>
                                        <Col sm={6}>
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
                                        <Col sm={4}>
                                            <button type='submit' className='btn-1 mx-auto mb-2' disabled={!data?.email || data?.email?.length < 4}>Восстановить</button>
                                        </Col>

                                    </Row>
                                </>
                            ) : data.step === 2 ? (
                                <>
                                    <p className='mb-3'>Введите код, отправленный на указанную электронную почту</p>
                                    <Row className='g-2 g-sm-4 align-items-center'>
                                        <Col md={3}>
                                            <input className='mb-2' type="number" placeholder='0000' onChange={(e) => setValue("key", e.target.value)} />
                                        </Col>
                                        <Col md={3}>
                                            <button type='submit' className='btn-1 mx-auto mb-2' disabled={!data?.key || data?.key?.length < 4}>Отправить</button>
                                        </Col>
                                    </Row>
                                </>
                            ) : data.step === 3 && (
                                <>
                                    <Row className='g-2 g-sm-4 align-items-center'>
                                        <Col sm={5}>
                                            <div className="text-sm-end mb-2">Новый пароль</div>
                                        </Col>
                                        <Col sm={7}>
                                            <Input
                                                className="mb-2"
                                                autoComplete="new-password"
                                                type="password"
                                                placeholder="Придумайте пароль"
                                                name="password"
                                                errors={errors}
                                                register={register}
                                                validation={{
                                                    required: "Введите пароль",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Минимальное кол-во символов 6",
                                                    },
                                                    maxLength: {
                                                        value: 250,
                                                        message: "Максимальное кол-во символов 250",
                                                    },
                                                    pattern: {
                                                        value: /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g,
                                                        message:
                                                            "Пароль должен содержать не менее 6 символов латинского алфавита и цифры",
                                                    },
                                                }}
                                            />
                                        </Col>
                                        <Col sm={5}>
                                            <div className="text-sm-end mb-2">Подтверждение пароля</div>
                                        </Col>
                                        <Col sm={7}>
                                            <Input
                                                autoComplete="new-password"
                                                className="mb-2"
                                                type="password"
                                                placeholder="Повторите пароль"
                                                name="passwordConfirm"
                                                errors={errors}
                                                register={register}
                                                validation={{
                                                    required: "Введите повторный пароль",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Минимальное кол-во символов 6",
                                                    },
                                                    maxLength: {
                                                        value: 250,
                                                        message: "Максимальное кол-во символов 250",
                                                    },
                                                    pattern: {
                                                        value: /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g,
                                                        message:
                                                            "Пароль должен содержать не менее 6 символов латинского алфавита и цифры",
                                                    },
                                                }}
                                            />
                                        </Col>

                                    </Row>

                                    <button type="submit" className='btn-1 mx-auto mt-4' disabled={!isValid}>Сохранить</button>
                                </>
                            )}
                        </form>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Recovery