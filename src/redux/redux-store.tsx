import {combineReducers, createStore} from 'redux'
import dialogsReduser from './dialogs-reduser';
import navbarRightReduser from './navbar-right-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser';


const redusers = combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    navbarRight:navbarRightReduser,
    users:usersReduser
})

let store = createStore(redusers)


export default store;