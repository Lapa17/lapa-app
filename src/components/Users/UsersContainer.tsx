import { connect } from "react-redux";
import { StateDataType } from "../../redux/store";
import {
    getFollow, getPage, getUnFollow, getUsers, isFollowing,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFollowingProgress,

} from "../../redux/users-reducer";
import Users, { NewUsersType } from "./Users";
import React from "react";
import {AppRootStateType} from "../../redux/redux-store";
import {
    getCurrentPage, getFollowInProgressData,
    getIsFetchingData,
    getPageSize,
    getTotalUserCounter,
    getUser
} from "../../utilits/selectors/user-selector";


export interface Items {
    items: Array<NewUsersType>
    totalCount: number
}


export type UsersComponentPropsType = {
    users: Array<NewUsersType>
    pageSize: number
    totalUserCounter: number
    currentPage: number
    isFetching: boolean
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFollowingProgress:(isFetching:boolean, userId:number) => void
    followInProgress: Array<number>
    getUsers: (currentPage: number,pageSize: number) => void
    getPage: (currentPage: number,pageSize: number) => void
    getFollow: (userId: number) => void
    getUnFollow: (userId: number) => void
}


class UsersClassContainer extends React.Component<UsersComponentPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageClick = (currentPage: number) => {
        this.props.getPage(currentPage, this.props.pageSize)
    }

    render() {
        return <Users users={this.props.users}
            pageSize={this.props.pageSize}
            totalUserCounter={this.props.totalUserCounter}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            isFetching={this.props.isFetching}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            followInProgress={this.props.followInProgress}
                      getFollow={this.props.getFollow}
                      getUnFollow={this.props.getUnFollow}

        />
    }
}





let mapStateProps = (state: AppRootStateType) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUserCounter: getTotalUserCounter(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingData(state),
        followInProgress: getFollowInProgressData(state)
    }
}


const UsersContainer = connect(mapStateProps,
    {
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFollowingProgress,
        getUsers,
        getPage,
        getFollow,
        getUnFollow
    })(UsersClassContainer);

export default UsersContainer;