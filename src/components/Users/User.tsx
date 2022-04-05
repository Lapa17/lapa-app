import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React from "react";
import Preloader from '../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import {bool} from "yup";
import {Paginator} from '../common/Paginator/Paginator';
import {NewUsersType} from './Users';
import {getFollow, getUnFollow} from '../../redux/users-reducer';
import {useDispatch} from "react-redux";
import {Button, Card, Col} from "antd";

type UserPropsType = {
    user: NewUsersType
    followInProgress: Array<number>
}


export const User = ({user, followInProgress}: UserPropsType) => {

    const dispatch = useDispatch()

    return (

            <Col xs={{ span: 23, offset: 1 }}
                 md={{ span: 23, offset: 1 }}
                 lg={{ span: 12, offset: 1 }}
                 xl={{ span: 12, offset: 1 }}>
                <Card style={{boxShadow:'rgb(0 0 0 / 50%) 5px 5px 10px -5px', marginBottom:10}}>
                <div className={s.wrapper}>
                    <div className={s.items}>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.img} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                        {user.followed
                            ? <Button disabled={followInProgress.some(id => id === user.id)} onClick={() => {
                                dispatch(getUnFollow(user.id))
                            }} style={{marginTop:10}}>Unfollow</Button>
                            : <Button disabled={followInProgress.some(id => id === user.id)} onClick={() => {
                                dispatch(getFollow(user.id))
                            }}
                                      style={{marginTop:10}}>Follow</Button>}

                    </div>
                    <div className={s.info}>
                        <h2>{user.name}</h2>
                        <div>{user.status}</div>

                    </div>

                </div>
                </Card>
            </Col>
        )
}