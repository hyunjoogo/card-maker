import React, {useState} from 'react';
import Habits from "../habits/Habits";

export default() => {
  const [data, setData] = useState({
    habits:[
      {id :1, name:'id1', count:1},
      {id :2, name:'id2', count:2},
    ]
  });

  return (
    <Habits data={data} setData={setData}/>
  )
}