import React from 'react';
import './app.css';
import {BrowserRouter} from "react-router-dom";
import Routers from "./Routers.jsx";


function App({authService}) {

  return (
    <>
      <BrowserRouter>
        <Routers authService={authService}/>
      </BrowserRouter>
    </>
  )
}





export default App;
