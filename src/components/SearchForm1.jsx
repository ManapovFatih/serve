import React from 'react'
import { TfiSearch } from "react-icons/tfi"


const SearchForm1 = (props) => {


    return (
        <form action="" className={'form-search-1 ' + props.className}>
            <input type="text" placeholder='Чем вам помочь?'/>
            <button type='button'>
                <TfiSearch/>
            </button>
        </form>
    );
};

export default SearchForm1;