import React from 'react'
import { NavLink } from 'react-router-dom'
import { DialogsDataType} from '../../../state'
import s from './Dialog.module.css'


const Dialog: React.FC<DialogsDataType> = (props) => {


    return (
            <div className={s.dialog + '' + s.active} key={props.id}>
                <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
            </div>
    )
}

export default Dialog;