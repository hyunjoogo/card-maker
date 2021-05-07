import React from 'react';
import styles from "./footer.module.css";

const footer = () => {
  return (
    <div className={`${styles.footer} ${styles.white} `}>
      <span className={styles.text}>Code your dream</span>
    </div>
  )
}

export default footer;