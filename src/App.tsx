import React, { Suspense } from 'react';
// import './App.css';
import { NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { DialogsDataType } from './redux/store';
import Login from './components/Login/Login';
import { connect, ConnectedComponent } from 'react-redux';
import { compose } from 'redux';
import { initializedTC } from './redux/app-reducer';
import { AppRootStateType } from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import Profile from "./components/Profile/Profile";
import { HeaderRC } from './components/Header/Header';
import Users from "./components/Users/Users";
import 'antd/dist/antd.css';
import './App.less'
import { Layout, Menu} from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

type AppPropsType = {
    initializedTC: () => void
    friends: DialogsDataType[]
    initialized: boolean
}

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

class App extends React.Component<AppPropsType> {

    catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
        alert('Some error')
        console.error(event)
    }

    componentDidMount() {
        this.props.initializedTC()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        const { Content, Footer, Sider } = Layout;

        return (

            <Layout hasSider>
                <Sider 
                    breakpoint="md"
                    collapsedWidth="0"
                    className='sider'
                >
                    <div className="logo" />
                    <Menu mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to={'/profile'}>Profile</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <NavLink to={'/dialogs'}>Dialogs</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <NavLink to={'/users'}>Users</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <HeaderRC />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: '60px 20px' }}>
                            <Suspense fallback={<Preloader />}>
                                <Switch>
                                    <Route path='/profile/:userId?' render={() => <Profile />} />
                                    <Route path='/dialogs' render={() => <Dialogs />} />
                                    <Route path='/users' render={() => <Users />} />
                                    <Route path='/login' render={() => <Login />} />
                                    <Route path='/' render={() => <Redirect to={'/profile'} />} />
                                    <Route exact path='*' render={() => <div>404 PAGE NOT FOUND</div>} />
                                </Switch>
                            </Suspense>
                        </div>
                    </Content>
                    <Footer style={{background:'linear-gradient(5deg, #d7edfc 30%, #ffecb2 60%)'}}>Designed by Lapa17</Footer>
                </Layout>

            </Layout>
        );
    }
}


const mapStateToProps = (state: AppRootStateType) => ({
    friends: state.navbarRight.friends,
    initialized: state.app.initialized
})

export default compose<ConnectedComponent<(props: any) => JSX.Element, Omit<any, "isAuth" | "dispatch">>>(withRouter, connect(mapStateToProps, { initializedTC }))(App)

