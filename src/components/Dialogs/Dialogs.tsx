import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsType, DialogsPageProps} from '../../redux/State';
import {Button} from '../../elements/Button/Button';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';


type DialogsPropsType={
    state: DialogsPageProps
    dispatch: (action: ActionsType) => void
}
export const Dialogs = (props:DialogsPropsType) => {

    const dialogsElements =
        props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElements =
        props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const newMessageBody = props.state.newMessageBody


    const onSendMessageClick = () => {
        // Передайте необходимые аргументы (id и message) в sendMessageAC
        const id = 7; // Примерный id, который вы используете в dispatch
        props.dispatch(sendMessageAC(id, newMessageBody)); // Передаем id и новое сообщение
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'Enter new message'}></textarea>
                    </div>
                    <div>
                        <Button onClick={onSendMessageClick} name={'Send'}/>
                    </div>
                </div>
            </div>

        </div>
    );
};


