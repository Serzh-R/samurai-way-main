import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './Styles/Global.styled';
import {addPost, RootStateProps, updateNewPostText} from './redux/State';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state:RootStateProps) => {
    ReactDOM.render(
        <React.StrictMode>
            <GlobalStyle/>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


