import { useTranslation } from 'react-i18next';
import React, { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { MdEuroSymbol } from "react-icons/md";
import { IoClose } from "react-icons/io5";



const InputBudget = () => {
  const { t } = useTranslation();
  const measuresArr = [
    {
      id: 0,
      title: t('за услугу'),
      state: true,
    },
    {
      id: 1,
      title: t('за минуту'),
      state: false,
    },
    {
      id: 2,
      title: t('за час'),
      state: false,
    },
    {
      id: 3,
      title: t('за день'),
      state: false,
    },
    {
      id: 4,
      title: t('за неделю'),
      state: false,
    },
    {
      id: 5,
      title: t('за месяц'),
      state: false,
    },
    {
      id: 6,
      title: t('за метр'),
      state: false,
    },
    {
      id: 7,
      title: t('за м²'),
      state: false,
    },
    {
      id: 8,
      title: t('за м³'),
      state: false,
    },
    {
      id: 9,
      title: t('за км'),
      state: false,
    },
    {
      id: 10,
      title: t('за кг'),
      state: false,
    },
    {
      id: 11,
      title: t('за тонну'),
      state: false,
    },
    {
      id: 12,
      title: t('за урок'),
      state: false,
    },
    {
      id: 13,
      title: t('за штуку'),
      state: false,
    },
    {
      id: 14,
      title: t('за 1000 символов'),
      state: false,
    },
    {
      id: 15,
      title: t('за пог. м'),
      state: false,
    },
  ];
  const [budget, setBudget] = useState(0);
  const [measure, setMeasure] = useState(measuresArr);
  const [showInner, setShowInner] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowInner(false));

  const handleCheck = (curId) => {
    setMeasure(measure.map(item => {
      if (item.id === curId) {
        return { ...item, state: true };
      } else {
        return { ...item, state: false };
      }
    }))
  }

  return (
    <div ref={ref} className='budget'>
      <div className='budget-btn' onClick={() => setShowInner(!showInner)}>
        <MdEuroSymbol className='color-2 fs-12 me-2' />
        {
          (budget > 0)
            ? <span>{t('до')} {budget} € {measure.reduce((res, obj) => obj.state === true ? obj.title : res, '')}</span>
            : <span>{t('Бюджет')}</span>
        }
        {
          (budget > 0) &&
          <button type='button' className='ms-2 red fs-12' onClick={() => setBudget(0)}><IoClose /></button>
        }
      </div>
      {
        (showInner) &&
        <div className='budget-inner'>
          <div className="d-flex align-items-center mb-3">
            <span className='fw-6'>{t('ДО')}</span>
            <input className='flex-1 p-2 mx-2' type="number" placeholder='0' value={budget} onChange={(e) => setBudget(e.target.value)} />
            <MdEuroSymbol className='fs-12' />
          </div>

          <ul className='list-unstyled'>
            {
              measure.map(obj => {
                return <li key={obj.id}>
                  <label>
                    <input type="radio" name='measure' defaultChecked={obj.state} onChange={() => handleCheck(obj.id)} />
                    <span className='ms-2'>{obj.title}</span>
                  </label>
                </li>
              })
            }
          </ul>
        </div>
      }
    </div>
  );
};

export default InputBudget;