import React, { useCallback, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NotificationManager } from 'react-notifications';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import City from '../../components/utils/City';
import Input from '../../components/utils/Input';
import { editAccount } from '../../services/account';
import { setUser } from '../../store/reducers/authSlice';
import PhoneInput from 'react-phone-input-2';
import { deleteUser } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { RxCross1 } from 'react-icons/rx';
import { checkAuth, logout } from '../../services/auth';



const Settings = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showShare, setShowShare] = useState(false);
    const [password, setPassword] = useState();


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
            ...user
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
    const handleChangeTime = (e, name) => {
        // Get the raw input value (without mask)
        const rawValue = e.replace(/[^0-9]/g, '');

        // Validate the input:
        if (rawValue.length <= 4) { // Only allow up to 4 digits (HH:MM)
            let hours = +rawValue.substring(0, 2) || "";
            let minutes = +rawValue.substring(2, 4) || "";

            if (hours > 23) {
                hours = 23
            }
            if (minutes > 59) {
                minutes = 59

            }
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            return setValue(`data.${name}`, formattedTime) // Update the state with the validated value
        }
    }
    const onDeleteUser = useCallback(() => {
        deleteUser({ id: parseInt(user.id), password: password })
            .then((res) => {
                NotificationManager.success(t('Аккаунт успешно удален'));
                navigate('/')
                dispatch(logout())

            })
            .catch((err) => {
                NotificationManager.error(
                    err?.response?.data?.error ?? t('Ошибка при удалении')
                );
            });
    }, [user, password]);
    return (
        <main className='py-4 py-sm-5'>
            <Container>
                <section>
                    <h1 className='inner text-center'>{t('Настройки')}</h1>
                    <Row className='justify-content-center'>
                        <Col xs={12} md={10} lg={9} xl={8} xxl={7}>
                            <form action="" className='box bg-1 mb-4'>
                                <h3 className='mb-4'>{t('Персональные данные')}</h3>

                                <Row xs={1} sm={2} className='g-4 mb-4'>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Фамилия')}</div>
                                        <input type="text" placeholder={t('Фамилия')} defaultValue={data?.firstName} onChange={(e) => { setValue("firstName", e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Имя')}</div>
                                        <input type="text" placeholder={t('Имя')} defaultValue={data?.lastName} onChange={(e) => { setValue("lastName", e.target.value) }} />
                                    </Col>
                                    {/* <Col>
                                        <div className='fs-09 mb-1'>{t('Отчество')}</div>
                                        <input type="text" placeholder={t('Отчество')} defaultValue={data?.lastName} onChange={(e) => { setValue("patronymic", e.target.value) }} />
                                    </Col> */}
                                    {/* <Col>
                                        <label className='mt-sm-4'>
                                            <input type="checkbox" />
                                            <span className='ms-2'>{t('Показывать отчество')}</span>
                                        </label>
                                        <label className='mt-3'>
                                            <input type="checkbox" />
                                            <span className='ms-2'>{t('Сократить фамилию до первой буквы')}</span>
                                        </label> 
                                    </Col> */}
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Город')}</div>
                                        <City defaultValue={data?.data?.city} setCity={(e) => setValue("data.city", e)} city={data?.data?.city} />
                                    </Col>
                                    <Col>
                                        <div className='fs-09 mb-1'>{t('Телефон')}</div>
                                        <PhoneInput placeholder={t('Телефон')} className="" value={data?.phone} onChange={(e) => { setValue("phone", e) }} />
                                    </Col>
                                </Row>

                                <div className='fs-09 mb-1'>{t('Время для связи')}</div>
                                <Row xs={1} sm={2} className='mb-4'>
                                    <Col>
                                        <Input
                                            name="start"
                                            placeholder={t('С')}
                                            value={data?.data?.startPhone}
                                            onChange={(e) => { handleChangeTime(e, "startPhone") }}
                                            mask="99:99"

                                        />
                                    </Col>
                                    <Col className='mt-3 mt-sm-0'>
                                        <Input
                                            name="end"
                                            placeholder={t('До')}
                                            value={data?.data?.endPhone}
                                            onChange={(e) => { handleChangeTime(e, "endPhone") }}
                                            mask="99:99"
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
                                    <input
                                        type="checkbox"
                                        checked={data?.data.accept}
                                        onClick={(e) => setValue("data.accept", e.target.value)}
                                    />
                                    <span className='ms-2'>{t('Даю свое согласие на использование моих персональных данных')}</span>
                                </label>

                                <button type='button' className='btn-3 w-xs-100' onClick={handleSubmit(onEditAccount)}>{t('Сохранить')}</button>
                            </form>

                            {/* <form action="" className='box form-about-info mb-4'>
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
                            </form> */}

                            {/* <form action="" className='box form-about-info mb-4'>
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
                            </form> */}

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
                                    <button type='button' className='btn-2 py-3 mt-4 w-xs-100' onClick={setShowShare}>{t('Удалить мой профиль')}</button>
                                </fieldset>
                            </form>
                        </Col>
                    </Row>
                </section>
                <Modal show={showShare} onHide={setShowShare} centered size="md" >
                    <button type='button' onClick={() => setShowShare(false)} className='close'>
                        <RxCross1 />
                    </button>
                    <Modal.Body className='box bg-1 mt-4'>
                        <h3 className='text-center mt-4'>Потвердите удаление аккунта</h3>
                        <Row className='g-2 g-sm-4 align-items-center mt-3'>
                            <Col sm={2}>
                                <div className="text-sm-start mb-2">{t('Пароль')}</div>
                            </Col>
                            <Col sm={10}>
                                <Input
                                    className="mb-2"
                                    autoComplete="check-password"
                                    type="password"
                                    placeholder={t('Введите пароль')}
                                    validation={{
                                        required: t('Введите пароль'),
                                        minLength: {
                                            value: 4,
                                            message:
                                                t('Минимальный пароль должен состоять из 4-ех символов'),
                                        },
                                    }}
                                    onChange={(e) => { setPassword(e) }}
                                />
                            </Col>
                        </Row>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <button type='button' className='btn-2 py-3 mt-4 w-xs-100' onClick={onDeleteUser}>{t('Удалить мой профиль')}</button>
                        </Col>


                    </Modal.Body>
                </Modal>
            </Container>
        </main>
    )
}

export default Settings