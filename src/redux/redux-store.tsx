import {combineReducers, createStore} from 'redux'
import dialogsReduser from './dialogs-reduser';
import navbarRightReduser from './navbar-right-reduser';
import profileReduser from './profile-reduser';


const redusers = combineReducers({
    profilePage:profileReduser,
    dialogsPage:dialogsReduser,
    navbarRight:navbarRightReduser
})

let store = createStore(redusers)


export default store;