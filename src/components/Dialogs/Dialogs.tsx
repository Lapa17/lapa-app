import React from 'react'
import { DialogsType } from '../..'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.friends.map((dialogs)=><Dialog id={dialogs.id} name={dialogs.name} />)
    const messageElements = props.messages.map((message) => <Message message={message.message} id={message.id}/> )

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