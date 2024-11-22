import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'
import { IoAdd, IoCloseCircle } from "react-icons/io5"

const AddInput = ({ educations, setEducations }) => {
    const { t } = useTranslation();
    const educationLimit = 5 //the maximum number of inputs for education info

    const addObj = () => {
        if (Number(educations.length) < educationLimit) {
            let i
            if (Number(educations.length) === 0) {
                i = 0
            } else {
                i = Number(educations[educations.length - 1].index) + 1
            }
            const obj = {
                index: i,
                education: ''
            }
            setEducations([...educations, obj])
        } else return
    }

    const delElem = (i) => {
        setEducations(educations.filter((obj) => obj.index !== i))
    }

    const handleInputChange = (index, value) => {
        setEducations(educations.map((obj) => {
            if (obj.index === index) {
                return { ...obj, education: value };
            } else {
                return obj;
            }
        }));
    };

    return (
        <div>
            {
                educations.map((obj) => {
                    if (obj.index === 0) {
                        return <div key={obj.index} className='mb-3'>
                            <div className='mb-2'>{t('Образование')}</div>
                            <input
                                type="text"
                                name={'education' + obj.index}
                                value={obj.education} // Добавили value
                                onChange={(e) => handleInputChange(obj.index, e.target.value)} // Обработка изменений
                                placeholder={t('Образование')}
                            />
                        </div>
                    } else {
                        return <div key={obj.index} className='mb-3'>
                            <div className='mb-2'>{t('Дополнительное образование')}</div>
                            <div className="d-flex">
                                <input
                                    type="text"
                                    name={'education' + obj.index}
                                    value={obj.education} // Добавили value
                                    onChange={(e) => handleInputChange(obj.index, e.target.value)} // Обработка изменений
                                    placeholder={t('Дополнительное образование')}
                                />
                                <button type='button' className='ms-3' onClick={() => delElem(obj.index)}>
                                    <IoCloseCircle className='fs-15 red' />
                                </button>
                            </div>
                        </div>
                    }
                })
            }
            {
                (educations.length === 0)
                    ? <button type='button' className='btn-2' onClick={() => addObj()}>
                        <IoAdd className='fs-15 me-2' />
                        <span>{t('Добавить образование')}</span>
                    </button>
                    : <button type='button' className='btn-2' onClick={() => addObj()}>
                        <IoAdd className='fs-15 me-2' />
                        <span>{t('Добавить ещё образование')}</span>
                    </button>
            }
        </div>
    )
}

export default AddInput