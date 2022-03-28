import React from 'react'
import {PostMessageType} from '../../redux/store'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import {MessageForm} from "../Forms/MessageForm";


const Dialogs: React.FC<PostMessageType> = ({ dialogs, messages, addMessage, textareaChange,  ...props }) => {

    const dialogsElements = dialogs.map((dialogs) => <Dialog key={dialogs.id} id={dialogs.id} name={dialogs.name} />)
    const messageElements = messages.map((message) => <Message key={message.id} message={message.message} id={message.id} />)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div className={s.item}>
                <MessageForm addMessage={addMessage}/>
            </div>
        </div>
    )
}


export default Dialogs;