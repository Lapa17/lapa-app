import React from 'react';
import Navigation from './Navigation/Navigation';
import s from './Navigations.module.css'

const Navigations = () => {
  return <nav className={s.nav}>
    <Navigation menu='Profile' link='/profile'/>
    <Navigation menu='Messages' link='/dialogs'/>
    <Navigation menu='News' link='/news'/>
    <Navigation menu='Music' link='/music'/>
    <Navigation menu='Settings' link='/settings'/>
    </nav>
}

export default Navigations;