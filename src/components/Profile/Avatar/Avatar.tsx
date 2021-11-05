import React from 'react';
import { AvatarType } from '../../../redux/state';
import s from './Avatar.module.css'



const Avatar:React.FC<AvatarType> = (props) => {
  return <div className={s.avatarWrapper}>
    <img src={props.imgAdress} />
  </div>
}

export default Avatar;