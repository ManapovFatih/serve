import React from 'react';

const Order = (props) => {
  return (
    <div className='order box'>
      <div className="d-sm-flex justify-content-between align-items-center">
        <h3 className='color-5'>Название задачи</h3>
        <div className='mb-3 mb-sm-0'>Цена договорная</div>
      </div>
      <ul className="info-1 mb-2">
        <li>Название раздела</li>
        <li>Название подраздела</li>
      </ul>
      <ul className="info-2 fs-09">
        <li>
          {
            (!props.active)
            ? <span className='red'>Снят с публикации</span>
            : <span className='color-2'>Новые отклики: {props.responseCount}</span>
          }
        </li>
        <li>
          <span className='gray-3'>Создан 23.11.2022</span>
        </li>
      </ul>
      <hr />
      <div className="d-sm-flex justify-content-between align-items-center">
        <div>
          <ul className='list-unstyled'>
            <li><strong>Дата выполнения:</strong> по договоренности</li>
            <li className='mt-2'><strong>Место:</strong> Казань</li>
          </ul>
        </div>
        <button type='button' className='btn-4 py-3 mt-2 mt-sm-0 mx-auto mx-sm-0'>Повторить заказ</button>
      </div>
    </div>
  );
};

export default Order;