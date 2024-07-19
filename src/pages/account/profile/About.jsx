import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import AddInput from '../../../components/utils/AddInput'

import { IoArrowUndoOutline, IoLogoWhatsapp, IoLogoSkype, IoMailOutline, IoLogoYoutube, IoGlobeOutline } from "react-icons/io5"
import { BsTelegram } from "react-icons/bs"
import AddPhoto from '../../../components/utils/AddPhoto'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, useWatch } from 'react-hook-form'
import { editAccount } from '../../../services/account'
import { setUser } from '../../../store/reducers/authSlice'
import { NotificationManager } from 'react-notifications'

const About = () => {
    const { t } = useTranslation();
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
    return (
        <section>
            <h1 className='inner text-center mb-4'>{t('О себе')}</h1>
            <p className='text-center gray-3 mb-4 mb-sm-5'>{t('Расскажите подробно о себе, добавьте ссылки на профили в соц. сетях и мессенджерах, чтобы клиенты смогли получше вас узнать')}</p>

            <form action="" className='form-about-info box' onSubmit={handleSubmit(onEditAccount)}>
                <fieldset>
                    <legend>{t('Общая информация')}</legend>

                    <p>{t('Напишите коротко о ваших сильных сторонах, важных качествах, какие инструменты и технологии используете. Про услуги и опыт напишите в специальных полях.')}</p>
                    <div className='mt-4 mb-3'>{t('О себе')}</div>
                    <textarea rows="6" placeholder={t('Расскажите о себе')} defaultValue={data?.about} onChange={(e) => { setValue("about", e.target.value) }}></textarea>
                    <div className='mt-4 mb-3'>{t('Пол:')}</div>
                    <div className="d-flex align-items-center">
                        <label className="d-flex">
                            <input
                                type="radio"
                                name="sex"
                                value="woman"
                                checked={data?.sex === "woman"}
                                onClick={(e) => setValue("sex", e.target.value)}
                            />
                            <span className="ms-2">{t('Женский')}</span>
                        </label>
                        <label className="d-flex ms-5">
                            <input
                                type="radio"
                                name="sex"
                                value="man"
                                checked={data?.sex === "man"}
                                onClick={(e) => setValue("sex", e.target.value)}
                            />
                            <span className="ms-2">{t('Мужской')}</span>
                        </label>
                    </div>


                    <div className='mt-4 mb-3'>{t('Дата рождения')}</div>
                    <input type="date" defaultValue={data?.birthday} onChange={(e) => { setValue("birthday", e.target.value) }} />

                    <div className='mt-4 mb-3'>{t('Видео о себе')}</div>
                    <Form.Control type="file" multiple accept="video/*" />
                </fieldset>

                <fieldset>
                    <legend>{t('Профильное образование')}</legend>
                    <p className='mb-4'>{t('Подробно опишите ваше образование: вуз, название специальности, тип обучения,например, «РГГУ, маркетинг и технологии, бакалавр» или «УГТУ УПИ, графический дизайн, курсы переподготовки»')}</p>

                    <AddInput />

                    <h5 className='mt-4'>{t('Дипломы, сертификаты, лицензии')}</h5>
                    <p>{t('Приложите фотографии или сканы документов, подтверждающих вашу квалификацию')}</p>
                    <div className="mt-3 d-flex flex-wrap">
                        <AddPhoto name={'img-1'} id={'img1'} className='me-2 mb-2' />
                        <AddPhoto name={'img-2'} id={'img2'} className='me-2 mb-2' />
                        <AddPhoto name={'img-3'} id={'img3'} className='me-2 mb-2' />
                        <AddPhoto name={'img-4'} id={'img4'} className='me-2 mb-2' />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>{t('Профили в других сервисах')}</legend>
                    <p className='mb-4 mb-sm-5'>{t('Скопируйте ссылки на ваши профили в социальных сетях и мессенджеры, вставьте их в соответствующие поля. Это повысит доверие к вашему профилю и ускорит связь с вами.')}</p>
                    <h5>{t('Мессенджеры')}</h5>
                    <ul className='list-unstyled row row-cols-md-2 g-3 g-sm-4 mb-4 mb-sm-5'>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoLogoWhatsapp className='fs-13 color-2' />
                                <span className='ms-1'>WhatsApp</span>
                            </div>
                            <input type="text" placeholder='' defaultValue={data?.data?.WhatsApp} onChange={(e) => { setValue("data.WhatsApp", e.target.value) }} />
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <BsTelegram className='fs-13 blue' />
                                <span className='ms-1'>Telegram</span>
                            </div>
                            <input type="text" placeholder='' defaultValue={data?.data?.Telegram} onChange={(e) => { setValue("data.Telegram", e.target.value) }} />
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoLogoSkype className='fs-13 blue' />
                                <span className='ms-1'>Skype</span>
                            </div>
                            <input type="text" placeholder='' defaultValue={data?.data?.Skype} onChange={(e) => { setValue("data.Skype", e.target.value) }} />
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoMailOutline className='fs-13 color-2' />
                                <span className='ms-1'>{t('Электронная почта для связи')}</span>
                            </div>
                            <input type="text" placeholder='' defaultValue={data?.data?.email} onChange={(e) => { setValue("data.email", e.target.value) }} />
                        </li>
                    </ul>

                    <h5>{t('Другие сервисы')}</h5>
                    <ul className='list-unstyled row row-cols-md-2 g-3 g-sm-4'>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoLogoYoutube className='fs-13 red' />
                                <span className='ms-1'>YouTube</span>
                            </div>
                            <input type="text" placeholder='' defaultValue={data?.data?.YouTube} onChange={(e) => { setValue("data.YouTube", e.target.value) }} />
                        </li>
                        <li>
                            <div className='d-flex align-items-center mb-2'>
                                <IoGlobeOutline className='fs-13 color-5' />
                                <span className='ms-1'>{t('Личный сайт')}</span>
                            </div>
                            <input type="text" placeholder='' defaultValue={data?.data?.website} onChange={(e) => { setValue("data.website", e.target.value) }} />
                        </li>
                    </ul>
                </fieldset>

                <button type='submit' className='btn-3 w-xs-100'>{t('Сохранить')}</button>
            </form>

            <Link to='/account/profile' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2' />
                <span>{t('Вернуться на страницу профиля')}</span>
            </Link>
        </section>
    );
};

export default About;