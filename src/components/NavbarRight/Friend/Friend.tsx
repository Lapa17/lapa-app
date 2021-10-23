import React from 'react';
import s from './Friend.module.css'

type FriendType ={
  friend:string;
}

const Friend:React.FC<FriendType> = (props) => {
  return <div className={s.item}>
      <a>{props.friend}</a>
      </div>

}

export default Friend;