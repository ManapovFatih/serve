import React from "react";
import { RxUpload } from "react-icons/rx";
import { getImageURL } from "../../helpers/all";
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const AddPhoto = ({ name, id, className, media, onUpload }) => {
  return (
    <div className={"add-photo " + className}>
      <RxUpload />
      <input
        type="file"
        name={(name) ? name : ''}
        id={(id) ? id : ''}
        accept='.png, .jpg, .jpeg'
        onChange={(e) => onUpload(e)}
      />
      {
        media
        && <img src={getImageURL({
          path: media,
          size: "mini",
          type: "user",
        })} alt="preview" />
      }
    </div>
  );
};

export default AddPhoto;