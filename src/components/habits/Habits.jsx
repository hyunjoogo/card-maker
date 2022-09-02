import React, {useState} from 'react';

export default ({data, setData}) => {
  const reset = () => {
    const habits = data.habits.map((habit) => {
      console.log(habit);
      habit.count = 0;
      return habit;
    })
    setData(habits)
  }

  return (
    <>
      <h1> 취미 추가하기</h1>
      <span>data here</span>

      <button onClick={() => reset()}> +</button>
    </>
  )
}