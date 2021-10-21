import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message, { MessageType } from './Message/Message'

export type DialogsType = {
    message: string;
    friends: Array<DialogsDataType>
}

export type DialogsDataType = {
    id: number;
    name: string;

}

export type MessagesDataType ={
    id: number;
    name: string;
}

export const dialogsData = [
    { id: 1, name: 'Pashka' },
    { id: 2, name: 'Maks' },
    { id: 3, name: 'Vlados' },
    { id: 4, name: 'Leha' },
    { id: 5, name: 'Dima' }
]

export const messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I am fine' }
]


const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = dialogsData.map((dialogs)=><Dialog id={dialogs.id} name={dialogs.name} />)
    let messageElements = messagesData.map((message) => <Message message={message.message} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;