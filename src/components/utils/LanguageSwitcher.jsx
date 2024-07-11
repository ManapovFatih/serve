import React, { useState, useRef } from 'react';
import rus from '../../assets/imgs/flags/rus.jpg';
import es from '../../assets/imgs/flags/es.jpg';
import eng from '../../assets/imgs/flags/eng.jpg';
import fr from '../../assets/imgs/flags/fr.jpg';
import de from '../../assets/imgs/flags/de.jpg';
import { IoChevronDownOutline } from "react-icons/io5";
import useOnClickOutside from '../../hooks/useOnClickOutside';
import i18n from 'i18next';

const langsArr = [
  {
    title: 'RU',
    img: rus,
    state: true,
  },
  {
    title: 'ES',
    img: es,
    state: false,
  },
  {
    title: 'EN',
    img: eng,
    state: false,
  },
  {
    title: 'FR',
    img: fr,
    state: false,
  },
  {
    title: 'DE',
    img: de,
    state: false,
  },
];

const LanguageSwitcher = () => {
  const [lang, setLang] = useState(langsArr);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setShowSwitcher(false));

  return (
    <div ref={ref} className={(showSwitcher) ? 'lang-switcher opened' : 'lang-switcher'}>
      <button type='button' onClick={() => setShowSwitcher(!showSwitcher)}>
        <span>{lang.reduce((res, obj) => obj.state === true ? obj.title : res, '')}</span>
        <IoChevronDownOutline />
      </button>
      {
        (showSwitcher) &&
        <ul>
          {
            lang.filter((obj) => obj.state === false).map(el => {
              return <li key={el.title}>
                <button type='button' onClick={() => setLang(lang.map(item => {
                  i18n.changeLanguage(el.title);
                  if (item.title === el.title) {
                    return { ...item, state: true };
                  } else {
                    return { ...item, state: false };
                  }
                }))}>
                  <span>{el.title}</span>
                  <img src={el.img} alt={el.title} />
                </button>
              </li>
            })
          }
        </ul>
      }
    </div>
  );
};

export default LanguageSwitcher;