import {NewUsersType} from "../components/Users/Users"

import {UsersStateType} from "./store"
import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "redux";
import {ThunkType} from "./redux-store";

const IS_FOLLOWING = 'lapa-app/users-reducer/IS_FOLLOWING'
const SET_USERS = 'lapa-app/users-reducer/SET_USERS'
const SET_CURRENT_PAGE = 'lapa-app/users-reducer/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'lapa-app/users-reducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'lapa-app/users-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'lapa-app/users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'


//export type FollowActionCreatorType = ReturnType<typeof followActionCreator> + добавляем as const в сам AC

export type FollowACType = ReturnType<typeof isFollowing>
export type SetUsersACType = ReturnType<typeof setUsers>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgress = ReturnType<typeof toggleIsFollowingProgress>

export type UsersActionType =
    FollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleIsFollowingProgress

const initialUsersState = {
    users: [],
    pageSize: 10,
    totalUserCounter: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

export const usersReducer = (state: UsersStateType = initialUsersState, action: UsersActionType) => {
    switch (action.type) {
        case IS_FOLLOWING : {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: action.follow} : u)}
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

export const isFollowing = (userID: number, follow: boolean) => ({type: IS_FOLLOWING, userID, follow} as const)
export const setUsers = (users: Array<NewUsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
} as const)


export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const getPage = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch: Dispatch<UsersActionType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    }
}
const followUnfollow = async (dispatch: Dispatch,
                              userId: number,
                              apiMethod: (id: number) => Promise<any>,
                              follow: boolean) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(isFollowing(userId, follow))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const getFollow = (userId: number): ThunkType => {
    return async (dispatch: Dispatch) => {
        const apiMethod = usersAPI.setFollow.bind(usersAPI)

        await followUnfollow(dispatch, userId, apiMethod, true)
    }
}

export const getUnFollow = (userId: number): ThunkType => {
    return async (dispatch: Dispatch) => {
        const apiMethod = usersAPI.setUnFollow.bind(usersAPI)

        await followUnfollow(dispatch, userId, apiMethod, false)
    }
}