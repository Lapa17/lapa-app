import React from 'react';
import Widget from './Widget/Widget';
import s from './Widgets.module.css'

const Widgets = () => {
    return (
        <div className={s.widgets}>
            <Widget />
        </div>
    )
    }
export default Widgets;