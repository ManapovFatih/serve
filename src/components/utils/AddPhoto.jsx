import React, { useEffect, useState } from "react";
import { RxUpload } from "react-icons/rx";
const imageMimeType = /image\/(png|jpg|jpeg)/i;

const AddPhoto = (props) => {
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const changeHandler = (e) => {
      const file = e.target.files[0];
      if (!file.type.match(imageMimeType)) {
          alert("Image mime type is not valid");
          return;
      }
      setFile(file);
    }

    useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result && !isCancel) {
            setFileDataURL(result)
          }
        }
        fileReader.readAsDataURL(file);
      }
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      }
    }, [file]);
    
    return (
      <div className={"add-photo "+props.className}>
        <RxUpload/>
        <input 
          type="file" 
          name={(props.name) ? props.name : ''} 
          id={(props.id) ? props.id : ''} 
          accept='.png, .jpg, .jpeg' 
          onChange={changeHandler}
        />
        {
          fileDataURL 
          && <img src={fileDataURL} alt="preview"/>
        }
      </div>
    );
};

export default AddPhoto;