import React from 'react';
import { SlMagnifier } from "react-icons/sl";
import { TfiArrowRight } from "react-icons/tfi";

const SearchForm = (props) => {
  return (
    <form action="" className={props.className}>
      <input type="text" placeholder='Чем вам помочь?'/>
      <button type='button' className={props.btnClassName}>
        {
          (props.btnInner === 'var2') ?
          <>
            <span className='d-none d-lg-inline'>Найти</span>
            <TfiArrowRight className='d-lg-none'/>
          </>
          : (props.btnInner === 'var3') ?
          <TfiArrowRight/>
          : <SlMagnifier/>
        }
      </button>
    </form>
  );
};

export default SearchForm;