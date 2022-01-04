
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_USER_PHOTO= 'SET_USER_PHOTO'


export type AuthActionType = AuthDataActionType | UserPhotoActionType

export type AuthDataActionType = {
    type: typeof SET_AUTH_DATA
    data: AuthDataType
}

export type UserPhotoActionType = {
    type: typeof SET_USER_PHOTO
    photos:{
        large:string
        small:string
    }
}

export type AuthDataType = {
    userId: number 
    login: string 
    email: string 
    isAuth: boolean
    photos:{
        large:string
        small:string
    }
}



export const setAuthData = (userId:number, login:string, email:string ) => ({ type: SET_AUTH_DATA, data: {userId, login, email } } as const)
export const setUserPhoto = (photos: {large:string, small:string}) => ({ type: SET_USER_PHOTO, photos } as const)


const initialProfileState = {
    userId: 0,
    login: '',
    email: '',
    isAuth: false,
    photos:{
        large:'',
        small:''
    }
}

const authReduser = (state: AuthDataType = initialProfileState, action: AuthActionType) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return { ...state,...action.data, isAuth:true }
        }
        case SET_USER_PHOTO: {
            return{...state, photos:{...action.photos}}
            
        }

        default:
            return state;
    }
}

export default authReduser;