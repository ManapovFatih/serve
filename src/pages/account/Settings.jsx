import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react'
import Select from 'react-select'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, useWatch } from 'react-hook-form'
import { editAccount } from '../../services/account'
import { setUser } from '../../store/reducers/authSlice'
import { NotificationManager } from 'react-notifications'
import City from '../../components/utils/City'



const Settings = () => {
    const { t } = useTranslation();
    const regularityList = [
        { value: '1', label: t('Как можно быстрее') },
        { value: '2', label: t('Не чаще, чем раз в час') },
        { value: '3', label: t('Не чаще, чем раз в день') },
    ]
    const timeList = [
        { value: '1', label: '00:00' },
        { value: '2', label: '00:01' },
        { value: '3', label: '00:02' },
        { value: '4', label: '00:03' },
        { value: '5', label: '00:04' },
        { value: '6', label: '00:05' },
        { value: '7', label: '00:06' },
        { value: '1', label: '00:07' },
        { value: '1', label: '00:08' },
        { value: '1', label: '00:09' },
        { value: '1', label: '00:10' },
        { value: '1', label: '00:11' },
        { value: '1', label: '00:12' },
        { value: '1', label: '00:13' },
        { value: '1', label: '00:14' },
        { value: '1', label: '00:15' },
        { value: '1', label: '00:16' },
        { value: '1', label: '00:17' },
        { value: '1', label: '00:18' },
        { value: '1', label: '00:19' },
        { value: '1', label: '00:20' },
        { value: '1', label: '00:21' },
        { value: '1', label: '00:22' },
        { value: '1', label: '00:23' },
    ]
    const periodList = [
        { value: '1', label: t('На неделю') },
        { value: '2', label: t('На 2 недели') },
        { value: '3', label: t('На месяц') },
    ]
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const {
        control,
        setValue,
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        reValidateMode: "onSubmit",
        defaultValues: {
            firstName: user?.firstName,
            nickname: user?.nickname,
            lastName: user?.lastName,
            phone: user?.phone,
            data: { city: user?.data?.city, },
            lastName: user?.lastName,
        },
    });

    const data = useWatch({ control });


    const onEditAccount = useCallback((data) => {
        editAccount(data)
            .then((res) => {
                res && dispatch(setUser(res));
                NotificationManager.success(t('Данные успешно обновлены'));
            })
            .catch((err) => {
                NotificationManager.error(
                    err?.response?.data?.error ?? t('Ошибка при сохранении')
                );
            });
    }, []);
    return (
        <main className='py-4 py-sm-5'>
            <Container>
                <section>
                    <h1 className='inner text-center'>{t('Настройки')}</h1>
                    <Row className='justify-content-center'>
                        <Col xs={12} md={10} lg={9} xl={8} xxl={7}>
                            <form action="" className='box bg-1 mb-4' onSubmit={handleSubmit(onEditAccount)}>
                                <h3 className='mb-4'>{t('Персональные данные')}</h3>

                                <Row xs={1} sm={2} className='g-4 mb-4'>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Фамилия')}</div>
                                        <input type="text" placeholder={t('Фамилия')} defaultValue={data?.firstName} onChange={(e) => { setValue("firstName", e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Имя')}</div>
                                        <input type="text" placeholder={t('Имя')} defaultValue={data?.nickname} onChange={(e) => { setValue("nickname", e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Отчество')}</div>
                                        <input type="text" placeholder={t('Отчество')} defaultValue={data?.lastName} onChange={(e) => { setValue("lastName", e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <label className='mt-sm-4'>
                                            <input type="checkbox" />
                                            <span className='ms-2'>{t('Показывать отчество')}</span>
                                        </label>
                                        <label className='mt-3'>
                                            <input type="checkbox" />
                                            <span className='ms-2'>{t('Сократить фамилию до первой буквы')}</span>
                                        </label>
                                    </Col>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Город')}</div>
                                        <City defaultValue={data?.data?.city} setCity={(e) => setValue("data.city", e)} city={data?.data?.city} />
                                    </Col>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Телефон')}</div>
                                        <input type="tel" placeholder={t('Телефон')} defaultValue={data?.phone} onChange={(e) => { setValue("phone", e.target.value) }} />
                                    </Col>
                                </Row>

                                <div className='fs-09 mb-1'>{t('Время для связи')}</div>
                                <Row xs={1} sm={2} className='mb-4'>
                                    <Col>
                                        <Select
                                            name="start"
                                            placeholder={t('С')}
                                            classNamePrefix="simple-select"
                                            className="simple-select-container w-100"
                                            options={timeList}
                                            isClearable={true}
                                            isSearchable={true}
                                        />
                                    </Col>
                                    <Col className='mt-3 mt-sm-0'>
                                        <Select
                                            name="end"
                                            placeholder={t('До')}
                                            classNamePrefix="simple-select"
                                            className="simple-select-container w-100"
                                            options={timeList}
                                            isClearable={true}
                                            isSearchable={true}
                                        />
                                    </Col>
                                </Row>
                                <Row xs={1} sm={2} className='mb-4'>
                                    <Col>
                                        <div className='mb-1'>{t('Адрес электронной почты')}</div>
                                    </Col>
                                    <Col className='mt-3 mt-sm-0'>
                                        <div className='mb-1'>{user?.email}</div>
                                    </Col>
                                </Row>
                                {/* <div className='fs-09 mb-1'>Адрес электронной почты</div>
                                <input type="email" placeholder='email' className='mb-4' /> */}

                                <label className='fs-09 mb-4'>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Даю свое согласие на использование моих персональных данных')}</span>
                                </label>

                                <button type='button' className='btn-1 w-xs-100'>{t('Сохранить')}</button>
                            </form>

                            <form action="" className='box form-about-info mb-4'>
                                <h3 className='mb-4'>{t('Письма и уведомления')}</h3>
                                <fieldset>
                                    <legend className='mini'>{t('О том, что вас выбрали исполнителем или предложили заказ')}</legend>
                                    <ul className='list-unstyled'>
                                        <li className='mb-3'>
                                            <label>
                                                <input type="checkbox" />
                                                <span className='ms-2'>{t('По электронной')}</span>
                                            </label>
                                        </li>
                                        <li className='mb-3'>
                                            <label>
                                                <input type="checkbox" />
                                                <span className='ms-2'>{t('почте SMS и мобильные уведомления')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>
                                <fieldset>
                                    <legend className='mini'>{t('О новых заказах в ваших категориях')}</legend>
                                    <ul className='list-unstyled'>
                                        <li className='mb-3'>
                                            <label>
                                                <input type="checkbox" />
                                                <span className='ms-2'>{t('По электронной почте')}</span>
                                            </label>
                                        </li>
                                        <li className='mb-3'>
                                            <label>
                                                <input type="checkbox" />
                                                <span className='ms-2'>{t('Мобильные уведомления')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <Select
                                                name="start"
                                                placeholder={t('Регулярность')}
                                                classNamePrefix="simple-select"
                                                className="simple-select-container w-100"
                                                options={regularityList}
                                                isClearable={true}
                                                isSearchable={true}
                                            />
                                        </li>
                                    </ul>
                                </fieldset>
                                <fieldset>
                                    <legend className='mini'>{t('Другие сервисные уведомления')}</legend>
                                    <ul className='list-unstyled'>
                                        <li className='mb-3'>
                                            <label>
                                                <input type="checkbox" />
                                                <span className='ms-2'>{t('По электронной почте')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" />
                                                <span className='ms-2'>{t('SMS и звонки. Важные, не часто')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>
                                <fieldset>
                                    <legend className='mini'>{t('Когда присылать письма и уведомления')}</legend>
                                    <Row xs={1} sm={2} className='mb-4'>
                                        <Col>
                                            <Select
                                                name="start"
                                                placeholder={t('С')}
                                                classNamePrefix="simple-select"
                                                className="simple-select-container w-100"
                                                options={timeList}
                                                isClearable={true}
                                                isSearchable={true}
                                            />
                                        </Col>
                                        <Col className='mt-3 mt-sm-0'>
                                            <Select
                                                name="end"
                                                placeholder={t('До')}
                                                classNamePrefix="simple-select"
                                                className="simple-select-container w-100"
                                                options={timeList}
                                                isClearable={true}
                                                isSearchable={true}
                                            />
                                        </Col>
                                    </Row>
                                    <label>
                                        <input type="checkbox" />
                                        <span className='ms-2'>{t('Круглосуточно')}</span>
                                    </label>
                                </fieldset>
                                <button type='button' className='btn-1 w-xs-100'>{t('Сохранить')}</button>
                            </form>

                            <form action="" className='box form-about-info mb-4'>
                                <h3 className='mb-4'>{t('Способы связи')}</h3>
                                <h6>{t('Выберите, каким образом заказчики могут с вами связаться')}</h6>
                                <ul className='list-unstyled'>
                                    <li className='mt-3'>
                                        <label>
                                            <input type="checkbox" />
                                            <span className='ms-2'>{t('По телефону')}</span>
                                        </label>
                                    </li>
                                    <li className='mt-3'>
                                        <label>
                                            <input type="checkbox" />
                                            <span className='ms-2'>{t('В чате')}</span>
                                        </label>
                                    </li>
                                    <li className='mt-3'>
                                        <label>
                                            <input type="checkbox" />
                                            <span className='ms-2'>{t('Предложить заказ')}</span>
                                        </label>
                                    </li>
                                </ul>
                                <p className='gray-3 fs-09 mt-4'>{t('Вы можете в любой момент включить или выключить нужные способы связи. Новые настройки вступят в силу в течение нескольких часов.')}</p>
                                <button type='button' className='btn-1 w-xs-100 mt-4'>{t('Сохранить')}</button>
                            </form>

                            <form action="" className='box form-about-info mb-4'>
                                <h3 className='mb-4'>{t('Снять профиль с публикации')}</h3>
                                <fieldset>
                                    <legend className="mini">{t('Временно')}</legend>
                                    <p>{t('Все данные сохранятся, но профиль будет временно скрыт')}</p>
                                    <div className="d-sm-flex mt-3">
                                        <Select
                                            name="start"
                                            placeholder={t('Период')}
                                            classNamePrefix="simple-select"
                                            className="simple-select-container w-xs-100"
                                            options={periodList}
                                            isClearable={true}
                                            isSearchable={true}
                                        />
                                        <button type='button' className='btn-2 py-3 ms-sm-4 w-xs-100 mt-3 mt-sm-0'>{t('Снять с публикации')}</button>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="mini">{t('Навсегда')}</legend>
                                    <p>{t('Ваш аккаунт будет удалён вместе со всеми личными данными.')}</p>
                                    <button type='button' className='btn-2 py-3 mt-4 w-xs-100'>{t('Удалить мой профиль')}</button>
                                </fieldset>
                            </form>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default Settings