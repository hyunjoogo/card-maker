import React from 'react';
import './app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import QueryForm from "./components/QueryForm";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={(props) => <QueryForm {...props} />}/>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
