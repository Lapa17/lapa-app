import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React from "react";
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { bool } from "yup";
import { Paginator } from '../common/Paginator/Paginator';
import { NewUsersType } from './Users';

type UserPropsType = {
    user: NewUsersType
    followInProgress: Array<number>
    getUnFollow:(userId: number) => void
    getFollow:(userId: number) => void
}


export const User = ({user,followInProgress, getUnFollow, getFollow }: UserPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.items}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink>
                {user.followed
                    ? <button disabled={followInProgress.some(id => id === user.id)} onClick={() => {
                        getUnFollow(user.id)

                    }}>Unfollow</button>
                    : <button disabled={followInProgress.some(id => id === user.id)} onClick={() => {
                        getFollow(user.id)

                    }}>Follow</button>}

            </div>
            <div className={s.info}>
                <div>{user.name}</div>
                <div>{user.status}</div>

            </div>

        </div>)
}