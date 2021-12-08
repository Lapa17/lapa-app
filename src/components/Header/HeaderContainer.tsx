import * as axios from 'axios'
import React from 'react';
import { connect } from 'react-redux';
import { AuthDataType, setAuthData, setUserPhoto } from '../../redux/auth-reduser';
import { StateDataType } from '../../redux/store';
import Header from './Header';


type HeaderContainerPropsType = {
    setAuthData: (userId: number, login: string, email: string) => void
    setUserPhoto:(photos: {large:string, small:string}) => void
    login: string
    isAuth: boolean
    smallPhoto: string
}


class HeaderContainer extends React.Component<HeaderContainerPropsType>  {
    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                this.props.setAuthData(id, login, email)
                
                axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response=>{
                   this.props.setUserPhoto(response.data.photos)
                   
                })
            }
        })
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

export default connect(mapStateToProps, { setAuthData, setUserPhoto})(HeaderContainer)
