import React from 'react';
import {Link} from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";

const TaskMini = () => {
  return (
    <Link to='' className='task-mini'>
      <div className='text'>
        <h6>Настроить YML для веб-макера и откорректировать сайт Ворд Пресс</h6>
        <ul>
          <li>Цена договорная</li>
          <li>5 откликов</li>
        </ul>
      </div>
      <RxDoubleArrowRight/>
    </Link>
  );
};

export default TaskMini;