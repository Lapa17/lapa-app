import { Dispatch } from "redux";
import { usersAPI } from "../api/usersAPI";
import { setCurrentPage, setUsers, toggleIsFetching, UsersActionType } from "./users-reduser";
import { authAPI } from "../api/authAPI";
import { profileAPI } from "../api/profileAPI";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_AUTH_CHANGE = 'SET_AUTH_CHANGE'


export type AuthActionType = AuthDataActionType | UserPhotoActionType | AuthChangeActionType

export type AuthDataActionType = {
    type: typeof SET_AUTH_DATA
    data: AuthDataType
}

export type UserPhotoActionType = {
    type: typeof SET_USER_PHOTO
    photos: {
        large: string
        small: string
    }
}

export type AuthChangeActionType = {
    type: typeof SET_AUTH_CHANGE
    isAuth: boolean
}

export type AuthDataType = {
    userId: number
    login: string
    email: string
    isAuth: boolean
    photos: {
        large: string
        small: string
    }
}



export const setAuthData = (userId: number, login: string, email: string) => ({ type: SET_AUTH_DATA, data: { userId, login, email } } as const)
export const setUserPhoto = (photos: { large: string, small: string }) => ({ type: SET_USER_PHOTO, photos } as const)
export const setAuthChange = (isAuth: boolean) => ({ type: SET_AUTH_CHANGE, isAuth } as const)


const initialProfileState = {
    userId: 0,
    login: '',
    email: '',
    isAuth: false,
    photos: {
        large: '',
        small: ''
    }
}

export const authReduser = (state: AuthDataType = initialProfileState, action: AuthActionType) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return { ...state, ...action.data, isAuth: true }
        }
        case SET_USER_PHOTO: {
            return { ...state, photos: { ...action.photos } }

        }
        case SET_AUTH_CHANGE: {
            return { ...state, isAuth: action.isAuth }
        }
        default:
            return state;
    }
}

export const authMe = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                // @ts-ignore
                dispatch(setAuthData(id, login, email))

                profileAPI.getProfile(id).then(response => {
                    dispatch(setUserPhoto(response.data.photos))

                })
            }
        })
    }
}

export const setAuth = (email:string, password:string) => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.logining({ email, password }).then(res => {
            if (res.data.data.userId === 21095) {
                debugger
                // @ts-ignore
                dispatch(setAuthChange(true))
            }

        })
    }
}
