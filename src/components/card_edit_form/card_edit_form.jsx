import React, {useRef, useState} from 'react';
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
  const {id, name, company, theme, deptName, email, message, fileName, fileURL} = card;

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const deptNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const fileRef = useRef();

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName : file.name,
      fileURL: file.url
    })
  }
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({...card, [event.currentTarget.name]: event.currentTarget.value,})

  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        ref={nameRef}/>
      <input
        className={styles.input}
        type="text" name="company"
        value={company}
        onChange={onChange}
        ref={companyRef}/>
      <select
        className={styles.select}
        name="theme" value={theme}
        onChange={onChange}
        ref={themeRef}>
        <option value="white">white</option>
        <option value="orange">orange</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="deptName"
        value={deptName}
        onChange={onChange}
        ref={deptNameRef}/>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        ref={emailRef}/>
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
        ref={messageRef}/>
      <div className={styles.fileInput}
           ref={fileRef}>
        <FileInput name={name} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit}/>
    </form>
  );
};


export default CardEditForm;