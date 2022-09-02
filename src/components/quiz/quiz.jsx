import React from 'react';
import styles from "./quiz.module.css";

const Quiz = () => {
  return (
    <>
      <div className={styles.titleBox}>
        <p className={styles.title1}>퀴즈를 맞춰 탄소중립
          <span className={styles.point}>100%</span>
          를 달성해보세요.</p>
        <p className={styles.title2}>탄소제로퀴즈</p>
      </div>

      <div>
        퀴즈는 총 5개 문항입니다.
      </div>

      <div>made by Kiu</div>
    </>
  )
}

export default Quiz