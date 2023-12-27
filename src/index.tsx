import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './Styles/Global.styled';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App/>
    </React.StrictMode>,
    // <App />,
  document.getElementById('root')
);