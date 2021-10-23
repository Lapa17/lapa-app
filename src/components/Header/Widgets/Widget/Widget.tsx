import React from 'react';
import s from './Widget.module.css'

type WidgetsType ={
    src: string
}


const Widget = (props: WidgetsType) => {
    return (
        <img src={props.src}/>
        )
}

export default Widget;