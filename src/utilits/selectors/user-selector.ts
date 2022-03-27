import {AppRootStateType} from "../../redux/redux-store";
import {createSelector} from 'reselect'

export const getUser = (state:AppRootStateType)=> {
    return state.users.users
}

// export const getUserSelector = createSelector (getUser, (users)=> { //example of selector with reselect
//     return users.filter((u: any)=> u)
// })

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
