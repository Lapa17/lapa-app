import {applyMiddleware, combineReducers, createStore} from 'redux'
import {authReduser} from './auth-reduser';
import dialogsReduser from './dialogs-reduser';
import navbarRightReduser from './navbar-right-reduser';
import {profileReduser} from './profile-reduser';
import {usersReduser} from './users-reduser';
import thunkMiddleware from 'redux-thunk'
import { loginReduser } from './login-reduser';
import { appReduser } from './app-reducer';


const reducers = combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    navbarRight:navbarRightReduser,
    users:usersReduser,
    auth:authReduser,
    login:loginReduser,
    app: appReduser
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof reducers>

export default store;