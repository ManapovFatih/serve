import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowUndoOutline } from "react-icons/io5"
import AddPhoto from '../../../components/utils/AddPhoto'
import { useDispatch, useSelector } from 'react-redux';
import { editAvatar } from "../../../services/account";
import { NotificationManager } from 'react-notifications';
import { setUser } from '../../../store/reducers/authSlice';
import Loader from '../../../components/utils/Loader';
const ProfilePhoto = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false)
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const onUploadAvatar = useCallback(
        (e) => {
            e.preventDefault();
            if (e.target.files.length > 0) {
                setLoading(true)
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append('file', file);
                editAvatar(formData)
                    .then((res) => {
                        setLoading(false);
                        NotificationManager.success(t('Аватар успешно изменен'));
                        res && dispatch(setUser({ ...user, media: res.media }));
                    })
                    .catch(
                        (err) => {
                            err &&
                                NotificationManager.error(
                                    err?.response?.data?.error ?? t('Ошибка при сохранении')
                                )
                            setLoading(false)
                        }
                    );
            }
        },
        [user]
    );
    if (loading) {
        return <Loader />;
    }
    return (
        <section>
            <h1 className='inner text-center mb-4'>{t('Фото')}</h1>
            <p className='text-center gray-3 mb-5'>{t('От фотографии зависит, какое первое впечатление вы произведёте на пользователей сервиса.')}</p>

            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <AddPhoto name={'photo-1'} id={'photo1'} className="big" media={user?.media} onUpload={onUploadAvatar} />
                <div className="flex-1 ms-sm-4 mt-4 mt-sm-0">
                    <h3>{t('Рекомендации')}</h3>
                    <p>{t('Сфотографируйтесь как на паспорт, только с лёгкой улыбкой. Лучше всего — при естественном свете. Хорошая фотография вызовет у людей доверие.')}</p>
                </div>
            </div>

            <Link to='/account/profile' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2' />
                <span>{t('Вернуться на страницу профиля')}</span>
            </Link>
        </section>
    );
};

export default ProfilePhoto