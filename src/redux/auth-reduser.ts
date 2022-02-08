import { Dispatch } from "redux";
import { usersAPI } from "../api/usersAPI";
import { setCurrentPage, setUsers, toggleIsFetching, UsersActionType } from "./users-reduser";
import { authAPI } from "../api/authAPI";
import { profileAPI } from "../api/profileAPI";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_AUTH_CHANGE = 'SET_AUTH_CHANGE'
const SET_CAPCHA_URL = 'SET_CAPCHA_URL'


export type AuthActionType = AuthDataActionType | UserPhotoActionType | AuthChangeActionType | SetCaptchaUrlActionType

export type AuthDataActionType = {
    type: typeof SET_AUTH_DATA
    data: TypeForAuthData
}

type TypeForAuthData = {
    userId: number
    login: string
    email: string
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

export type SetCaptchaUrlActionType = {
    type: typeof SET_CAPCHA_URL
    value: string
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



export const setAuthData = (userId: number, login: string, email: string): AuthDataActionType => ({ type: SET_AUTH_DATA, data: { userId, login, email } })
export const setUserPhoto = (photos: { large: string, small: string }): UserPhotoActionType => ({ type: SET_USER_PHOTO, photos })
export const setAuthChange = (isAuth: boolean) => ({ type: SET_AUTH_CHANGE, isAuth } as const)
export const setCaptchaUrl = (value:string):SetCaptchaUrlActionType=> ({ type: SET_CAPCHA_URL, value })


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
        case SET_CAPCHA_URL: {
            return {...state, captchaURL: action.value}
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
                dispatch(setAuthData(id, login, email))
                profileAPI.getProfile(id).then(response => {
                    dispatch(setUserPhoto(response.data.photos))

                })
            }
        })
    }
}

export const setAuth = (email: string, password: string, rememberMe:boolean, captcha: boolean) => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.logining({ email, password, rememberMe, captcha }).then(res => {
            if (res.data.data.userId === 21095) {
                dispatch(setAuthChange(true))
            }
            if (res.data.resultCode === 10){
                authAPI.getCaptcha().then(res => {
                    dispatch(setCaptchaUrl(res.url))
                })
            }

        })
    }
}

export const setLogOut = () => {
    return (dispatch: Dispatch<AuthActionType>) => {
        authAPI.setUnlogging().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthChange(false))
            }
        })
    }
}
