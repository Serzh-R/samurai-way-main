import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './Styles/Global.styled';
import {state} from './redux/State';


ReactDOM.render(
    <React.StrictMode>
            <GlobalStyle/>
            <App state={state}/>
    </React.StrictMode>,
    // <App />,
    document.getElementById('root')
);