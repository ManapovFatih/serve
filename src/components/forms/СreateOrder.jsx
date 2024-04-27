import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RxCross1 } from "react-icons/rx";
import Select from 'react-select';
import InputFile from '../../components/utils/InputFile';
import { SlPhone } from "react-icons/sl";
import InputBudget from '../utils/InputBudget';
import Limitation from '../utils/Limitation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const locationList = [
  { value: '1', label: 'У меня' },
  { value: '2', label: 'У исполнителя' },
  { value: '3', label: 'Удаленно' },
]
const townList = [
  { value: '1', label: 'Казань' },
  { value: '2', label: 'Москва' },
  { value: '3', label: 'Санкт-Петербург' },
]
const List = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
]

const СreateOrder = (props) => {
  const [showСreateOrder, setShowСreateOrder] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const status = useSelector((state) => state?.auth.user.status);
  const navigate = useNavigate();
  const handleCloseСreateOrder = () => setShowСreateOrder(false);
  const handleShowСreateOrder = () => { isAuth ? status ? setShowСreateOrder(true) : navigate("/activate") : navigate("/login") };

  return (
    <>
      <button type='button' className={props.btnClassName} onClick={handleShowСreateOrder}>Создать заказ</button>

      <Modal centered size="lg" show={showСreateOrder} onHide={handleCloseСreateOrder}>
        <button type='button' onClick={handleCloseСreateOrder} className='close'>
          <RxCross1 />
        </button>
        <Modal.Body>
          <form action="" className='create-order-form'>
            <h3>Что нужно сделать?</h3>
            <input type="text" placeholder='Короткое название задачи' className='mb-3' />
            <textarea placeholder="Расскажите подробнее о задаче" rows="5" className='mb-3'></textarea>
            <ul className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 mb-3'>
              <li>
                <Select
                  name="location"
                  placeholder="Выберите категорию"
                  classNamePrefix="simple-select"
                  className="simple-select-container borderless w-100"
                  options={List}
                />
              </li>
              <li>
                <Select
                  name="location"
                  placeholder=""
                  classNamePrefix="simple-select"
                  className="simple-select-container borderless w-100"
                  options={locationList}
                  defaultValue={locationList[2]}
                />
              </li>
              <li>
                <Select
                  name="town"
                  placeholder="Город"
                  classNamePrefix="simple-select"
                  className="simple-select-container borderless w-100"
                  options={townList}
                  defaultValue={townList[0]}
                  isSearchable={true}
                  isClearable={true}
                />
              </li>
              <li>
                <InputBudget />
              </li>
              <li>
                <Limitation />
              </li>
              <li>
                <InputFile className={'w-100'} />
              </li>
            </ul>
            <hr />
            <div className="d-flex align-items-center">
              <div className='flex-1'>
                <a href="tel:+79093125182" className='d-flex align-items-center gray-3'>
                  <SlPhone />
                  <span className='ms-2'>+7 (909) 312 51 82</span>
                </a>
                <p className='gray-2 fs-09 mt-2'>Исполнители не видят ваш номер телефона и не могут звонить вам сами</p>
              </div>
              <input type="checkbox" className='switch' />
            </div>
            <hr />
            <button type='submit' className='btn-1'>Опубликовать</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default СreateOrder;