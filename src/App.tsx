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
      <NavbarRight friends={props.state.navbarRight.friends}/>
      <div className='app-wrapper-content'>
      <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} myPost={props.state.profilePage.myPost} newPost={props.state.profilePage.newPost} addPost={props.addPost}/>}/>
      <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
      {/* <Route path='/news' render={() => <News />}/> 
      <Route path='/music' render={() => <Music />}/> 
      <Route path='/settings' render={() => <Settings />}/>       */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
