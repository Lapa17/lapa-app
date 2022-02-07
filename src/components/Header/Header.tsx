import React from 'react';
import { NavLink } from 'react-router-dom';
import { authAPI } from '../../api/authAPI';
import s from './Header.module.css'
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Widgets from './Widgets/Widgets';


type HeaderPropsType = {
    children?: React.ReactNode
    login: string
    isAuth: boolean
    smallPhoto: string
    setLogOut: ()=> void
}

const Header = ({setLogOut, ...props}: HeaderPropsType) => {

    const logOut = () => {
        setLogOut()
    }


    return <header className={s.header}>
        <Logo />
        <Search />
        {props.isAuth ?
            <div className={s.widgets}>
                {props.login}
                <Widgets smallPhoto={props.smallPhoto} />
                <button onClick={logOut}>Log out</button>
            </div>
            : <NavLink to={'/login'}>Login</NavLink>}

    </header>
}

export default Header;