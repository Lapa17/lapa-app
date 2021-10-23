import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'
import {NavigationType} from './../../../../index'



const Navigation: React.FC<NavigationType> = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={props.link} className={s.itemLink}>{props.menu}</NavLink>
    </div>
  )
}

export default Navigation;