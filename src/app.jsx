import React from 'react';
import './app.css';
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import QueryForm from "./components/QueryForm";
import Login from "./components/login/Login";
import Hello from "./components/Hello";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Routers from "./Routers";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </>
  )
}





export default App;
