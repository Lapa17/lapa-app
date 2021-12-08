import {combineReducers, createStore} from 'redux'
import authReduser from './auth-reduser';
import dialogsReduser from './dialogs-reduser';
import navbarRightReduser from './navbar-right-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser';


const redusers = combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    navbarRight:navbarRightReduser,
    users:usersReduser,
    auth:authReduser
})

let store = createStore(redusers)


export default store;