import React from 'react';
import s from './Avatar.module.css'



type AvatarType = {
  imgAdress: string
}


const Avatar = (props:AvatarType) => {
  return <div className={s.avatarWrapper}>
    <img src={props.imgAdress} />
  </div>
}

export default Avatar;