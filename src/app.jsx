import React from 'react';
import './app.module.css';
import {BrowserRouter} from "react-router-dom";
import Routers from "./Routers.jsx";
import styles from './app.module.css'


function App({FileInput, authService}) {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routers FileInput={FileInput} authService={authService} />
      </BrowserRouter>
    </div>
  )
}





export default App;
