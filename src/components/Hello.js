import { useHistory, useLocation } from "react-router-dom";

import LinearLayout from 'react-linear-layout';
import 'react-linear-layout/react-linear-layout.css';

import './MyLinearLayoutComponent.css';
import { Col, Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const Hello = (props) => {
  let initialTime = 4;
  // const [initialTime, setInit] = useState(4);
  let timer;
  const [sec, setSec] = useState(null);

  useEffect(() => {
    console.log('use : sec', sec);
    console.log('use : init', initialTime);
    console.log(timer);
    if (initialTime === 0) {
      console.log('gogogo');
      return () => clearInterval(timer);
    }
  }, [sec, initialTime]);

  const countDown = () => {
    // setInit(prev => prev - 1);
    initialTime -= 1;
    console.log('countDown / init', initialTime);
    setSec(initialTime);
  };
  const onClick = () => {
    timer = setInterval(countDown, 1000);
  };
  const stop = () => {
    clearInterval(timer);
  };

  return (
    <>
      <div onClick={onClick}>1111</div>
      <div onClick={stop}>dd</div>
    </>
  );
};

export default Hello;
