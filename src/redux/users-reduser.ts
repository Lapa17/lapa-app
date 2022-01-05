import {v1} from "uuid"
import {NewUsersType} from "../components/Users/Users"

import {UsersStateType, UsersType} from "./store"
import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


//export type FollowActionCreatorType = ReturnType<typeof followActionCreator> + добавляем as const в сам AC
export type FollowACType = {
    type: typeof FOLLOW
    userID: number
}
export type UnFollowACType = {
    type: typeof UNFOLLOW
    userID: number
}
export type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<NewUsersType>
}
export type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}

export type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type ToggleIsFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export type UsersActionType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleIsFollowingProgress

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUserCounter: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []

    //   { id: v1(), name: "Pashka", message:'Hi', country: 'Belarus', city:'Minsk', follow: true},
    //   { id: v1(), name: "Leha", message:'Hello', country: 'Belarus', city:'Minsk', follow: true},
    //   { id: v1(), name: "Maks", message:'Bonjur', country: 'Belarus', city:'Minsk', follow: false },
    //   { id: v1(), name: "Vlad", message:'Aloha', country: 'Belarus', city:'Minsk', follow: false }


}

export const usersReduser = (state: UsersStateType = initialUsersState, action: UsersActionType) => {
    switch (action.type) {
        case FOLLOW : {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        }
        case UNFOLLOW : {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCounter: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}
export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<NewUsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))

        })
    }
}

export const getPage = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const getFollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.setFollow(userId).then(data => {
            if(data.resultCode === 0){
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}

export const getUnFollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.setUnFollow(userId).then(data => {
            if(data.resultCode === 0){
                dispatch(unFollow(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}