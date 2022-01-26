import {applyMiddleware, combineReducers, createStore} from 'redux'
import {authReduser} from './auth-reduser';
import dialogsReduser from './dialogs-reduser';
import navbarRightReduser from './navbar-right-reduser';
import {profileReduser} from './profile-reduser';
import {usersReduser} from './users-reduser';
import thunkMiddleware from 'redux-thunk'
import { loginReduser } from './login-reduser';


const reducers = combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    navbarRight:navbarRightReduser,
    users:usersReduser,
    auth:authReduser,
    login:loginReduser
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store;