import React from 'react';
import './app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import QueryForm from "./components/QueryForm";
import Login from "./components/login/Login";
import Hello from "./components/Hello";

function App({authService}) {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={(props) => <QueryForm {...props} />}/>
          <Route path="/login" >
            <Login authService={authService}/>
          </Route>
          <Route path="/hello">
            <Hello/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
