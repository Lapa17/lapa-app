import React from 'react';
import s from './Friend.module.css'

type FriendType ={
  friend:string;
}

const Friend:React.FC<FriendType> = (props) => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <a>{props.friend}</a>
      </div>
  </nav>
}

export default Friend;