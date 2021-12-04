import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';





axios.defaults.baseURL = 'http://localhost:8000/';
// axios.defaults.headers.commom['Authorization' ] = 'Bearer '+ localStorage.getItem('token');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


