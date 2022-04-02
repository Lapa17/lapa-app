import React from 'react';
import Widget from './Widget/Widget';
import s from './Widgets.module.css'


type WidgetsPropsType = {
    smallPhoto: string
}

const Widgets = (props:WidgetsPropsType) => {
    return (
        <div className={s.widgets}>
             <Widget src={props.smallPhoto}/> 
        </div>
    )
    }
export default Widgets;