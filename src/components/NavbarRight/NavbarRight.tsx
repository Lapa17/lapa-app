import React from 'react';
import { NavbarRightType } from '../../state';
import Friend from './Friend/Friend';
import s from './NavbarRight.module.css'

const NavbarRight:React.FC<NavbarRightType> = (props) => {

  const friendList = props.friends.map((friend)=> <Friend friend={friend.name}/>)

  return <nav className={s.nav}>
      {friendList}
  </nav>
}

export default NavbarRight;