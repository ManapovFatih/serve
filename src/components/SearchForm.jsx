import React from 'react'
import { TfiArrowRight, TfiSearch } from "react-icons/tfi"


const SearchForm = (props) => {
    return (
        <form action="" className={'form-search type-'+props.btnType+' '+props.className}>
            <input type="text" placeholder='Чем вам помочь?'/>
            <button type='button'>
                {
                    (props.btnType === 0)
                    ? <TfiSearch/>
                    : <TfiArrowRight/>
                }
            </button>
        </form>
    );
};

export default SearchForm;