import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Widgets from './Widgets/Widgets';
import {useAppSelector} from "../../redux/redux-store";
import {selectIsAuth, selectLogin, selectSmallPhoto} from "../../utilits/selectors/profile-selector";
import {useDispatch} from "react-redux";
import {setLogOut} from '../../redux/auth-reducer';
import {Button, Col, Layout, Row} from "antd";

export const HeaderRC = () => {
    const {Header} = Layout;

    const dispatch = useDispatch()
    const login = useAppSelector(selectLogin)
    const isAuth = useAppSelector(selectIsAuth)
    const smallPhoto = useAppSelector(selectSmallPhoto)

    const logOut = () => {
        dispatch(setLogOut())
    }


    return (
        <Header style={{padding: 0, boxShadow: 'rgb(0 0 0 / 50%) -5px 8px 10px -5px', position:'fixed', right:0, zIndex:20, minWidth:300, textAlign:'center',borderRadius: 10}}>
                {isAuth ? <Row>
                        <Col span={8}>{login}</Col>
                        <Col span={8}> <Widgets smallPhoto={smallPhoto}/></Col>
                        <Col span={8}><Button type='primary' onClick={logOut}>Log out</Button></Col>
                    </Row>
                    : <Col span={24}><NavLink to={'/login'}>Login</NavLink></Col>}

        </Header>
    )


    // <header className={s.header}>
    //     <Logo />
    //     <Search />
    //     {isAuth ?
    //         <div className={s.widgets}>
    //             {login}
    //             <Widgets smallPhoto={smallPhoto} />
    //             <button onClick={logOut}>Log out</button>
    //         </div>
    //         : <NavLink to={'/login'}>Login</NavLink>}
    //
    // </header>
}
