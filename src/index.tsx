import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './Styles/Global.styled';
import {store} from './redux/State';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <GlobalStyle/>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree);





/*import {rerenderEntireTree} from './render';
import {state} from './redux/State';


rerenderEntireTree(state);*/

