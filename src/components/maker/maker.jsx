import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import {useHistory} from "react-router-dom";
import Editor from "../editer/editor";
import Preview from "../preview/preview";
import {contents} from "../card-contents";

const Maker = ({FileInput, authService}) => {
  const [cards, setCards] = useState(contents);

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

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    })
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview FileInput={FileInput} cards={cards}/>
      </div>
      <Footer/>
    </section>
  )
}

export default Maker;