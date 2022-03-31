
import { Dispatch } from "redux"
import { authAPI } from "../api/authAPI"
import { ThunkType } from "./redux-store"

const SET_LOGIN = 'lapa-app/login-reducer/SET_LOGIN'
const SET_CAPTCHA = 'lapa-app/login-reducer/SET_CAPTCHA'


export type LoginDataActionType = ReturnType<typeof setLoginData>
export type CaptchaActionType = ReturnType<typeof setCaptchaUrl>

export type LoginActionType = LoginDataActionType | CaptchaActionType

export type LoginType = {
    data: {
        login: string,
        password: string
    }
    captchaUrl: string
}

const initialProfileState = {
    data: {
        login:'',
        password:'',
    },
    captchaUrl:''
    
}

export const setLoginData = (data: {login:string, password:string}) => ({ type: SET_LOGIN, data} as const)
export const setCaptchaUrl = (captchaUrl: string) => ({ type: SET_CAPTCHA, captchaUrl} as const)

export const loginReducer = (state:LoginType  = initialProfileState, action:LoginActionType ) => {
    switch (action.type) {
        case SET_LOGIN: {
            return { ...state, data:action.data}
        }
        case SET_CAPTCHA:{
            return {...state,captchaUrl: action.captchaUrl}
        }
        default:
            return state;
    }
}

export const getCaptchaUrl = ():ThunkType => {
    return async (dispatch: Dispatch) => {
       const res = await authAPI.getCaptcha()
            if (res.data.url) {
                dispatch(setCaptchaUrl(res.data.url))
            }
           
    }
}

