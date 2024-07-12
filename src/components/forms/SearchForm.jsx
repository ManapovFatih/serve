import { useTranslation } from 'react-i18next';
import React from 'react';
import { SlMagnifier } from "react-icons/sl";
import { TfiArrowRight } from "react-icons/tfi";

const SearchForm = (props) => {
const {t} = useTranslation();
  return (
    <form action="" className={props.className}>
      <input type="text" placeholder={t('Чем вам помочь?')}/>
      <button type='button' className={props.btnClassName}>
        {
          (props.btnInner === 'var2') ?
          <>
            <span className='d-none d-lg-inline'>{t('Найти')}</span>
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