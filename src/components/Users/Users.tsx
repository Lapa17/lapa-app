import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React from "react";
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';




type PhotosType = {
    small: string
    large: string
}

export type NewUsersType = {
    id: number;
    name: string;
    photos: PhotosType
    uniqueUrlName: string
    status: string
    followed: boolean
}


type UsersPropsType = {
    users: Array<NewUsersType>
    pageSize: number
    totalUserCounter: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageClick: (currentPage: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCounter / 100 / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        {props.isFetching ? <Preloader /> : null}
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selected : ''} onClick={() => props.onPageClick(p)}>{p}</span>
        })}
        {props.users.map(u => {
            return (<div className={s.wrapper}>
                <div className={s.items}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                    {u.followed
                        ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}

                </div>
                <div className={s.info}>
                    <div>{u.name}</div>
                    <div>{"u.city"}</div>
                    <div>{"u.status"}</div>
                    <div>{"u.country"}</div>

                </div>

            </div>)

        })}
    </div>
    )
}

export default Users;