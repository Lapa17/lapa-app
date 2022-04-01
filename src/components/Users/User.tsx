import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React from "react";
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { bool } from "yup";
import { Paginator } from '../common/Paginator/Paginator';
import { NewUsersType } from './Users';
import {getFollow, getUnFollow } from '../../redux/users-reducer';
import {useDispatch} from "react-redux";

type UserPropsType = {
    user: NewUsersType
    followInProgress: Array<number>
}


export const User = ({user,followInProgress }: UserPropsType) => {

    const dispatch = useDispatch()

    return (
        <div className={s.wrapper}>
            <div className={s.items}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink>
                {user.followed
                    ? <button disabled={followInProgress.some(id => id === user.id)} onClick={() => {
                        dispatch(getUnFollow(user.id))

                    }}>Unfollow</button>
                    : <button disabled={followInProgress.some(id => id === user.id)} onClick={() => {
                        dispatch(getFollow(user.id))

                    }}>Follow</button>}

            </div>
            <div className={s.info}>
                <div>{user.name}</div>
                <div>{user.status}</div>

            </div>

        </div>)
}