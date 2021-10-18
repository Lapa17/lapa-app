import React from 'react'
import s from './Settings.module.css'

type SettingsType = {
    message:string;
}

const Settings:React.FC<SettingsType> = (props) =>{
    return (
        <div>
            It is Settings page
        </div>
    )
}

export default Settings;