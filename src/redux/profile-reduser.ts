import { v1 } from "uuid"
import { ActionType, PostsDataType } from "./store"


export type ProfileStateType = {
    myPost: string;
    newPost: string;
    posts: Array<PostsDataType>;
    profileTextareaData: string;
    profile: APIProfileType
}

export type APIProfileType = {
    aboutMe: string
    userId: number
    fullName: string
    photos: {
        small: string
        large: string
    }
}

export type UserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: APIProfileType
}
export type AddPostACType = {
    type: typeof ADD_POST
}
export type ProfileTextareaDataACType = {
    type: typeof PROFILE_TEXTAREA_CHANGE
    value: string
}

export type ProfileActionType = UserProfileACType | AddPostACType | ProfileTextareaDataACType

const ADD_POST = 'ADD-POST'
const PROFILE_TEXTAREA_CHANGE = 'PROFILE-TEXAREA-CHANGE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const addPostActionCreator = () => ({ type: ADD_POST } as const)
export const changeProfileTextareaDataValueActionCreator = (value: string) => ({ type: PROFILE_TEXTAREA_CHANGE, value } as const)
export const setUserProfile = (profile: APIProfileType) => ({ type: SET_USER_PROFILE, profile } as const)


const initialProfileState = {
    posts: [
        { id: v1(), postMessage: "Hi, I'm Pavel", likes: 10 },
        { id: v1(), postMessage: "Let's go to learn a React", likes: 9 },
        { id: v1(), postMessage: "Also we need improve our html/css skills", likes: 11 },
        { id: v1(), postMessage: "Then we'll learn Redux", likes: 22 }
    ],
    myPost: 'My posts',
    newPost: 'New post',
    profileTextareaData: '',
    profile: { aboutMe: '', userId: 0, fullName: '', photos: { small: '', large: '' } }
}

const profileReduser = (state: ProfileStateType = initialProfileState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                postMessage: state.profileTextareaData,
                likes: 0
            }
            return { ...state, posts: [...state.posts, newPost], profileTextareaData: '' }
        }
        case PROFILE_TEXTAREA_CHANGE: {
            return { ...state, profileTextareaData: action.value }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }


        default:
            return state;
    }
}

export default profileReduser;