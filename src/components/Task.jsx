import React from 'react';
import { SlBan, SlLocationPin, SlEvent } from "react-icons/sl";

const Task = () => {
  return (
    <div className='task'>
      <div className="top">
        <h4>Доработать форму для сайта на Битрикс</h4>
        <h4 className='ms-2'>1500&nbsp;€</h4>
      </div>
      <ul className="info">
        <li>Поиск исполнителей</li>
        <li className='d-none d-lg-block'>Сайты под ключ</li>
        <li>3 отклика</li>
        <li>7 ч<span className='d-none d-lg-inline'>асов назад</span></li>
      </ul>
      <hr />
      <p className='text'>Сделали верстку, необходимо прикрутить форму к сайту.</p>
      <ul className='work'>
        <li>
          <SlEvent className='fs-13 me-2'/>
          <span>22 февраля</span>
        </li>
        <li className='ms-sm-4'>
          <SlLocationPin className='fs-13 me-2'/>
          <span>Работа выполняется удалённо</span>
        </li>
      </ul>
      <hr />
      <div className='user'>
        <img src="imgs/img2.jpg" alt="img2.jpg" />
        <h5 className='ms-4 mb-0'>Михаил</h5>
      </div>
      <div className='btns'>
        <button type='button' className='btn-1 py-3'>Откликнуться</button>
        <button type='button' className='red'>
          <SlBan className='fs-20'/>
        </button>
      </div>
    </div>
  );
};

export default Task;