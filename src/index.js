import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import 'normalize.css';
import AuthService from "./service/auth_service";


const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);

