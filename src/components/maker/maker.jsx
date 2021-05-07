import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useHistory} from "react-router-dom";
import Editor from "../editer/editor";
import Preview from "../preview/preview";
import {contents} from "../card-contents";

const Maker = ({authService}) => {
  const [cards, setCards] = useState(contents);
  const [mode, setMode] = useState(false);

  const history = useHistory()
  const onLogout = () => {
    authService.logout();
  }
  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    })
  })
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} mode={mode}/>
      <div className={styles.container}>
        <Editor cards={cards}/>
        <Preview cards={cards}/>
      </div>
      <Footer/>
    </section>
  )
}

export default Maker;