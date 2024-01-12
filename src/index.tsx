import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './Styles/Global.styled';

export type DialogsProps = {
    id: number;
    name: string;
};
export const dialogs: DialogsProps[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
];

export type MessagesProps = {
    id: number
    message: string
}
export const messages: MessagesProps[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'No'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},

]

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    // <App />,
    document.getElementById('root')
);