import React, { Suspense } from 'react';
import './App.css';
import NavbarLeft from './components/NavbarLeft/NavbarLeft';
import NavbarRight from './components/NavbarRight/NavbarRight';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { DialogsDataType} from './redux/store';
import Login from './components/Login/Login';
import { connect, ConnectedComponent } from 'react-redux';
import { compose } from 'redux';
import { initializedTC } from './redux/app-reducer';
import { AppRootStateType } from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import Profile from "./components/Profile/Profile";
import {Header} from './components/Header/Header';
import Users from "./components/Users/Users";

type AppPropsType = {
  initializedTC: () => void
  friends: DialogsDataType[]
  initialized: boolean
}

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

class App extends React.Component<AppPropsType> {

  catchAllUnhandledErrors = (event:PromiseRejectionEvent) => {
    alert('Some error')
    console.error(event)
  }

  componentDidMount() {
    this.props.initializedTC()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount(){
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
      return (

        <div className='app-wrapper'>
          <Header />
          <NavbarLeft />
          <NavbarRight friends={this.props.friends} />
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader />}>
            <Switch>
            <Route path='/profile/:userId?' render={() => <Profile />} />
            <Route path='/dialogs' render={() => <Dialogs />} />
            <Route path='/users' render={() => <Users />} />
            <Route path='/login' render={() => <Login />} />
              <Route path='/' render={() => <Redirect to={'/profile'} />} />
            <Route exact path='*' render={() => <div>404 PAGE NOT FOUND</div>} />
            {/* <Route path='/news' render={() => <News />}/> 
                <Route path='/music' render={() => <Music />}/>
                <Route path='/settings' render={() => <Settings />}/>       */}
                </Switch>
            </Suspense>
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

