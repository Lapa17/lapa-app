import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React, {useEffect} from "react";
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { bool } from "yup";
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User';
import {
    getCurrentPage, getFollowInProgressData,
    getIsFetchingData,
    getPageSize,
    getTotalUserCounter,
    getUser
} from "../../utilits/selectors/user-selector";
import {useAppSelector} from "../../redux/redux-store";
import {getPage, getUsers } from '../../redux/users-reducer';
import {useDispatch} from "react-redux";


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


const Users = () => {
        const dispatch = useDispatch()
        const users = useAppSelector(getUser)
        const pageSize = useAppSelector(getPageSize)
        const totalUserCounter = useAppSelector(getTotalUserCounter)
        const currentPage = useAppSelector(getCurrentPage)
        const isFetching = useAppSelector(getIsFetchingData)
        const followInProgress = useAppSelector(getFollowInProgressData)

    useEffect(()=> {
        dispatch(getUsers(currentPage, pageSize))
    }, [])

    const onPageClick = (currentPage: number) => {
        dispatch(getPage(currentPage, pageSize))
    }

    return (<div>
        {isFetching ? <Preloader /> : null}
        <Paginator pageSize={pageSize} totalItemsCounter={totalUserCounter} currentPage={currentPage} onPageClick={onPageClick} />
        {users.map(u => <User key={u.id} user={u} followInProgress={followInProgress} />
        )}
    </div >
    )
}

export default Users;