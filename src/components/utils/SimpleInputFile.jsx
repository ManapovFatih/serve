import React from 'react';
import { SlPaperClip } from 'react-icons/sl';

export default function SimpleInputFile({ setImage, media, className, multiple }) {
  const onChange = (e) => {
    setImage(e.target.files)
  }
  return (
    <label className={'input-file ' + className}>
      {multiple ? (
        <input type="file" multiple onChange={(e) => onChange(e)} />
      ) : (
        <input type="file" onChange={(e) => onChange(e)} />
      )}
      <SlPaperClip />
      <div className="ind">{media && media.length > 0 && media.length}</div>
    </label>
  );
}