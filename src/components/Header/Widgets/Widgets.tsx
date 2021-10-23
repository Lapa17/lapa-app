import React from 'react';
import Widget from './Widget/Widget';
import s from './Widgets.module.css'

const Widgets = () => {
    return (
        <div className={s.widgets}>
            
            <Widget src={'https://icon-library.com/images/send-message-icon-png/send-message-icon-png-29.jpg'}/>
            <Widget src={'https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-bell-icon-png-image_927119.jpg'}/>
            <Widget src={'http://demo.foxthemes.net/socialitev2.1/assets/images/avatars/avatar-2.jpg'}/>
        </div>
    )
    }
export default Widgets;