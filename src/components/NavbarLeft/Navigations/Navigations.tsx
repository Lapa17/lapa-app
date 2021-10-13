import React from 'react';
import Navigation from './Navigation/Navigation';
import s from './Navigations.module.css'

const Navigations = () => {
  return <nav className={s.nav}>
    <Navigation />
  </nav>
}

export default Navigations;