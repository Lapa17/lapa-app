import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend/Friend'

const Friends = () => {
  return <nav className={s.nav}>
    <Friend friend='Pavel'/>
    <Friend friend='Maks'/>
    <Friend friend='Artyom'/>
    <Friend friend='Leha'/>
  
  </nav>
}

export default Friends;