import { v1 } from "uuid"
import { UsersStateType, UsersType} from "./store"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const followAC = (userID:string) => ({type:FOLLOW, userID} as const)
export const unFollowAC = (userID:string) => ({type:UNFOLLOW, userID} as const)
export const setUsersAC = (users:Array<UsersType>) => ({type:SET_USERS, users } as const)

//export type FollowActionCreatorType = ReturnType<typeof followActionCreator> + добавляем as const в сам AC
export type FollowACType = {
    type: typeof FOLLOW
    userID: string
}
export type UnFollowACType = {
    type: typeof UNFOLLOW
    userID: string
}
export type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export type UsersActionType = FollowACType | UnFollowACType | SetUsersACType

const initialUsersState = {
    users: [
    //   { id: v1(), name: "Pashka", message:'Hi', country: 'Belarus', city:'Minsk', follow: true},
    //   { id: v1(), name: "Leha", message:'Hello', country: 'Belarus', city:'Minsk', follow: true},
    //   { id: v1(), name: "Maks", message:'Bonjur', country: 'Belarus', city:'Minsk', follow: false },
    //   { id: v1(), name: "Vlad", message:'Aloha', country: 'Belarus', city:'Minsk', follow: false }
    ]
    
  }

const usersReduser = (state:UsersStateType = initialUsersState, action: UsersActionType) => {
    switch (action.type){
        case FOLLOW :{
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, follow:true}: u )}
        }
        case UNFOLLOW :{
            return {...state, users: state.users.map(u => u.id === action.userID ?  {...u, follow:false}: u)}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
        return state;
    }   
}

export default usersReduser;