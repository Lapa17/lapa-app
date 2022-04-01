import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import {AuthActionType, authReducer} from './auth-reducer';
import dialogsReducer, {DialogsActionType} from './dialogs-reducer';
import navbarRightReduser from './navbar-right-reduser';
import {APIProfileType, ProfileActionType, profileReducer} from './profile-reducer';
import {UsersActionType, usersReducer} from './users-reducer';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {LoginActionType, loginReducer} from './login-reducer';
import {AppActionType, appReduser} from './app-reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    navbarRight:navbarRightReduser,
    users:usersReducer,
    auth:authReducer,
    login:loginReducer,
    app: appReduser
})

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export type AppRootStateType = ReturnType<typeof reducers>

export type GeneralAppActionType = AppActionType
    | AuthActionType
    | ProfileActionType
    | DialogsActionType
    | LoginActionType
    | UsersActionType

export type ThunkType = ThunkAction<any, AppRootStateType, unknown, GeneralAppActionType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export default store;


