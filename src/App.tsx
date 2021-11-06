import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavbarLeft from './components/NavbarLeft/NavbarLeft';
import NavbarRight from './components/NavbarRight/NavbarRight';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ReduxStoreType, store} from './redux/store';


const App:React.FC<ReduxStoreType> = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavbarLeft />
      <NavbarRight friends={props.store.getState().navbarRight.friends}/>
      <div className='app-wrapper-content'>
      <Route path='/profile' render={() => <Profile posts={props.store.getState().profilePage.posts} myPost={props.store.getState().profilePage.myPost} newPost={props.store.getState().profilePage.newPost} dispatch={props.store.dispatch.bind(store)} postTextareaData={props.store.getState().profilePage.profileTextareaData}/>}/>
      <Route path='/dialogs' render={() => <Dialogs dialogs={props.store.getState().dialogsPage.dialogs} messages={props.store.getState().dialogsPage.messages}messagetTextareaData={props.store.getState().dialogsPage.messageTextareaData} dispatch={props.store.dispatch.bind(store)}/>}/>
      {/* <Route path='/news' render={() => <News />}/> 
      <Route path='/music' render={() => <Music />}/> 
      <Route path='/settings' render={() => <Settings />}/>       */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
