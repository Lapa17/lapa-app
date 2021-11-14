import { v1 } from "uuid"
import { UsersActionType,UsersStateType, UsersType} from "./store"

const FOLLOW: string = 'FOLLOW'
const UNFOLLOW: string = 'UNFOLLOW'
const SET_USERS: string = 'SET_USERS'

export const followActionCreator = (userID:string) => ({type:FOLLOW, userID})
export const unFollowActionCreator = (userID:string) => ({type:UNFOLLOW, userID})
export const setUsersAC = (users:Array<UsersType>) => ({type:SET_USERS, users })



const initialUsersState = {
    users: [
      { id: v1(), name: "Pashka", message:'Hi', country: 'Belarus', city:'Minsk', follow: true},
      { id: v1(), name: "Leha", message:'Hello', country: 'Belarus', city:'Minsk', follow: true},
      { id: v1(), name: "Maks", message:'Bonjur', country: 'Belarus', city:'Minsk', follow: false },
      { id: v1(), name: "Vlad", message:'Aloha', country: 'Belarus', city:'Minsk', follow: false }
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