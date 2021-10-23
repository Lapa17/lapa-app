import React from 'react';
import Friend from './Friend/Friend';
import s from './NavbarRight.module.css'

const NavbarRight = () => {
  return <nav className={s.nav}>
      <Friend friend='Pavel'/>
      <Friend friend='Maks'/>
      <Friend friend='Artyom'/>
      <Friend friend='Leha'/>
  </nav>
}

export default NavbarRight;