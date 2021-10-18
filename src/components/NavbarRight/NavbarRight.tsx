import React from 'react';
import Contacts from './Contacts/Contacts';
import s from './NavbarRight.module.css'

const NavbarRight = () => {
  return <nav className={s.nav}>
    <Contacts />
  </nav>
}

export default NavbarRight;