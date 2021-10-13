import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavbarLeft from './components/NavbarLeft/NavbarLeft';
import NavbarRight from './components/NavbarRight/NavbarRight';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarLeft />
      <NavbarRight />
      <Profile />
    </div>
  );
}

export default App;
