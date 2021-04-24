import React from 'react';
import './app.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
