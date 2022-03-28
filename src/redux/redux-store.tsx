import {applyMiddleware, combineReducers, createStore} from 'redux'
import {AuthActionType, authReducer} from './auth-reducer';
import dialogsReducer, {DialogsActionType} from './dialogs-reducer';
import navbarRightReduser from './navbar-right-reduser';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {UsersActionType, usersReducer} from './users-reducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import {LoginActionType, loginReducer} from './login-reducer';
import {AppActionType, appReduser} from './app-reducer';


const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    navbarRight:navbarRightReduser,
    users:usersReducer,
    auth:authReducer,
    login:loginReducer,
    app: appReduser
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof reducers>

export type GeneralAppActionType = AppActionType
    | AuthActionType
    | ProfileActionType
    | DialogsActionType
    | LoginActionType
    | UsersActionType

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, GeneralAppActionType>

export default store;