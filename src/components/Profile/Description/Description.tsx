import React from 'react';
import s from './Description.module.css'




type ProfileDescriptionType = {
  title:string
  description: string
}



const ProfileDescription = (props:ProfileDescriptionType) => {
  return <div className={s.item}>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
  </div>
  
}
export default ProfileDescription;