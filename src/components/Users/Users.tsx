import React, {useEffect} from "react";
import Preloader from '../common/Preloader/Preloader';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';
import {
    getCurrentPage, getFollowInProgressData,
    getIsFetchingData,
    getPageSize,
    getTotalUserCounter,
    getUser
} from "../../utilits/selectors/user-selector";
import {useAppSelector} from "../../redux/redux-store";
import {getPage, getUsers} from '../../redux/users-reducer';
import {useDispatch} from "react-redux";
import {Row} from "antd";
import VisibilitySensor from 'react-visibility-sensor'
import useAnalyticsEventTracker from "../../utilits/ga/useAnalyticsEventTracker";


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
    const gaEventTracker = useAnalyticsEventTracker('Pagination visibility')

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [])

    const onPageClick = (currentPage: number) => {
        dispatch(getPage(currentPage, pageSize))
    }

    const paginationVisibleChange = (visible: boolean) => {
        if (visible) {
            gaEventTracker('pagination became visible')
        }
    }

    return (<div>
            {isFetching ? <Preloader/> : null}

            <Row justify={'center'}>
                {users.map(u => <User key={u.id} user={u} followInProgress={followInProgress}/>)}
            </Row>
            <Row justify={'center'}>
                <VisibilitySensor onChange={paginationVisibleChange}>
                <Paginator pageSize={pageSize}
                           totalItemsCounter={totalUserCounter}
                           currentPage={currentPage}
                           onPageClick={onPageClick}/>
                </VisibilitySensor>
                </Row>
        </div>
    )
}

export default Users;