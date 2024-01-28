import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageProps} from '../../redux/State';


type DialogsPropsType={
    state: DialogsPageProps
}
export const Dialogs = (props:DialogsPropsType) => {

    const dialogsElements =
        props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElements =
        props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

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

