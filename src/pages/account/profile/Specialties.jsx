import { useTranslation } from 'react-i18next';
import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { IoAddOutline, IoArrowUndoOutline } from "react-icons/io5"


const Specialties = () => {
    const { t } = useTranslation();
    const optionsList = [
        { value: '1', label: t('Аренда') },
        { value: '2', label: t('Артисты') },
        { value: '3', label: t('Дизайнеры') },
        { value: '4', label: t('Красота') },
        { value: '5', label: t('Организация мероприятий') },
        { value: '6', label: t('Охрана и детективы') },
        { value: '7', label: t('Перевозки и курьеры') },
        { value: '8', label: t('Ремонт авто') },
        { value: '9', label: t('Ремонт и строительство') },
        { value: '10', label: t('Ремонт и установка техники') },
        { value: '11', label: t('Репетиторы и обучение') },
        { value: '12', label: t('Творчество, рукоделие и хобби') },
        { value: '13', label: t('Тренеры') },
        { value: '14', label: t('Услуги для животных') },
        { value: '15', label: t('Фото, видео, аудио') },
        { value: '16', label: t('Хозяйство и уборка') },
        { value: '17', label: t('Юристы') },
        { value: '18', label: t('Разное') },
    ]

    return (
        <section>
            <h1 className='inner text-center mb-3'>{t('Специальности')}</h1>
            <p className='text-center gray-3 mb-4 mb-sm-5'>{t('Специальности — это категории услуг, которые вы оказываете. В каждой из них мы предустановили наборы популярных услуг, вам останется проставить им цены.')}</p>

            <div className="box">
                <form action="">
                    <fieldset>
                        <legend className='mb-3'>{t('Компьютеры и IT')}</legend>
                        <ul className="list-unstyled row row-cols-sm-2 row-cols-md-3 g-4">
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Администрирование')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Администрирование 1С')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Заправка картриджей')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Компьютерная помощь')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Настройка Битрикс')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Настройка серверов')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка СRM и ERP')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка игр')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка мобильных приложений')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка на 1C')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка на С++')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка на Java')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка на Python')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка навыков Алисы')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка программ')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка сайтов')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Разработка систем автоматизации электронного документооборота')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Регистрация доменов')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Сайты под ключ')}</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span className='ms-2'>{t('Другое')}</span>
                                </label>
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset className='mt-5'>
                        <legend className='mb-3'>{t('Добавьте специальности')}</legend>
                        <div className="d-sm-flex">
                            <Select
                                name="sort"
                                placeholder={t('Специальности')}
                                classNamePrefix="simple-select"
                                className="simple-select-container w-xs-100"
                                options={optionsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                            <button type='button' className='btn-4 p-3 ms-sm-4 mt-3 mt-sm-0 w-xs-100'>
                                <IoAddOutline className='fs-13 me-1' />
                                <span>{t('Добавить')}</span>
                            </button>
                        </div>
                    </fieldset>

                    <button type='submit' className='btn-1 mt-4 mt-sm-5 py-3 px-5 w-xs-100'>{t('Сохранить')}</button>
                </form>
            </div>

            <Link to='/account/profile' className='btn-4 mx-auto mt-4'>
                <IoArrowUndoOutline className='fs-13 me-2' />
                <span>{t('Вернуться на страницу профиля')}</span>
            </Link>
        </section>
    )
}

export default Specialties