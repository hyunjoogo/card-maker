import React from "react";
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = ({card}) => {
  const {name, company, theme, deptName, email, message, fileName, fileURL} = card
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={`${styles.avatar} ${getStyles(theme)}`} alt="profile photo" src={url}/>
      <div className={`${styles.info} ${getStyles(theme)}`}>
        <h1 className={`${styles.name} ${getStyles(theme)}`}>{name}</h1>
        <p className={`${styles.company} ${getStyles(theme)}`}>{company}</p>
        <p className={`${styles.deptName} ${getStyles(theme)}`}>{deptName}</p>
        <p className={`${styles.email} ${getStyles(theme)}`}>{email}</p>
        <p className={`${styles.message} ${getStyles(theme)}`}>{message}</p>
      </div>
    </li>
  )
};

const getStyles = (theme) => {
  switch (theme) {
    case 'white' :
      return styles.white;
    case 'orange' :
      return styles.orange;
    default :
      throw new Error(`unknown theme ${theme}`);
  }
}

export default Card;
