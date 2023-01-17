import React from 'react'
import {Link} from 'react-router-dom'
import { IoArrowUndoOutline } from "react-icons/io5"

const Promotion = () => {
    return (
        <section>
            <h1 className='inner text-center mb-4'>Продвижение</h1>

            <div className="box">
                <h5>Компьютеры и IT</h5>
            </div>

            <Link to='/account' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2'/>
                <span>Вернуться на страницу профиля</span>
            </Link>
        </section>
    )
}

export default Promotion