import React from 'react'
import { MessagesDataType } from '../../..';
import s from './Message.module.css'


const Message:React.FC<MessagesDataType> = (props) => {


    return (
            <div className={s.message}>{props.message}</div>

    )
}

export default Message;