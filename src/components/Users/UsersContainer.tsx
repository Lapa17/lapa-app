import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateDataType, UsersType } from "../../redux/store";
import {
    follow, getFollow, getPage, getUnFollow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFollowingProgress,
    unFollow,
} from "../../redux/users-reduser";
import Users, { NewUsersType } from "./Users";
import * as axios from 'axios'
import React from "react";
import {usersAPI} from "../../api/usersAPI";


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
    follow: (userID: number) => void
    unFollow: (userID: number) => void
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
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        //
        // })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageClick = (currentPage: number) => {
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(currentPage)
        // usersAPI.getUsers(currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
        this.props.getPage(currentPage, this.props.pageSize)
    }

    render() {
        return <Users users={this.props.users}
            pageSize={this.props.pageSize}
            totalUserCounter={this.props.totalUserCounter}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            onPageClick={this.onPageClick}
            isFetching={this.props.isFetching}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            followInProgress={this.props.followInProgress}
                      getFollow={this.props.getFollow}
                      getUnFollow={this.props.getUnFollow}

        />
    }
}





let mapStateProps = (state: StateDataType) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUserCounter: state.users.totalUserCounter,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followInProgress: state.users.followInProgress
    }
}

// let mapDispatchProps = (dispatch: Dispatch<UsersActionType>) => {

//     return {
//         follow: (userID: number) => dispatch(followAC(userID)),
//         unFollow: (userID: number) => dispatch(unFollowAC(userID)),
//         setUsers: (users: Array<NewUsersType>) => dispatch(setUsersAC(users)),
//         setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
//         toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching))
//     }


// }


const UsersContainer = connect(mapStateProps,
    {
        follow,
        unFollow,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFollowingProgress,
        getUsers,
        getPage,
        getFollow,
        getUnFollow
    })(UsersClassContainer);

export default UsersContainer;