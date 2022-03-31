import {  getCaptchaUrl } from './login-reducer';
import { Dispatch } from "redux";
import { usersAPI } from "../api/usersAPI";
import { setCurrentPage, setUsers, toggleIsFetching, UsersActionType } from "./users-reducer";
import { authAPI } from "../api/authAPI";
import { profileAPI } from "../api/profileAPI";
import { ThunkType} from "./redux-store";
import { ThunkDispatch } from 'redux-thunk';

const SET_AUTH_DATA = 'lapa-app/auth-reducer/SET_AUTH_DATA'
const SET_USER_PHOTO = 'lapa-app/auth-reducer/SET_USER_PHOTO'
const SET_AUTH_CHANGE = 'lapa-app/auth-reducer/SET_AUTH_CHANGE'
const GET_LOGIN_ERROR = 'lapa-app/auth-reducer/GET_LOGIN_ERROR'


export type AuthActionType = AuthDataActionType | UserPhotoActionType | AuthChangeActionType | LoginErrorDataActionType

export type LoginErrorDataActionType = ReturnType<typeof getLoginError>
export type AuthDataActionType = ReturnType<typeof setAuthData>
export type UserPhotoActionType = ReturnType<typeof setUserPhoto>
export type AuthChangeActionType = ReturnType<typeof setAuthChange>

export type AuthDataType = {
    userId: number
    login: string
    email: string
    isAuth: boolean
    photos: {
        large: string
        small: string
    }
    errorMessage?:string
}



export const setAuthData = (userId: number, login: string, email: string) => ({
    type: SET_AUTH_DATA, data: { userId, login, email } } as const)
export const setUserPhoto = (photos: { large: string, small: string }) => ({ type: SET_USER_PHOTO, photos } as const)
export const setAuthChange = (isAuth: boolean) => ({ type: SET_AUTH_CHANGE, isAuth } as const)
export const getLoginError = (message:string) => ({ type: GET_LOGIN_ERROR, message } as const)


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

export const authReducer = (state: AuthDataType = initialProfileState, action: AuthActionType) => {
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
        case GET_LOGIN_ERROR: {
            return {...state, errorMessage: action.message}
        }
        default:
            return state;
    }
}

export const authMe = ():ThunkType => {
    return async (dispatch: Dispatch<AuthActionType>) => {
            const data = await authAPI.getAuth();
                if (data.resultCode === 0) {
                    const { id, login, email } = data.data
                    dispatch(setAuthData(id, login, email))
                    const response = await profileAPI.getProfile(id)
                        dispatch(setUserPhoto(response.data.photos))
                }
                return data
    }
}

export const setAuth = (email: string, password: string, rememberMe:boolean, captcha?: string):ThunkType => {
    return async (dispatch) => {
       const res = await authAPI.logining({ email, password, rememberMe, captcha})
            if (res.data.data.userId === 21095) {
                dispatch(setAuthChange(true))
            }
            else{
                if(res.data.resultCode === 10){
                    dispatch(getCaptchaUrl())
                }
                dispatch(getLoginError(res.data.messages[0]))
            }
    }
}

export const setLogOut = ():ThunkType => {
    return async (dispatch: Dispatch<AuthActionType>) => {
       const res = await authAPI.setUnlogging()
            if (res.data.resultCode === 0) {
                dispatch(setAuthChange(false))
            }
    }
}
