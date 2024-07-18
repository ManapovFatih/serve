import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useForm } from 'react-hook-form'
import { NotificationManager } from 'react-notifications'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/utils/Input'
import { authRegister, login } from '../../services/auth'

const Registration = () => {
    const { t } = useTranslation();
    const isAuth = useSelector((state) => state?.auth?.isAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (isAuth) {
            return navigate("/");
        }
    }, [isAuth]);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: "all", reValidateMode: "onChange" });

    const onSubmit = useCallback((data) => {
        if (data.email) {
            let successDomain = [
                "5ballov.ru",
                "aeterna.ru",
                "aim.com",
                "algxmail.com",
                "ameritech.net",
                "aol.com",
                "att.net",
                "autorambler.ru",
                "bigmir.net",
                "bk.ru",
                "charter.net",
                "clear.net.nz",
                "cox.net",
                "email.it",
                "fastmail.com.au",
                "fastmail.fm",
                "flash.net",
                "fmgirl.com",
                "fotoplenka.ru",
                "free.fr",
                "fromru.com",
                "front.ru",
                "games.com",
                "gmail.com",
                "gmx.de",
                "gmx.net",
                "googlemail.com",
                "hotbox.ru",
                "hotmail.co.nz",
                "hotmail.com",
                "hotmail.ru",
                "hotpop.com",
                "imapmail.org",
                "inbox.ru",
                "interia.pl",
                "km.ru",
                "krovatka.su",
                "land.ru",
                "lenta.ru",
                "libero.it",
                "list.ru",
                "live.com",
                "love.com",
                "mail.ru",
                "mail15.com",
                "mail333.com",
                "megabox.ru",
                "memori.ru",
                "meta.ua",
                "msn.com",
                "myrambler.ru",
                "myrealbox.com",
                "naui.net",
                "newmail.ru",
                "nfmail.com",
                "nightmail.ru",
                "nl.rogers.com",
                "nm.ru",
                "nvbell.net",
                "nxt.ru",
                "o2.pl",
                "olympus.ru",
                "operamail.com",
                "orange.net",
                "pacbell.net",
                "photofile.ru",
                "pisem.net",
                "pochta.com",
                "pochta.ru",
                "pochtamt.ru",
                "pop3.ru",
                "post.ru",
                "pplmail.com",
                "premoweb.com",
                "prodigy.net",
                "qip.ru",
                "rambler.ru",
                "rbcmail.ru",
                "rikt.ru",
                "ro.ru",
                "rocketmail.com",
                "rogers.com",
                "sbcglobal.net",
                "seznam.cz",
                "sibnet.ru",
                "sky.com",
                "sky.ru",
                "skynet.be",
                "smtp.ru",
                "snet.net",
                "softhome.net",
                "startfree.com",
                "su29.ru",
                "swbell.net",
                "talktalk.net",
                "telenet.be",
                "telus.net",
                "tlen.pl",
                "ua.fm",
                "ukr.net",
                "unliminet.de",
                "verizon.net",
                "wans.net",
                "web.de",
                "wow.com",
                "wp.pl",
                "xtra.co.nz",
                "ya.ru",
                "yahoo.ca",
                "yahoo.co.id",
                "yahoo.co.in",
                "yahoo.co.kr",
                "yahoo.co.nz",
                "yahoo.co.th",
                "yahoo.co.uk",
                "yahoo.com",
                "yahoo.com.ar",
                "yahoo.com.au",
                "yahoo.com.br",
                "yahoo.com.cn",
                "yahoo.com.hk",
                "yahoo.com.mx",
                "yahoo.com.my",
                "yahoo.com.ph",
                "yahoo.com.sg",
                "yahoo.com.tw",
                "yahoo.com.vn",
                "yahoo.de",
                "yahoo.dk",
                "yahoo.es",
                "yahoo.fr",
                "yahoo.ie",
                "yahoo.it",
                "yahoo.no",
                "yahoo.pl",
                "yahoo.se",
                "yahoomail.com",
                "yandex.ru",
                "ymail.com",
                "zebra.lt",
                "ziza.ru",
            ];
            let domain = data.email.split("@")[1];
            if (!domain || !successDomain.includes(domain)) {
                NotificationManager.error(
                    t('Разрешены только популярные почтовые сервисы')
                );
                return false;
            }
        }

        authRegister(data)
            .then(() => {
                dispatch(login({ login: data.email, password: data.password }));
                NotificationManager.success(t('Завершите регистрацию, подтвердив почту'));
                navigate("/activate");
            })
            .catch(
                (err) =>
                    err &&
                    NotificationManager.error(
                        err?.response?.data?.error ?? t('Неизвестная ошибка при регистрации')
                    )
            );
    }, []);
    return (
        <main className='py-4 py-sm-5'>
            <Container className='h-100'>
                <Row className='justify-content-center'>
                    <Col xs={12} md={9} lg={8} xl={7} xxl={6}>
                        <h1 className='inner text-center'>{t('Регистрация')}</h1>

                        <form action="" className='box bg-1' onSubmit={handleSubmit(onSubmit)}>
                            <Row className='g-2 g-sm-4 align-items-center'>
                                <Col sm={4}>
                                    <div className="text-sm-end mb-2">{t('ФИО')}</div>
                                </Col>
                                <Col sm={8}>
                                    <Input
                                        className='mb-2'
                                        autoComplete="new-password"
                                        autoFocus
                                        type="text"
                                        placeholder={t('Введите имя')}
                                        name="lastName"
                                        errors={errors}
                                        register={register}
                                        validation={{
                                            required: t('Введите имя'),
                                            minLength: {
                                                value: 1,
                                                message: t('Минимально 1 символа'),
                                            },
                                            maxLength: {
                                                value: 250,
                                                message: t('Максимально 250 символов'),
                                            },
                                        }}
                                    />
                                </Col>
                                <Col sm={4}>
                                    <div className="text-sm-end mb-2">E-mail</div>
                                </Col>
                                <Col sm={8}>
                                    <Input
                                        className='mb-2'
                                        autoComplete="new-password"
                                        type="email"
                                        placeholder={t('Введите почту')}
                                        name="email"
                                        errors={errors}
                                        register={register}
                                        validation={{
                                            required: t('Введите почту'),
                                            minLength: {
                                                value: 3,
                                                message: t('Минимально 3 символа'),
                                            },
                                            maxLength: {
                                                value: 250,
                                                message: t('Максимально 250 символов'),
                                            },
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: t('Неверный формат Email'),
                                            },
                                        }}
                                    />
                                </Col>
                                <Col sm={4}>
                                    <div className="text-sm-end mb-2">{t('Пароль')}</div>
                                </Col>
                                <Col sm={8}>
                                    <Input
                                        className='mb-2'
                                        autoComplete="new-password"
                                        type="password"
                                        placeholder={t('Придумайте пароль')}
                                        name="password"
                                        errors={errors}
                                        register={register}
                                        validation={{
                                            required: t('Введите пароль'),
                                            minLength: {
                                                value: 6,
                                                message: t('Минимальное кол-во символов 6'),
                                            },
                                            maxLength: {
                                                value: 250,
                                                message: t('Максимальное кол-во символов 250'),
                                            },
                                            pattern: {
                                                value: /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g,
                                                message:
                                                    t('Пароль должен содержать не менее 6 символов латинского алфавита и цифры'),
                                            },
                                        }}
                                    />
                                </Col>
                                <Col sm={4}>
                                    <div className="text-sm-end mb-2">{t('Подтверждение пароля')}</div>
                                </Col>
                                <Col sm={8}>
                                    <Input
                                        className='mb-2'
                                        autoComplete="new-password"
                                        type="password"
                                        placeholder={t('Повторите пароль')}
                                        name="passwordConfirm"
                                        errors={errors}
                                        register={register}
                                        validation={{
                                            required: t('Введите повторный пароль'),
                                            minLength: {
                                                value: 6,
                                                message: t('Минимальное кол-во символов 6'),
                                            },
                                            maxLength: {
                                                value: 250,
                                                message: t('Максимальное кол-во символов 250'),
                                            },
                                            pattern: {
                                                value: /(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{6,}/g,
                                                message:
                                                    t('Пароль должен содержать не менее 6 символов латинского алфавита и цифры'),
                                            },
                                        }}
                                    />
                                </Col>
                                <Col sm={4}>
                                </Col>
                                <Col sm={8}>
                                    <label className='mb-2'>
                                        <input
                                            type="checkbox"
                                            className="checkbox me-2"
                                            {...register("accept", {
                                                required:
                                                    t('Примите условия пользовательского соглашения'),
                                            })}
                                        />
                                        <span className="fs-09">
                                            {t('Принять условия Пользовательского соглашения')}
                                        </span>
                                    </label>
                                </Col>
                            </Row>

                            <button type="submit" className='btn-1 mx-auto mt-4' disabled={!isValid}>{t('Зарегистрироваться')}</button>
                        </form>
                        <p className="mt-4">{t('Есть аккаунт?')}<Link to="/login" className="link">{t('Войти')}</Link></p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Registration