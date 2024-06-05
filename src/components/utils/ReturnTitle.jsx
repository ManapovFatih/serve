import React from 'react';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const ReturnTitle = (props) => {
  return (
    <div className="return-title">
      <Link to={props.link} className='return-icon me-2 me-sm-4'>
        <SlArrowLeftCircle />
      </Link>
      <h1 className='h2 mb-0'>{props.title}</h1>
    </div>
  );
};

export default ReturnTitle;