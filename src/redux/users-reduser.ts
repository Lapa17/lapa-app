import { v1 } from "uuid"
import { NewUsersType } from "../components/Users/Users"

import { UsersStateType, UsersType} from "./store"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export const followAC = (userID:number) => ({type:FOLLOW, userID} as const)
export const unFollowAC = (userID:number) => ({type:UNFOLLOW, userID} as const)
export const setUsersAC = (users:Array<NewUsersType>) => ({type:SET_USERS, users } as const)
export const setCurrentPageAC = (currentPage:number) => ({type:SET_CURRENT_PAGE, currentPage } as const)
export const setTotalUsersCountAC = (totalCount:number) => ({type:SET_TOTAL_USERS_COUNT, totalCount:totalCount } as const)
export const toggleIsFetchingAC = (isFetching:boolean) => ({type:TOGGLE_IS_FETCHING, isFetching } as const)

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

export type UsersActionType = FollowACType | UnFollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType | ToggleIsFetchingACType

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUserCounter:0,
    currentPage:1,
    isFetching: false

    //   { id: v1(), name: "Pashka", message:'Hi', country: 'Belarus', city:'Minsk', follow: true},
    //   { id: v1(), name: "Leha", message:'Hello', country: 'Belarus', city:'Minsk', follow: true},
    //   { id: v1(), name: "Maks", message:'Bonjur', country: 'Belarus', city:'Minsk', follow: false },
    //   { id: v1(), name: "Vlad", message:'Aloha', country: 'Belarus', city:'Minsk', follow: false }
   
    
  }

const usersReduser = (state:UsersStateType = initialUsersState, action: UsersActionType) => {
    switch (action.type){
        case FOLLOW :{
            debugger
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed:true}: u )}
        }
        case UNFOLLOW :{
            return {...state, users: state.users.map(u => u.id === action.userID ?  {...u, followed:false}: u)}
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUserCounter:action.totalCount}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching:action.isFetching}
        }
        default:
        return state;
    }   
}

export default usersReduser;