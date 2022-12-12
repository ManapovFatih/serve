import React from 'react'
import { TfiArrowRight } from "react-icons/tfi"

const SearchForm2 = (props) => {
    return (
        <form action="" className={'form-search-2 ' + props.className}>
            <input type="text" placeholder='Чем вам помочь?'/>
            <button type='button'>
                <TfiArrowRight/>
            </button>
        </form>
    );
};

export default SearchForm2;