import React from 'react';
import { WidgetsType } from '../../../../redux/store';
import s from './Widget.module.css'



const Widget = (props: WidgetsType) => {
    return (
        <img src={props.src}/>
        )
}

export default Widget;