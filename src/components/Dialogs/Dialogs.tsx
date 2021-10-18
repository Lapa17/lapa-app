import React from 'react'
import s from './Dialogs.module.css'

type DialogsType = {
    message:string;
}

const Dialogs:React.FC<DialogsType> = (props) =>{
    return (
        <div>
            It is dialog page
        </div>
    )
}

export default Dialogs;