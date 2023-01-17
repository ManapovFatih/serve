import React from 'react'
import {Link} from 'react-router-dom'
import { IoArrowUndoOutline } from "react-icons/io5"
import AddPhoto from '../../components/utils/AddPhoto'

const ProfilePhoto = () => {
    return (
        <section>
            <h1 className='inner text-center mb-4'>Фото</h1>
            <p className='text-center gray-3 mb-5'>От фотографии зависит, какое первое впечатление вы произведёте на пользователей сервиса.</p>
            
            <div className="d-flex">
                <AddPhoto name={'photo-1'} id={'photo1'} className="big"/>
                <div className="flex-1 ms-4">
                    <h3>Рекомендации</h3>
                    <p>Сфотографируйтесь как на паспорт, только с лёгкой улыбкой. Лучше всего — при естественном свете. Хорошая фотография вызовет у людей доверие.</p>
                </div>
            </div>

            <Link to='/account' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2'/>
                <span>Вернуться на страницу профиля</span>
            </Link>
        </section>
    );
};

export default ProfilePhoto