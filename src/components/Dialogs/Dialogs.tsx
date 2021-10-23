import React from 'react'
import { dialogsData, DialogsType, messagesData } from '../..'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = dialogsData.map((dialogs)=><Dialog id={dialogs.id} name={dialogs.name} />)
    const messageElements = messagesData.map((message) => <Message message={message.message} id={message.id}/> )

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