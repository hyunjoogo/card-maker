import React, {useState} from 'react';

export default () => {
  const [startDt, SetStarDt] = useState();
  const [endDt, SetEndDt] = useState();


  return (
    <div>
      <label>시작 일자</label>
      <input type="date" onChange={(e) => e.target.value}/>
      <span>{startDt}</span>
      <label>종료 일자</label>
      <input type="date" onChange={(e) => e.target.value}/>
      <span>{endDt}</span>
    </div>
  )
}