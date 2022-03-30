import { v1 } from "uuid"
import { PostsDataType } from "./store"
import {Dispatch} from "redux";
import {profileAPI, UpdateProfileType} from "../api/profileAPI";
import {ThunkType} from "./redux-store";


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
    contacts:{
        facebook?: string
        github?: string
        instagram?: string
        mainLink?: string
        twitter?: string
        vk?: string
        website?: string
        youtube?: string
    }
    photos: {
        small: string
        large: string
    }
}

export type UserProfileACType = ReturnType<typeof setUserProfile>
export type UserStatusACType = ReturnType<typeof setStatus>
export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePhotoACType = ReturnType<typeof updatePhoto>
export type DeletePostACType = ReturnType<typeof deletePostAC>

export type ProfileActionType = UserProfileACType | AddPostACType | UserStatusACType | UpdatePhotoACType | DeletePostACType

const ADD_POST = 'lapa-app/profile-reducer/ADD-POST'
const DELETE_POST = 'lapa-app/profile-reducer/DELETE-POST'
const SET_USER_PROFILE = 'lapa-app/profile-reducer/SET_USER_PROFILE'
const SET_STATUS = 'lapa-app/profile-reducer/SET_STATUS'
const UPDATE_PHOTO = 'lapa-app/profile-reducer/UPDATE_PHOTO'

export const addPostAC = (post:string) => ({ type: ADD_POST, post } as const)
export const deletePostAC = (postId:string) => ({ type: DELETE_POST, postId } as const)
export const setUserProfile = (profile: APIProfileType) => ({ type: SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({ type: SET_STATUS, status } as const)
export const updatePhoto = (photo: File)=> ({ type: UPDATE_PHOTO, photo } as const)


const initialProfileState = {
    posts: [
        { id: v1(), postMessage: "Hi, I'm Pavel", likes: 10 },
        { id: v1(), postMessage: "Let's go to learn a React", likes: 9 },
        { id: v1(), postMessage: "Also we need improve our html/css skills", likes: 11 },
        { id: v1(), postMessage: "Then we'll learn Redux", likes: 22 }
    ],
    myPost: 'My posts',
    newPost: 'New post',
    profile: { aboutMe: '', userId: 0, fullName: '', photos: { small: '', large: '' }, contacts: {}
    },
    status:'',
}

export const profileReducer = (state: ProfileStateType = initialProfileState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                postMessage: action.post,
                likes: 0
            }
            return { ...state, posts: [...state.posts, newPost]}
        }
        case DELETE_POST:{
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status  }
        }
        case UPDATE_PHOTO: {
            debugger
            return {...state, profile: {...state.profile, photos:action.photo}}
        }
        default:
            return state;
    }
}

export const getProfile = (profileUserId: string) => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        const response = await profileAPI.getProfile(profileUserId)
            dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (profileUserId: string) => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        const response = await profileAPI.getProfileStatus(profileUserId)
            dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
       const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
    }
}

export const updateLargePhoto = (photo: File) => {
    return async (dispatch: Dispatch<ProfileActionType>) => {
        const response = await profileAPI.updatePhoto(photo)
            if (response.data.resultCode === 0){
                dispatch(updatePhoto(response.data.data.photos))
            }
    }
}

export const addPost = (post: string) => {
    return (dispatch: Dispatch<ProfileActionType>) => {
                dispatch(addPostAC(post))
    }
}

export const updateProfile = (profile: UpdateProfileType):ThunkType => {
    return async (dispatch: Dispatch, getState) => {
        const response = await profileAPI.updateProfile(profile)
        if (response.data.resultCode === 0){
            // @ts-ignore
            dispatch(getProfile(getState().auth.userId))
        }
    }
}
