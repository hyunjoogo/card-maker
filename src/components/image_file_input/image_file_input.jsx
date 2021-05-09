import React, {useRef} from "react";
import styles from './image_file_input.module.css'

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click()
  }

  const onChange = event => {
    console.log(event.target.files[0]);
    imageUploader.upload(event.target.files[0]).then(console.log);
  }
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}/>
      <button className={styles.button}
              onClick={onButtonClick}>
        {name || "No files"}
      </button>
    </div>

  )
};

export default ImageFileInput;