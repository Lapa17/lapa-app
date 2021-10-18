import React from 'react'
import s from './Music.module.css'

type MusicType = {
    message:string;
}

const Music:React.FC<MusicType> = (props) =>{
    return (
        <div>
            It is Music page
        </div>
    )
}

export default Music;