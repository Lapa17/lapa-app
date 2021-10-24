import React from 'react'
import { DialogsType } from '../../state'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.dialogs.map((dialogs) => <Dialog id={dialogs.id} name={dialogs.name} />)
    const messageElements = props.messages.map((message) => <Message message={message.message} id={message.id} />)

    let textAreaElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {

        let text = textAreaElement.current?.value
        alert(text)
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
                <textarea ref={textAreaElement} ></textarea>
                <button onClick={addPost}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;