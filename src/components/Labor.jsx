import { useTranslation } from 'react-i18next';
import React from 'react'

const Labor = () => {
const {t} = useTranslation();
    return (
        <figure className='labor'>
            <img src="/imgs/img1.jpg" alt={t('Помыть окна')} />
            <figcaption>
                <a href="/" className='btn-2 w-100'>{t('Помыть окна')}</a>
            </figcaption>
        </figure>
    );
};

export default Labor