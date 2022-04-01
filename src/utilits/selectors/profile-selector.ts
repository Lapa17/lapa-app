import {AppRootStateType} from "../../redux/redux-store";
import {APIProfileType} from "../../redux/profile-reducer";

export const selectIsAuth = (state:AppRootStateType)=> {
    return state.auth.isAuth
}

export const selectMainUserId = (state:AppRootStateType)=> {
    return state.auth.userId
}
export const selectProfile = (state:AppRootStateType)=> {
    //@ts-ignore
    return state.profilePage.profile
}
export const selectProfileStatus = (state:AppRootStateType)=> {
    //@ts-ignore
    return state.profilePage.status
}

