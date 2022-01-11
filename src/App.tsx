import React from 'react';
import './App.css';
import NavbarLeft from './components/NavbarLeft/NavbarLeft';
import NavbarRight from './components/NavbarRight/NavbarRight';
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ReduxStoreType, store} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login  from './components/Login/Login';


const App:React.FC<ReduxStoreType> = (props) => {
  return (
    
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarLeft />
      <NavbarRight friends={props.store.getState().navbarRight.friends}/>
      <div className='app-wrapper-content'>
      <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
      <Route path='/dialogs' render={() => <DialogsContainer />}/>
      <Route path='/users' render={() => <UsersContainer />}/>
      <Route path='/login' render={() => <Login />}/>
      {/* <Route path='/news' render={() => <News />}/> 
      <Route path='/music' render={() => <Music />}/> 
      <Route path='/settings' render={() => <Settings />}/>       */}
      </div>
    </div>
  );
}

export default App;


{/* <Profile posts={props.store.getState().profilePage.posts} myPost={props.store.getState().profilePage.myPost} newPost={props.store.getState().profilePage.newPost} dispatch={props.store.dispatch.bind(store)} postTextareaData={props.store.getState().profilePage.profileTextareaData}/> */}

{/* <Dialogs dialogs={props.store.getState().dialogsPage.dialogs} messages={props.store.getState().dialogsPage.messages}messagetTextareaData={props.store.getState().dialogsPage.messageTextareaData} dispatch={props.store.dispatch.bind(store)}/> */}