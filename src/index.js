import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

import './Css/Home.css'
import './Css/Weather.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


