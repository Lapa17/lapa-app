import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { PostMessageType } from '../../redux/store'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs: React.FC<PostMessageType> = ({dialogs, messages, addMessage, textareaChange, messagetTextareaData, ...props}) => {

    const dialogsElements = dialogs.map((dialogs) => <Dialog id={dialogs.id} name={dialogs.name} />)
    const messageElements = messages.map((message) => <Message message={message.message} id={message.id} />)


    const changeMessageTextareaDataValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        
        let text = e.currentTarget.value
        textareaChange(text)
      }
    
    let onaAddMessage:MouseEventHandler<HTMLButtonElement> = () => {
        addMessage()
    
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
                <textarea onChange={changeMessageTextareaDataValue} value={messagetTextareaData}></textarea>
                <button onClick={onaAddMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;