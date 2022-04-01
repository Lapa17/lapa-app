import * as axios from 'axios'
import React from 'react';
import { connect } from 'react-redux';
import {AuthDataType, authMe, setAuthData, setLogOut, setUserPhoto} from '../../redux/auth-reducer';
import { StateDataType } from '../../redux/store';
import {authAPI} from "../../api/authAPI";
import {profileAPI} from "../../api/profileAPI";


type HeaderContainerPropsType = {
    setAuthData: (userId: number, login: string, email: string) => void
    setUserPhoto:(photos: {large:string, small:string}) => void
    login: string
    isAuth: boolean
    smallPhoto: string
    setLogOut: ()=> void
}


class HeaderContainer extends React.Component<HeaderContainerPropsType>  {



    render() {
        return <div >asda</div>
    }
}

const mapStateToProps = (state: StateDataType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    smallPhoto: state.auth.photos.small
})

export default connect(mapStateToProps, { setAuthData, setUserPhoto , setLogOut})(HeaderContainer)
