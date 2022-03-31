import React from 'react';
import s from './Logo.module.css'
import logo from '../../../assets/images/lapa-logo.png'

const Logo = () => {
    return (
    <div className={s.logo}>
        <img src={logo} alt="" />
    </div>)
}

export default Logo;