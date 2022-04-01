import {AppRootStateType} from "../../redux/redux-store";
import {createSelector} from 'reselect'

export const selectDialogs = (state:AppRootStateType)=> {
    return state.dialogsPage.dialogs
}

export const selectMessages = (state:AppRootStateType)=> {
    return state.dialogsPage.messages
}


