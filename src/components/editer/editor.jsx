import React from 'react';
import styles from './editor.module.css';
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({FileInput, cards, addCard, deleteCard, updateCard}) => {
  // Object.keys(obj) – 객체의 키만 담은 배열을 반환합니다.
  // Object.values(obj) – 객체의 값만 담은 배열을 반환합니다.
  // Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환합니다.
  Object.keys(cards); // ["1", "2", "3"] : 키값만 나온다.
  Object.keys(cards).map(key => cards[key]);
  // cards의 구조는 "1" : {???} 이므로
  // cards[key]는 "key"의 value가 나온다.

  return (
    <section className={styles.editor}>
      <h1>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}/>))}
      <CardAddForm FileInput={FileInput} onAdd={addCard}/>
    </section>
  )
};


export default Editor;


