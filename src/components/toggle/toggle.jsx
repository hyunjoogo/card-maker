import React from 'react';
import styles from './toggle.module.css';

const Toggle = () => {

  const checkedValue = (value) => {

  }

  const changeValue =()=>{

  }

  return (
    <div className={styles.box}>
      <input className={styles.input}
             type="checkbox"
             value={false}
             name="toggle"
             onClick={e=>console.log(e.target.checked)}
             />
      <span className={styles.span}></span>
    </div>
  )
}

export default Toggle;