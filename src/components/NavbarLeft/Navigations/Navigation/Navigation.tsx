import React from 'react';
import s from './Navigation.module.css'

type NavigationType ={
  menu: string;
  link: string;
}

const Navigation: React.FC<NavigationType> = (props) => {
  return (
    <div className={s.item}>
      <a href={props.link}>{props.menu}</a>
    </div>
  )
}

export default Navigation;