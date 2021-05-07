import React from 'react';
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({card}) => {
  const {name, company, theme, deptName, email, message, fileName, fileURL} = card;
  const onSubmit = () => {

  };
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name}/>
      <input className={styles.input} type="text" name="company" value={company}/>
      <select className={styles.select} name="theme" value={theme}>
        <option value="white">white</option>
        <option value="orange">orange</option>
      </select>
      <input className={styles.input} type="text" name="deptName" value={deptName}/>
      <input className={styles.input} type="text" name="email" value={email}/>
      <textarea className={styles.textarea} name="message" value={message}/>
      <div className={styles.fileInput}>
        <ImageFileInput/>
      </div>
        <Button name="Delete" onClick={onSubmit}/>
    </form>
  );
};


export default CardEditForm;