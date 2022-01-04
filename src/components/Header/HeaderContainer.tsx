import * as axios from 'axios'
import React from 'react';
import { connect } from 'react-redux';
import {AuthDataType, authMe, setAuthData, setUserPhoto} from '../../redux/auth-reduser';
import { StateDataType } from '../../redux/store';
import Header from './Header';
import {authAPI} from "../../api/authAPI";
import {profileAPI} from "../../api/profileAPI";


type HeaderContainerPropsType = {
    setAuthData: (userId: number, login: string, email: string) => void
    setUserPhoto:(photos: {large:string, small:string}) => void
    login: string
    isAuth: boolean
    smallPhoto: string
    authMe: () => void
}


class HeaderContainer extends React.Component<HeaderContainerPropsType>  {
    componentDidMount() {
        // authAPI.getAuth().then(data => {
        //     if (data.resultCode === 0) {
        //         let { id, login, email } = data.data
        //         this.props.setAuthData(id, login, email)
        //
        //         profileAPI.getProfile(id).then(data=>{
        //            this.props.setUserPhoto(data.photos)
        //
        //         })
        //     }
        // })
        this.props.authMe()
    }


    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth} smallPhoto={this.props.smallPhoto}/>
    }
}

const mapStateToProps = (state: StateDataType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    smallPhoto: state.auth.photos.small
})

export default connect(mapStateToProps, { setAuthData, setUserPhoto , authMe})(HeaderContainer)
