import { v1 } from "uuid"
import { ActionType, PostsDataType } from "./store"
import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";
import {toggleIsFollowingProgress, unFollow, UsersActionType} from "./users-reduser";
import {profileAPI} from "../api/profileAPI";


export type ProfileStateType = {
    myPost: string;
    newPost: string;
    posts: Array<PostsDataType>;
    profile: APIProfileType
    status:string
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
export type UserStatusACType = {
    type: typeof SET_STATUS
    status: string
}
export type AddPostACType = {
    type: typeof ADD_POST
    post:string
}

export type UpdatePhotoACType = {
    type: typeof UPDATE_PHOTO
    photo:string
}



export type ProfileActionType = UserProfileACType | AddPostACType | UserStatusACType | UpdatePhotoACType

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_PHOTO = 'UPDATE_PHOTO'

export const addPostAC = (post:string):AddPostACType => ({ type: ADD_POST, post })
export const setUserProfile = (profile: APIProfileType) => ({ type: SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({ type: SET_STATUS, status } as const)
export const updatePhoto = (photo: string):UpdatePhotoACType=> ({ type: UPDATE_PHOTO, photo } )


const initialProfileState = {
    posts: [
        { id: v1(), postMessage: "Hi, I'm Pavel", likes: 10 },
        { id: v1(), postMessage: "Let's go to learn a React", likes: 9 },
        { id: v1(), postMessage: "Also we need improve our html/css skills", likes: 11 },
        { id: v1(), postMessage: "Then we'll learn Redux", likes: 22 }
    ],
    myPost: 'My posts',
    newPost: 'New post',
    profile: { aboutMe: '', userId: 0, fullName: '', photos: { small: '', large: '' }
    },
    status:'',
}

export const profileReduser = (state: ProfileStateType = initialProfileState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                postMessage: action.post,
                likes: 0
            }
            return { ...state, posts: [...state.posts, newPost]}
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status  }
        }
        case UPDATE_PHOTO: {
            debugger
            return {...state, profile: {photos:{large: action.photo}}}
        }
        default:
            return state;
    }
}

export const getProfile = (profileUserId: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.getProfile(profileUserId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (profileUserId: string) => {

    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.getProfileStatus(profileUserId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status: string) => {

    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
           
        })
    }
}

export const updateLargePhoto = (photo: string) => {

    return (dispatch: Dispatch<ProfileActionType>) => {
        profileAPI.updatePhoto(photo).then(response => {
            debugger
            if (response.data.resultCode === 0){
                dispatch(updatePhoto(photo))
            }

        })
    }
}

export const addPost = (post: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
                dispatch(addPostAC(post))
    }
}
