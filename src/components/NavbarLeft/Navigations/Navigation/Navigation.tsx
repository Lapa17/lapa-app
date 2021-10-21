import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

type NavigationType ={
  menu: string;
  link: string;
}

const Navigation: React.FC<NavigationType> = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={props.link}>{props.menu}</NavLink>
    </div>
  )
}

export default Navigation;