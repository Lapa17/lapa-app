import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";
import {setCurrentPage, setUsers, toggleIsFetching, UsersActionType} from "./users-reduser";
import {authAPI} from "../api/authAPI";
import {profileAPI} from "../api/profileAPI";

const SET_LOGIN = 'SET_LOGIN'


export type LoginActionType = {
    type: typeof SET_LOGIN
    data: {
        login: string,
        password: string
    }
}
export type LoginType = {
    data: {
        login: string,
        password: string
    }
}

const initialProfileState = {
    data: {
        login:'',
        password:'',
    }
    
}

export const setLoginData = (data: {login:string, password:string}) => ({ type: SET_LOGIN, data} as const)

export const loginReduser = (state:LoginType  = initialProfileState, action:LoginActionType ) => {
    switch (action.type) {
        case SET_LOGIN: {
            return { ...state, data:action.data}
        }
        default:
            return state;
    }
}


