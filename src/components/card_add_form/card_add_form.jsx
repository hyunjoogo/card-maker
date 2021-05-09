import React, {useRef} from 'react';
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = ({FileInput, onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const deptNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const fileRef = useRef();

  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const newCard = {
      id : Date.now(),
      name : nameRef.current.value || '',
      company : companyRef.current.value || '',
      theme : themeRef.current.value || '',
      deptName : deptNameRef.current.value || '',
      email : emailRef.current.value || '',
      message : messageRef.current.value || '',
      fileName : '',
      fileURL : '',
    }
    formRef.current.reset();
    onAdd(newCard);
    // console.log(newCard);
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input className={styles.input} type="text" name="name" placeholder="Name" ref={nameRef} />
      <input className={styles.input} type="text" name="company" placeholder="Company" ref={companyRef} />
      <select className={styles.select} name="theme" placeholder="Theme" ref={themeRef}>
        <option value="white">white</option>
        <option value="orange">orange</option>
      </select>
      <input className={styles.input} type="text" name="deptName" placeholder="DeptName" ref={deptNameRef} />
      <input className={styles.input} type="text" name="email" placeholder="Email" ref={emailRef} />
      <textarea className={styles.textarea} name="message" placeholder="Message" ref={messageRef} />
      <div className={styles.fileInput} ref={fileRef}>
        <FileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};


export default CardAddForm;