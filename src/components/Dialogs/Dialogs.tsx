import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator } from '../../redux/dialogs-reduser'
import { PostMessageType } from '../../redux/store'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs: React.FC<PostMessageType> = (props) => {

    const dialogsElements = props.dialogs.map((dialogs) => <Dialog id={dialogs.id} name={dialogs.name} />)
    const messageElements = props.messages.map((message) => <Message message={message.message} id={message.id} />)


    const changeMessageTextareaDataValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        let text = e.currentTarget.value
        props.textareaChange(text)
      }
    
    let onaAddMessage:MouseEventHandler<HTMLButtonElement> = () => {
        props.addMessage()
    
      }
    


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div className={s.item}>
                <textarea onChange={changeMessageTextareaDataValue} value={props.messagetTextareaData}></textarea>
                <button onClick={onaAddMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;