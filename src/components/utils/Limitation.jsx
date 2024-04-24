import React, { useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { IoCalendarOutline } from "react-icons/io5";
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Limitation = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const initialDays = [];
  const [days, setDays] = React.useState(initialDays);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowCalendar(false));

  const footer =
    days && days.length > 0 ? (
      <p>You selected {days.length} day(s).</p>
    ) : (
      <p>Please pick one or more days.</p>
    );

  return (
    <div ref={ref} className="limitation">
      <div className="limitation-btn" onClick={() => setShowCalendar(!showCalendar)}>
        <IoCalendarOutline className='color-2 fs-12 me-2' />
        <span>Сроки</span>
        {/* <button type="button" className='ms-2 red fs-12'><IoClose/></button> */}
      </div>
      {
        (showCalendar) &&
        <div className='limitation-inner'>
          <DayPicker
            mode="multiple"
            min={1}
            selected={days}
            onSelect={setDays}
            footer={footer}
          />
        </div>
      }
    </div>
  );
};

export default Limitation;