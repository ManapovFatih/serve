import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowUndoOutline, IoAddOutline } from "react-icons/io5"
import { FiEdit3 } from "react-icons/fi"
import Adress from '../../../components/utils/Adress';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useWatch } from 'react-hook-form';
import { editAccount } from '../../../services/account';
import { NotificationManager } from 'react-notifications';
import { setUser } from '../../../store/reducers/authSlice';

const Addresses = () => {
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
            <h1 className='inner text-center mb-4'>{t('Адреса')}</h1>

            {/* <div className="box mt-3">
                <div className='d-sm-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>{t('Ваша домашняя точка')}</h4>
                        <p>{t('Чтобы получать заказы поблизости, укажите точный адрес. Другие пользователи его не увидят — им мы покажем примерную область с погрешностью не меньше 300 метров.')}</p>
                    </div>
                    <button type='button' className='btn-4 p-3 mt-3 mt-sm-0 ms-sm-3 w-xs-100'>
                        <IoAddOutline className='fs-13 me-1'/>
                        <span>{t('Добавить')}</span>
                    </button>
                </div>
            </div> */}

            <div className="box mt-3">
                <div className='d-sm-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>{t('Принимаете клиентов у себя?')}</h4>
                        <p>{t('Укажите улицу и дом, где вы готовы принимать клиентов.')}</p>
                        <hr />
                        <Adress defaultValue={data?.data?.address} setCity={(e) => setValue("data.address", e)} city={data?.data?.address} placeholder={'Введите адрес'} />

                    </div>
                    <input
                        type="checkbox"
                        className='switch ms-4'
                        checked={data?.data?.workHomeIn}
                        onClick={(e) => setValue("data.workHomeIn", e.target.value)}
                    />
                </div>
            </div>

            <div className="box mt-3">
                <div className='d-sm-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>{t('Выезжаете на заказы?')}</h4>
                        <p>{t('Укажите город')}</p>
                    </div>
                    <input
                        type="checkbox"
                        className='switch'
                        checked={data?.data?.workHomeOut}
                        onClick={(e) => setValue("data.workHomeOut", e.target.value)}
                    />
                </div>
            </div>

            <div className="box mt-3">
                <div className='d-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>{t('Работаете удалённо?')}</h4>
                    </div>
                    <input
                        type="checkbox"
                        className='switch'
                        checked={data?.data?.workHomeRemote}
                        onClick={(e) => setValue("data.workHomeRemote", e.target.value)}
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <button type='button' className='btn-3 w-xs-100' onClick={handleSubmit(onEditAccount)}>{t('Сохранить')}</button>
            </div>
            <Link to='/account/profile' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2' />
                <span>{t('Вернуться на страницу профиля')}</span>
            </Link>
        </section>
    );
};

export default Addresses;