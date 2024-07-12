import { useTranslation } from 'react-i18next';
import React from 'react';
import {Link} from 'react-router-dom';
import { RxDoubleArrowRight } from "react-icons/rx";

const TaskMini = () => {
const {t} = useTranslation();
  return (
    <Link to='' className='task-mini'>
      <div className='text'>
        <h6>{t('Настроить YML для веб-макера и откорректировать сайт Ворд Пресс')}</h6>
        <ul>
          <li>{t('Цена договорная')}</li>
          <li>{t('5 откликов')}</li>
        </ul>
      </div>
      <RxDoubleArrowRight className='ms-3'/>
    </Link>
  );
};

export default TaskMini;