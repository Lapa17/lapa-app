import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateDataType, UsersType } from "../../redux/store";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow, UsersActionType } from "../../redux/users-reduser";
import Users, { NewUsersType } from "./Users";
import * as axios from 'axios'
import React from "react";


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
    setUsers: (users: Array<NewUsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}





class UsersClassContainer extends React.Component<UsersComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.default.get<Items>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials:true
        }).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }
    onPageClick = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.default.get<Items>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
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
        />
    }
}





let mapStateProps = (state: StateDataType) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUserCounter: state.users.totalUserCounter,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
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
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    })(UsersClassContainer);

export default UsersContainer;