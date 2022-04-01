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
        <Header className="site-layout-background" style={{padding: 0}}>
            <Col>
                {isAuth ? <Row>
                        <Col span={10}></Col>
                        <Col span={2}>{login}</Col>
                        <Col span={6}> <Widgets smallPhoto={smallPhoto}/></Col>
                        <Col span={4}><Button onClick={logOut}>Log out</Button></Col>
                    </Row>
                    : <Col span={4}><NavLink to={'/login'}>Login</NavLink></Col>}
            </Col>
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
