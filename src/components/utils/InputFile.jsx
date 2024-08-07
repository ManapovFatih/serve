import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { SlPaperClip } from "react-icons/sl";

export default function InputFile(props) {
  const [files, setFiles] = useState(0);
  const { t } = useTranslation();

  return (
    <label className={'input-file ' + props.className}>
      {props.multiple ? (
        <input type="file" multiple onChange={(e) => setFiles(e.target.files.length)} />
      ) : (
        <input type="file" onChange={(e) => setFiles(e.target.files.length)} />
      )}
      <SlPaperClip />
      <div className="gray-3 mx-2">{t('Прикрепить файл')}</div>
      <div className="ind">{files > 0 && files}</div>
    </label>
  );
};