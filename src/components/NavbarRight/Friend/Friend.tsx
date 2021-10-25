import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogsDataType } from '../../../state';
import s from './Friend.module.css'



const Friend:React.FC<DialogsDataType> = (props) => {
  return <div className={s.item} key={props.id}>
      <NavLink to={props.name}>{props.name}</NavLink>
      </div>

}

export default Friend;