import React from 'react';
import s from './Header.module.css'
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Widgets from './Widgets/Widgets';

const Header = () => {
    return <header className={s.header}>
        <Logo />
        <Search />
        <Widgets />
    </header>
}

export default Header;