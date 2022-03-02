import {AppRootStateType} from "../../redux/redux-store";

export const getUser = (state:AppRootStateType)=> {
    return state.users.users
}

export const getPageSize = (state:AppRootStateType)=> {
    return state.users.pageSize
}

export const getTotalUserCounter = (state:AppRootStateType)=> {
    return state.users.totalUserCounter
}

export const getCurrentPage = (state:AppRootStateType)=> {
    return state.users.currentPage
}

export const getIsFetchingData = (state:AppRootStateType)=> {
    return state.users.isFetching
}

export const getFollowInProgressData = (state:AppRootStateType)=> {
    return state.users.followInProgress
}
