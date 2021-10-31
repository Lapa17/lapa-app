import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator, PostMessageType } from '../../state'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs: React.FC<PostMessageType> = (props) => {

    const dialogsElements = props.dialogs.map((dialogs) => <Dialog id={dialogs.id} name={dialogs.name} />)
    const messageElements = props.messages.map((message) => <Message message={message.message} id={message.id} />)


    const changeMessageTextareaDataValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        let text = e.currentTarget.value
        // props.textareaChange(text)
        props.dispatch(changeMessageTextareaDataValueActionCreator(text))
      }
    
    let addMessage:MouseEventHandler<HTMLButtonElement> = () => {
        if (props.messagetTextareaData !== '') {
          props.dispatch(addMessageActionCreator())
          props.dispatch(changeMessageTextareaDataValueActionCreator(''))
        }
    
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
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;