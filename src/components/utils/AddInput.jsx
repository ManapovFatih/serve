import React, { useState } from 'react'
import { IoAdd, IoCloseCircle } from "react-icons/io5"

const AddInput = () => {
    const [inputs, setInputs] = useState([])
    const educationLimit = 5 //the maximum number of inputs for education info

    const addObj = () => {
        if (Number(inputs.length) < educationLimit) {
            let i
            if (Number(inputs.length) === 0){
                i = 0
            } else {
                i = Number(inputs[inputs.length - 1].index) + 1
            }
            const obj = {
                index: i,
                education: ''
            }
            setInputs([...inputs, obj])
        } else return
    }

    const delElem = (i) => {
        setInputs(inputs.filter((obj) => obj.index !== i))
    }

    return (
        <div>
            {
                inputs.map((obj) => {
                    if(obj.index===0){
                        return <div key={obj.index} className='mb-3'>
                            <div className='mb-2'>Образование</div>
                            <input type="text" name={'education'+obj.index} placeholder='Образование'/>
                        </div>
                    } else {
                        return <div key={obj.index} className='mb-3'>
                            <div className='mb-2'>Дополнительное образование</div>
                            <div className="d-flex">
                                <input type="text" name={'education'+obj.index} placeholder='Дополнительное образование'/>
                                <button type='button' className='ms-3' onClick={() => delElem(obj.index)}>
                                    <IoCloseCircle className='fs-15 red'/>
                                </button>
                            </div>
                        </div>
                    }
                })
            }
            {
                (inputs.length === 0)
                ?  <button type='button' className='btn-2' onClick={()=>addObj()}>
                <IoAdd className='fs-15 me-2'/>
                    <span>Добавить образование</span>
                </button>
                : <button type='button' className='btn-2' onClick={()=>addObj()}>
                <IoAdd className='fs-15 me-2'/>
                    <span>Добавить ещё образование</span>
                </button>
            }
        </div>
    )
}

export default AddInput