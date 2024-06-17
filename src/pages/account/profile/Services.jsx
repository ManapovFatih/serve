import React, { useCallback, useEffect, useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import { IoAddOutline, IoArrowUndoOutline } from "react-icons/io5"
import { Col } from 'react-bootstrap'
import { useForm, useWatch } from 'react-hook-form'
import { getCategories, getCategoryList } from '../../../services/Home'
import { removeDescendants } from '../../../helpers/all'
import { NotificationManager } from 'react-notifications'
import { useSelector } from 'react-redux'
import { createUserProduct } from '../../../services/product'

const experienceList = [
    { value: '1', label: 'Менее года' },
    { value: '2', label: '1 год' },
    { value: '3', label: '2 года' },
    { value: '4', label: '3 года' },
    { value: '5', label: '4 года' },
    { value: '6', label: '5 лет' },
    { value: '7', label: '6 лет' },
    { value: '8', label: '7 лет' },
    { value: '9', label: '8 лет' },
    { value: '10', label: '9 лет' },
    { value: '11', label: 'Более 10 лет' },
]
const paramsList = [
    { value: '1', label: 'param 1' },
    { value: '2', label: 'param 2' },
    { value: '3', label: 'param 3' },
]
const weekList = [
    { value: '1', label: 'Понедельник' },
    { value: '2', label: 'Вторник' },
    { value: '3', label: 'Среда' },
    { value: '4', label: 'Четверг' },
    { value: '5', label: 'Пятница' },
    { value: '6', label: 'Суббота' },
    { value: '7', label: 'Воскресенье' },
]
const timeList = [
    { value: '1', label: '00:00' },
    { value: '2', label: '00:01' },
    { value: '3', label: '00:02' },
    { value: '4', label: '00:03' },
    { value: '5', label: '00:04' },
    { value: '6', label: '00:05' },
    { value: '7', label: '00:06' },
    { value: '1', label: '00:07' },
    { value: '1', label: '00:08' },
    { value: '1', label: '00:09' },
    { value: '1', label: '00:10' },
    { value: '1', label: '00:11' },
    { value: '1', label: '00:12' },
    { value: '1', label: '00:13' },
    { value: '1', label: '00:14' },
    { value: '1', label: '00:15' },
    { value: '1', label: '00:16' },
    { value: '1', label: '00:17' },
    { value: '1', label: '00:18' },
    { value: '1', label: '00:19' },
    { value: '1', label: '00:20' },
    { value: '1', label: '00:21' },
    { value: '1', label: '00:22' },
    { value: '1', label: '00:23' },
]




const Services = () => {
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
        if (!data.id) {
            return NotificationManager.error(
                "Выберите категорию"
            )
        }
        // if (!id) {
        createUserProduct(data)
            .then(() => {
                NotificationManager.success("Лот создан");
            })
            .catch((error) =>
                NotificationManager.error(
                    typeof error?.response?.data?.error == "string"
                        ? error.response.data.error
                        : "Неизвестная ошибка при отправке"
                )
            );
        // }
        // else {
        //   editUserProduct({
        //     id: data.id,
        //     categoryId: data.categoryId,
        //     region: data.region,
        //     server: data.server,
        //     param: data.param,
        //     option: data.option,
        //     desc: data.desc,
        //     count: data.count,
        //     price: data.price,
        //     status: data.status,
        //     data: {
        //       minCount: data.minCount,
        //       typeCount: data.typeCount
        //     },
        //     protectedData: data.protectedData,
        //   })
        //     .then(() => {
        //       NotificationManager.success("Лот обновлён");
        //       reset();
        //       navigate(-1);
        //     })
        //     .catch(
        //       (err) =>
        //         err &&
        //         NotificationManager.error(
        //           err?.response?.data?.error ?? "Неизвестная ошибка при отправке"
        //         )
        //     );
        // }
    }, []);

    console.log(data)
    return (
        <section>
            <h1 className='inner text-center mb-2'>Услуги</h1>
            <h6 className='gray-3 text-center mb-4 mb-sm-5'>Специальность</h6>

            <div className="box">
                <h3 className='mb-2'>Добавьте услуги</h3>
                <p className='mb-4'>Выберите из предложенных услуг или добавьте свои</p>

                {/* <ul className='servises-list'>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                    <li>
                        <p>Название услуги</p>
                        <button type='button' className='btn-4 fs-09'>
                            <IoAddOutline className='fs-12 me-1'/>
                            <span>Добавить</span>
                        </button>
                    </li>
                </ul> */}
                <ul className="list-unstyled row row-cols-sm-2 g-4">
                    <li>
                        <Select
                            classNamePrefix="simple-select"
                            className="simple-select-container w-100"
                            defaultValue={data?.categoryId}
                            placeholder="Категория"
                            isClearable={true}
                            isSearchable={true}
                            onChange={(e) => {
                                reset({
                                    id: e?.value,
                                    car: e?.data
                                })
                            }}
                            options={categories?.items?.sort((a, b) => a.priority - b.priority).map((item) => ({ value: item.id, data: item, label: item.title }))}
                        />
                    </li>

                    <li>
                        <input type="text" className='text' placeholder='Название' value={data?.title ?? ""} onChange={(e) => setValue("title", e.target.value)} />
                    </li>
                    <li>
                        <input type="number" className='text' placeholder='Цена' value={data?.price ?? ""} onChange={(e) => setValue("price", e.target.value)} />
                    </li>
                </ul>
                {/* <button type='button' className='btn-1 py-3 px-5 mt-4 w-xs-100'>
                    <IoAddOutline className='fs-15 me-1' />
                    <span>Добавить</span>
                </button> */}
            </div>

            <form className="box form-about-info mt-4 mt-sm-5">
                <fieldset>
                    <legend>О специализации</legend>
                    <ul className="list-unstyled row row-cols-sm-2 g-4">
                        {data?.car?.params && data?.car?.params?.length > 0 &&
                            data?.car?.params.map((e) => {
                                return renderSelects(e)

                            })
                        }
                        {/* <li>
                            <div className='mb-1'>Параметр 1</div>
                            <Select
                                name="experience"
                                placeholder="Параметры"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={paramsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li>
                            <div className='mb-1'>Параметр 2</div>
                            <Select
                                name="experience"
                                placeholder="Параметры"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={paramsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li>
                            <div className='mb-1'>Параметр 3</div>
                            <Select
                                name="experience"
                                placeholder="Параметры"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={paramsList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li> */}
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Дни и время работы</legend>
                    <ul className="list-unstyled row g-4">
                        <li className="col-12 col-md-6">
                            <Select
                                name="experience"
                                placeholder="День недели"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={weekList}
                                isMulti
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <Select
                                name="start"
                                placeholder="С"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={timeList}
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                        <li className="col-12 col-sm-6 col-md-3">
                            <Select
                                name="end"
                                placeholder="До"
                                classNamePrefix="simple-select"
                                className="simple-select-container w-100"
                                options={timeList}
                                isClearable={true}
                                isSearchable={true}
                            />
                        </li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Дополнительное описание</legend>
                    <textarea rows="5" placeholder='Описание' value={data?.desc ?? ""} onChange={(e) => setValue("desc", e.target.value)}></textarea>
                </fieldset>
                <button type='submit' className='btn-1 px-5 w-xs-100' onClick={handleSubmit(onSubmit)}>Сохранить</button>
            </form>

            {/* <form className="box form-about-info mt-4 mt-sm-5">
                <h3 className='fw-6 mb-2'>Специальное предложение</h3>
                <p className='mb-4'>Например, скидка или подарок клиенту</p>
                <h6 className='mb-2'>Размер скидки и сроки</h6>
                <ul className="list-unstyled row g-4">
                    <li className='col-12 col-sm-6'>
                        <Select
                            name="discont"
                            placeholder="Скидки"
                            classNamePrefix="simple-select"
                            className="simple-select-container w-100"
                            options={paramsList}
                            isClearable={true}
                            isSearchable={true}
                        />
                    </li>
                    <li className='col-12 col-sm-6'>
                        <Select
                            name="discont"
                            placeholder="Сроки"
                            classNamePrefix="simple-select"
                            className="simple-select-container w-100"
                            options={paramsList}
                            isMulti
                            isClearable={true}
                            isSearchable={true}
                        />
                    </li>
                    <li className='col-12'>
                        <h6 className='mb-2'>Описание</h6>
                        <textarea rows="4" placeholder='В чём заключается ваше спецпредложение и какие у него условия?'></textarea>
                    </li>
                </ul>
                <button type='button' className='btn-1 px-5 mt-4 w-xs-100'>Запустить</button>
            </form> */}

            <form className="box form-about-info mt-4 mt-sm-5">
                <h3 className='fw-6 mb-4'>Как вы оказываете услуги</h3>
                <label>
                    <input type="checkbox" />
                    <span className='ms-2'>Выезжаю в указанные районы</span>
                </label>
                <label className='mt-3 mt-sm-4'>
                    <input type="checkbox" />
                    <span className='ms-2'>Оказываю услуги по адресу</span>
                </label>
                <label className='mt-3 mt-sm-4'>
                    <input type="checkbox" />
                    <span className='ms-2'>Оказываю удалённо услуги этой специализации</span>
                </label>
                <button type='button' className='btn-1 px-5 mt-4 w-xs-100'>Сохранить</button>
            </form>

            <Link to='/account/profile' className='btn-4 mx-auto mt-4 mt-sm-5 w-xs-100'>
                <IoArrowUndoOutline className='fs-13 me-2' />
                <span>Вернуться на страницу профиля</span>
            </Link>
        </section>
    )
}

export default Services