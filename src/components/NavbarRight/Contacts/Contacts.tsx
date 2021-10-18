import React from 'react';
import s from './Contacts.module.css'
import Friends from './Friends/Friends';

const Contacts = () => {
  return (<nav className={s.nav}>
    <Friends />
  </nav>)
}

export default Contacts;