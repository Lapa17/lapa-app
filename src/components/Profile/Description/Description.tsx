import React from 'react';
import { ProfileDescriptionType } from '../../../redux/state';
import s from './Description.module.css'



const ProfileDescription:React.FC<ProfileDescriptionType> = (props) => {
  return <div className={s.item}>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
  </div>
  
}
export default ProfileDescription;