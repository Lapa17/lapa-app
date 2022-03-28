import {v1} from "uuid"
import {NewUsersType} from "../components/Users/Users"

import {UsersStateType, UsersType} from "./store"
import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "redux";
import {ThunkType} from "./redux-store";

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
}

export const usersReducer = (state: UsersStateType = initialUsersState, action: UsersActionType) => {
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
export const follow = (userID: number):FollowACType => ({type: FOLLOW, userID})
export const unFollow = (userID: number):UnFollowACType => ({type: UNFOLLOW, userID} )
export const setUsers = (users: Array<NewUsersType>):SetUsersACType => ({type: SET_USERS, users} )
export const setCurrentPage = (currentPage: number):SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number):SetTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
})
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingACType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number):ToggleIsFollowingProgress =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage: number, pageSize: number):ThunkType => {
    return async (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const getPage = (currentPage: number, pageSize: number):ThunkType => {
    return async (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
    }
}

export const getFollow = (userId: number):ThunkType => {
    return async (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        const data = await usersAPI.setFollow(userId)
            if(data.resultCode === 0){
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
    }
}

export const getUnFollow = (userId: number):ThunkType => {
    return async (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        const data = await usersAPI.setUnFollow(userId)
            if(data.resultCode === 0){
                dispatch(unFollow(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
    }
}