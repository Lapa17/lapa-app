import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Widgets from './Widgets/Widgets';
import {useAppSelector} from "../../redux/redux-store";
import {selectIsAuth, selectLogin, selectSmallPhoto} from "../../utilits/selectors/profile-selector";
import {useDispatch} from "react-redux";
import { setLogOut } from '../../redux/auth-reducer';

export const Header = () => {

    const dispatch = useDispatch()
    const login = useAppSelector(selectLogin)
    const isAuth = useAppSelector(selectIsAuth)
    const smallPhoto = useAppSelector(selectSmallPhoto)

    const logOut = () => {
        dispatch(setLogOut())
    }


    return <header className={s.header}>
        <Logo />
        <Search />
        {isAuth ?
            <div className={s.widgets}>
                {login}
                <Widgets smallPhoto={smallPhoto} />
                <button onClick={logOut}>Log out</button>
            </div>
            : <NavLink to={'/login'}>Login</NavLink>}

    </header>
}
