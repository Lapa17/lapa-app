import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import {MessageForm} from "../Forms/MessageForm";
import {useAppSelector} from "../../redux/redux-store";
import {selectDialogs, selectMessages} from "../../utilits/selectors/dialogs-selector";
import {selectIsAuth} from "../../utilits/selectors/profile-selector";
import {Redirect} from "react-router-dom";


const Dialogs = () => {

    const isAuth = useAppSelector(selectIsAuth)
    const dialogs = useAppSelector(selectDialogs)
    const messages = useAppSelector(selectMessages)

    const dialogsElements = dialogs.map((dialogs) => <Dialog key={dialogs.id} id={dialogs.id} name={dialogs.name} />)
    const messageElements = messages.map((message) => <Message key={message.id} message={message.message} id={message.id} />)

    if (!isAuth) {
        return <Redirect to={'/login'}/>
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
                <MessageForm />
            </div>
        </div>
    )
}


export default Dialogs;