import React from 'react';
import './App.css';
import NavbarLeft from './components/NavbarLeft/NavbarLeft';
import NavbarRight from './components/NavbarRight/NavbarRight';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { DialogsDataType, ReduxStoreType, StateDataType, store } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { render } from '@testing-library/react';
import { authMe } from './redux/auth-reduser';
import { connect, ConnectedComponent } from 'react-redux';
import { compose } from 'redux';
import { initializedTC } from './redux/app-reducer';
import { AppRootStateType } from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';

type AppPropsType = {
  initializedTC: () => void
  friends: DialogsDataType[]
  initialized: boolean
}



class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializedTC()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
      return (

        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarLeft />
          <NavbarRight friends={this.props.friends} />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
            {/* <Route path='/news' render={() => <News />}/> 
      <Route path='/music' render={() => <Music />}/> 
      <Route path='/settings' render={() => <Settings />}/>       */}
          </div>
        </div>
      );
    }
  }


const mapStateToProps = (state: AppRootStateType) => ({
  friends: state.navbarRight.friends,
  initialized: state.app.initialized
})

export default compose<ConnectedComponent<(props: any) => JSX.Element, Omit<any, "isAuth" | "dispatch">>>(withRouter, connect(mapStateToProps, { initializedTC }))(App)

