import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react'
import Select from 'react-select'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoAddOutline, IoArrowUndoOutline } from "react-icons/io5"
import { Col } from 'react-bootstrap'
import { useForm, useWatch } from 'react-hook-form'
import { getCategories, getCategoryList } from '../../../services/Home'
import { removeDescendants } from '../../../helpers/all'
import { NotificationManager } from 'react-notifications'
import { useSelector } from 'react-redux'
import { createUserProduct, getProduct, getUserProduct } from '../../../services/product'
import Input from '../../../components/utils/Input';
import { editAd, getAd, getUserAd } from '../../../services/ads';






const EditServices = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const experienceList = [
        { value: '1', label: t('Менее года') },
        { value: '2', label: t('1 год') },
        { value: '3', label: t('2 года') },
        { value: '4', label: t('3 года') },
        { value: '5', label: t('4 года') },
        { value: '6', label: t('5 лет') },
        { value: '7', label: t('6 лет') },
        { value: '8', label: t('7 лет') },
        { value: '9', label: t('8 лет') },
        { value: '10', label: t('9 лет') },
        { value: '11', label: t('Более 10 лет') },
    ]
    const paramsList = [
        { value: '1', label: 'param 1' },
        { value: '2', label: 'param 2' },
        { value: '3', label: 'param 3' },
    ]
    const weekList = [
        { value: '1', label: 'Каждый день' },
        { value: '2', label: 'По будням' },
        { value: '3', label: 'По выходным' },
        { value: '4', label: t('Понедельник') },
        { value: '5', label: t('Вторник') },
        { value: '6', label: t('Среда') },
        { value: '7', label: t('Четверг') },
        { value: '8', label: t('Пятница') },
        { value: '9', label: t('Суббота') },
        { value: '10', label: t('Воскресенье') },
    ]

    const {
        control,
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        setValue,
    } = useForm({
        mode: "onChange",
        reValidateMode: "onSubmit",
    });

    const data = useWatch({ control });
    const [categories, setCategories] = useState({ items: [], loading: true });
    useEffect(() => {
        getCategoryList()
            .then((res) => {
                setCategories((prev) => ({
                    ...prev,
                    items: res,
                    loading: false
                }));
            })
            .catch(() => setCategories((prev) => ({ ...prev, loading: false })));

        getUserAd({ id: serviceId })
            .then((res) => {
                reset({
                    id: serviceId,
                    category: res.category,
                    categoryId: res.categoryId,
                    title: res.title,
                    desc: res.desc,
                    price: res.price,
                    data: res.data,
                })
            })
            .catch((err) => NotificationManager.error(err ?? t('Услуга создана')));

    }, []);
    const onSaveOption = (param, isMulti, parentId) => {
        console.log(param)
        setValue('param', removeDescendants(data, param, isMulti, parentId));
    };

    const renderSelects = (tree) => {
        if (tree.children && tree.children.length > 0) {

            if (tree.children.length == 1 && !data.option.find(e => e.parentId == tree.id)) {
                onSaveOption(tree.children[0])

            }
            // if (tree.children[0].data?.max) {
            //     return tree.children.map(child =>
            //         maxOption(child)
            //     );
            // }
            else {
                const isMulti = true;
                return (
                    <>
                        <li>
                            <div className='mb-1'>{tree.title}</div>
                            <Select
                                name="experience"
                                placeholder={tree.title}
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                defaultValue={data?.param && data.param.find(e => e?.parentId == tree?.id) && data.param.find(e => e?.parentId == tree?.id).id}
                                onChange={(e) => { onSaveOption(e, isMulti, tree.id) }}
                                options={tree?.children?.sort((a, b) => a.priority - b.priority).map((item) => ({ value: item.id, data: item, label: item.title }))}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        {!isMulti && data.param && data.param.find(e => e?.parentId == tree?.id) &&
                            renderSelects(data.param.find(e => e?.parentId == tree?.id))
                        }
                    </>
                );
            }
        }
        return null;
    };

    const onSubmit = useCallback((data) => {
        if (!data.categoryId) {
            return NotificationManager.error(
                t('Выберите категорию')
            )
        }
        editAd(data)
            .then(() => {
                navigate(-1);
                NotificationManager.success(t('Услуга отредактирована'));
            })
            .catch((error) =>
                NotificationManager.error(
                    typeof error?.response?.data?.error == "string"
                        ? error.response.data.error
                        : t('Неизвестная ошибка при отправке')
                )
            );

    }, []);
    const handleChangeTime = (e, name) => {
        // Get the raw input value (without mask)
        const rawValue = e.replace(/[^0-9]/g, '');

        // Validate the input:
        if (rawValue.length <= 4) { // Only allow up to 4 digits (HH:MM)
            let hours = +rawValue.substring(0, 2) || "";
            let minutes = +rawValue.substring(2, 4) || "";

            if (hours > 23) {
                hours = 23
            }
            if (minutes > 59) {
                minutes = 59

            }
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            return setValue(`${name}`, formattedTime) // Update the state with the validated value
        }
    }

    console.log(data)
    console.log(categories)
    return (
        <section>
            <h1 className='inner text-center mb-2'>{t('Услуги')}</h1>
            <h6 className='gray-3 text-center mb-4 mb-sm-5'>{t('Специальность')}</h6>

            <div className="box">
                <h3 className='mb-2'>{t('Добавьте услуги')}</h3>
                <p className='mb-4'>{t('Выберите из предложенных услуг или добавьте свои')}</p>


                <ul className="list-unstyled row row-cols-sm-2 g-4">
                    <li>
                        <Select
                            name="category"
                            classNamePrefix="simple-select"
                            className="simple-select-container w-100"
                            value={categories?.items?.map((item) => ({ value: item.id, data: item, label: item.title })).find(option => option.value === data?.categoryId)}
                            placeholder={t('Категория')}
                            isClearable={true}
                            isSearchable={true}
                            onChange={(e) => {
                                reset({
                                    ...data,
                                    categoryId: e?.value,
                                    category: e?.data
                                })
                            }}
                            options={categories?.items?.map((item) => ({ value: item.id, data: item, label: item.title }))}
                        />

                    </li>

                    <li>
                        <input type="text" className='text' placeholder={t('Название')} value={data?.title ?? ""} onChange={(e) => setValue("title", e.target.value)} />
                    </li>
                    <li>
                        <input type="number" className='text' placeholder={t('Цена')} value={data?.price ?? ""} onChange={(e) => setValue("price", e.target.value)} />
                    </li>
                </ul>

            </div>

            <form className="box form-about-info mt-4 mt-sm-5">
                {data?.category?.params && data?.category?.params?.length > 0 &&
                    <fieldset>
                        <legend>{t('О специализации')}</legend>
                        <ul className="list-unstyled row row-cols-sm-2 g-4">
                            {data?.category?.params.map((e) => {
                                return renderSelects(e)

                            })}

                        </ul>
                    </fieldset>
                }
                <fieldset>
                    <legend>{t('Дни и время работы')}</legend>
                    <ul className="list-unstyled row g-4">
                        <li className="col-12 col-md-6">
                            <Select
                                name="experience"
                                placeholder={t('День недели')}
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={weekList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                                value={data?.data?.workDays}
                                onChange={(e) => { setValue("data.workDays", e) }}
                            />
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <Input
                                name="start"
                                placeholder={t('С')}
                                value={data?.data?.startWork}
                                onChange={(e) => { handleChangeTime(e, "data.startWork") }}
                                mask="99:99"

                            />
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <Input
                                name="end"
                                placeholder={t('До')}
                                value={data?.data?.endWork}
                                onChange={(e) => { handleChangeTime(e, "data.endWork") }}
                                mask="99:99"

                            />
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>{t('Дополнительное описание')}</legend>
                    <textarea rows="5" placeholder={t('Описание')} value={data?.desc ?? ""} onChange={(e) => setValue("desc", e.target.value)}></textarea>
                </fieldset>
                <button type='submit' className='btn-1 px-5 w-xs-100' onClick={handleSubmit(onSubmit)}>{t('Сохранить')}</button>
            </form>



            <Link to='/account/profile' className='btn-4 mx-auto mt-4 mt-sm-5 w-xs-100'>
                <IoArrowUndoOutline className='fs-13 me-2' />
                <span>{t('Вернуться на страницу профиля')}</span>
            </Link>
        </section>
    )
}

export default EditServices