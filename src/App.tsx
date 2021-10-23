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
import { StateType } from './state';


const App:React.FC<StateType> = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavbarLeft />
      <NavbarRight friends={props.navbarRight.friends}/>
      <div className='app-wrapper-content'>
      <Route path='/profile' render={() => <Profile posts={props.profilePage.posts} myPost={props.profilePage.myPost} newPost={props.profilePage.newPost}/>}/>
      <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogsPage.dialogs} messages={props.dialogsPage.messages}/>}/>
      {/* <Route path='/news' render={() => <News />}/> 
      <Route path='/music' render={() => <Music />}/> 
      <Route path='/settings' render={() => <Settings />}/>       */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
