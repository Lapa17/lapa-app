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
import { AppType } from '.';


const App:React.FC<AppType> = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <NavbarLeft />
      <NavbarRight />
      <div className='app-wrapper-content'>
      <Route path='/profile' render={() => <Profile postData={props.posts} myPost={'My posts'} newPost={'New post'}/>}/>
      <Route path='/dialogs' render={() => <Dialogs friends={props.dialogs} messages={props.messages}/>}/>
      {/* <Route path='/news' render={() => <News />}/> 
      <Route path='/music' render={() => <Music />}/> 
      <Route path='/settings' render={() => <Settings />}/>       */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
