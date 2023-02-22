import React, {useState} from 'react';
import { RxCrossCircled, RxMixerHorizontal, RxCross2 } from "react-icons/rx";
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';

const responsesList = [
  {value: '1', label: 'Любые'},
  {value: '3', label: 'Где не больше 5 откликов'},
  {value: '3', label: 'Где не больше 10 откликов'},
  {value: '3', label: 'Где не больше 20 откликов'},
  {value: '2', label: 'Без откликов'},
];
const regularityList = [
  {value: '1', label: 'Как можно быстрее'},
  {value: '2', label: 'Не чаще, чем раз в час'},
  {value: '3', label: 'Не чаще, чем раз в день'},
]
const timeList = [
  {value: '1', label: '00:00'},
  {value: '2', label: '00:01'},
  {value: '3', label: '00:02'},
  {value: '4', label: '00:03'},
  {value: '5', label: '00:04'},
  {value: '6', label: '00:05'},
  {value: '7', label: '00:06'},
  {value: '1', label: '00:07'},
  {value: '1', label: '00:08'},
  {value: '1', label: '00:09'},
  {value: '1', label: '00:10'},
  {value: '1', label: '00:11'},
  {value: '1', label: '00:12'},
  {value: '1', label: '00:13'},
  {value: '1', label: '00:14'},
  {value: '1', label: '00:15'},
  {value: '1', label: '00:16'},
  {value: '1', label: '00:17'},
  {value: '1', label: '00:18'},
  {value: '1', label: '00:19'},
  {value: '1', label: '00:20'},
  {value: '1', label: '00:21'},
  {value: '1', label: '00:22'},
  {value: '1', label: '00:23'},
]

const TaskFilter = () => {
  const [getNotifications, setGetNotifications] = useState(true);
  const [moreNotifications, setMoreNotifications] = useState(false);
  const [showTFilter, setShowTFilter] = useState(false);

  const handleCloseTFilter = () => setShowTFilter(false);
  const handleShowTFilter = () => setShowTFilter(true);

  const handleSwitch = () => {
    setGetNotifications(!getNotifications)
  };

  return (
    <>
      <button type='button' onClick={handleShowTFilter} className='d-lg-none ms-auto mb-4'>
        <RxMixerHorizontal className='fs-20 color-2'/>
      </button>
      <Offcanvas show={showTFilter} onHide={handleCloseTFilter} responsive="lg" placement={'end'}>
        <Offcanvas.Body>
          <button type='button' className='close d-xl-none' onClick={handleCloseTFilter}>
            <RxCross2/>
          </button>
          <form action="" className='task-filter'>
            <fieldset>
              <legend>Уведомления</legend>
              <label>
                <span className='me-2'>Вы получаете уведомления</span>
                <input type="checkbox" className="switch" checked={getNotifications} onChange={() => handleSwitch()}/>
              </label>
              {
                (getNotifications) &&
                <div className='mt-3'>
                  <h6>О новых заказах в ваших категориях</h6>
                  <ul className='mt-2'>
                    <li>
                      <label>
                        <input type="checkbox" defaultChecked={true} />
                        <span className='ms-2'>По электронной почте</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" defaultChecked={true} />
                        <span className='ms-2'>Мобильные уведомления</span>
                      </label>
                    </li>
                    <li>
                      <Select
                        name="responses"
                        placeholder="Частота получения уведомлений"
                        classNamePrefix="simple-select"
                        className="simple-select-container w-100"
                        options={regularityList}
                        defaultValue={regularityList[0]}
                      />
                    </li>
                  </ul>
                </div>
              }
              <button type='button' className='color-1 mt-3' onClick={() => setMoreNotifications(!moreNotifications)}>Все настройки уведомлений</button>
              {
                (moreNotifications) &&
                <div className='mt-3'>
                  <h6 className='mb-2'>О том, что вас выбрали исполнителем или предложили заказ</h6>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className='ms-2'>По электронной </span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className='ms-2'>почте SMS и мобильные уведомления</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className='ms-2'>Автоматический звонок о предложенном заказе</span>
                      </label>
                    </li>
                  </ul>

                  <h6 className='mt-3 mb-2'>Другие сервисные уведомления</h6>
                  <ul>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className='ms-2'>По электронной почте</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" />
                        <span className='ms-2'>SMS и звонки. Важные, не часто</span>
                      </label>
                    </li>
                  </ul>

                  <h6 className='mt-3 mb-2'>Когда присылать письма и уведомления</h6>
                  <Row xs={1} sm={2} className='gx-2 mb-3'>
                    <Col>
                      <Select
                          name="start"
                          placeholder="С"
                          classNamePrefix="simple-select"
                          className="simple-select-container w-100"
                          options={timeList}
                          isClearable={true}
                          isSearchable={true}
                      />
                    </Col>
                    <Col className='mt-3 mt-sm-0'>
                      <Select
                          name="end"
                          placeholder="До"
                          classNamePrefix="simple-select"
                          className="simple-select-container w-100"
                          options={timeList}
                          isClearable={true}
                          isSearchable={true}
                      />
                    </Col>
                  </Row>
                  <label>
                    <input type="checkbox" />
                    <span className='ms-2'>Круглосуточно</span>
                  </label>
                </div>
              }
            </fieldset>
            <fieldset>
              <legend>Показывайте мне заказы</legend>
              <Select
                name="responses"
                placeholder="Количество откликов"
                classNamePrefix="simple-select"
                className="simple-select-container w-100"
                options={responsesList}
                defaultValue={responsesList[2]}
              />
            </fieldset>
            <fieldset>
              <legend>Территория оказания услуги</legend>
              <ul className='list-unstyled'>
                <li>
                  <label>
                    <input type="checkbox" name='territory'/>
                    <span className='ms-2'>У меня</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name='territory'/>
                    <span className='ms-2'>У заказчика</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name='territory'/>
                    <span className='ms-2'>Удалённо</span>
                  </label>
                </li>
              </ul>
              <div className='fw-6 mt-3 mb-1'>Адрес</div>
              <input type="text" placeholder='Адрес'/>
              <ul className="horizontal mt-3">
                <li className="pill">
                  <span>Город</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
                <li className="pill">
                  <span>Город</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
                <li className="pill">
                  <span>Город</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
                <li className="pill">
                  <span>Город</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
                <li className="pill">
                  <span>Город</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
              </ul>
            </fieldset>
            <fieldset>
              <div className="d-flex align-items-center">
                <legend>Категории</legend>
                <button type='button' className='red'>Сбросить</button>
              </div>
              <ul className="horizontal mt-2">
                <li className="pill">
                  <span>Категория</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
                <li className="pill">
                  <span>Категория</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
                <li className="pill">
                  <span>Категория</span>
                  <button type='button'><RxCrossCircled /></button>
                </li>
              </ul>
              <button type='button' className='btn-1 py-3 mt-3'>Категории (3)</button>
            </fieldset>
            <fieldset>
              <label>
                <input type="checkbox" />
                <span className='ms-2'>Заказы после модерации</span>
              </label>
            </fieldset>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TaskFilter;