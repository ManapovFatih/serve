import React from 'react'
import {Link} from 'react-router-dom'
import { IoArrowUndoOutline, IoAddOutline } from "react-icons/io5"
import { FiEdit3 } from "react-icons/fi"

const Addresses = () => {
    return (
        <section>
            <h1 className='inner text-center mb-4'>Адреса</h1>
            <p className='text-center gray-3 mb-5'>Ищем заказы рядом и чаще показываем ваш профиль заказчикам в этих районах.</p>

            <div className="box mt-3">
                <div className='d-sm-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>Ваша домашняя точка</h4>
                        <p>Чтобы получать заказы поблизости, укажите точный адрес. Другие пользователи его не увидят — им мы покажем примерную область с погрешностью не меньше 300 метров.</p>
                    </div>
                    <button type='button' className='btn-4 p-3 mt-3 mt-sm-0 ms-sm-3 w-xs-100'>
                        <IoAddOutline className='fs-13 me-1'/>
                        <span>Добавить</span>
                    </button>
                </div>
            </div>

            <div className="box mt-3">
                <div className='d-sm-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>Принимаете клиентов у себя?</h4>
                        <p>Укажите улицу и дом, где вы готовы принимать клиентов.</p>
                    </div>
                    <button type='button' className='btn-4 p-3 mt-3 mt-sm-0 ms-sm-3 w-xs-100'>
                        <IoAddOutline className='fs-13 me-1'/>
                        <span>Добавить</span>
                    </button>
                </div>
                <hr />
                <div className="d-flex">
                    <div className='flex-1'>
                        <p>Казань, улица Юлиуса Фучика, 78</p>
                        <p className='gray-3 mt-2'>Россия, Республика Татарстан</p>
                    </div>
                    <button type='button'>
                        <FiEdit3 className='fs-15 gray-3'/>
                    </button>
                </div>
            </div>

            <div className="box mt-3">
                <div className='d-sm-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>Выезжаете на заказы?</h4>
                        <p>Укажите область, город или район, куда вы готовы приехать.</p>
                    </div>
                    <button type='button' className='btn-4 p-3 mt-3 mt-sm-0 ms-sm-3 w-xs-100'>
                        <IoAddOutline className='fs-13 me-1'/>
                        <span>Добавить</span>
                    </button>
                </div>
            </div>

            <div className="box mt-3">
                <div className='d-flex align-items-center'>
                    <div className="flex-1">
                        <h4 className='mb-2'>Работаете удалённо?</h4>
                        <p>Зайдите в настройки ваших услуг и подтвердите, что работаете удалённо. Тогда вы сможете получать заказы из других городов.</p>
                    </div>
                </div>
            </div>

            <Link to='/account/profile' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2'/>
                <span>Вернуться на страницу профиля</span>
            </Link>
        </section>
    );
};

export default Addresses;