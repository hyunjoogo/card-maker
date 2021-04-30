import React from 'react';
import './app.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import QueryForm from "./components/QueryForm";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/hello">Hello</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={(props) => <QueryForm {...props} />}/>
          <Route path="/hello">
            <Hello />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
