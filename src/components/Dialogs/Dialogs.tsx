import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsProps, MessagesProps} from '../../index';


type DialogsPropsType={
    dialogs:DialogsProps[]
    messages:MessagesProps[]
}
export const Dialogs = (props:DialogsPropsType) => {

   /* const dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ]*/

    /*const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'No'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},

    ]*/

    const dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesElements = props.messages
        .map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
};


