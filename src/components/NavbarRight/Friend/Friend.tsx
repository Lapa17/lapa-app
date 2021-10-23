import React from 'react';
import { NavLink } from 'react-router-dom';
import { FriendType } from '../../../state';
import s from './Friend.module.css'



const Friend:React.FC<FriendType> = (props) => {
  return <div className={s.item}>
      <NavLink to={props.friend}>{props.friend}</NavLink>
      </div>

}

export default Friend;