import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React from "react";
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { bool } from "yup";
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';




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
    onPageClick: (currentPage: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followInProgress: Array<number>
    getFollow: (userId: number) => void
    getUnFollow: (userId: number) => void
}

const Users = ({ users,
    pageSize,
    totalUserCounter,
    currentPage,
    isFetching,
    onPageClick,
    toggleIsFollowingProgress,
    followInProgress,
    getFollow,
    getUnFollow,
}: UsersPropsType) => {

    return (<div>
        {isFetching ? <Preloader /> : null}
        <Paginator pageSize={pageSize} totalUserCounter={totalUserCounter} currentPage={currentPage} onPageClick={onPageClick} />
        {users.map(u => <User key={u.id} user={u} followInProgress={followInProgress} getFollow={getFollow} getUnFollow={getUnFollow} />
        )}
    </div>
    )
}

export default Users;