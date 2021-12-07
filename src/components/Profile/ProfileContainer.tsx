import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { APIProfileType, ProfileStateType, setUserProfile } from '../../redux/profile-reduser';
import { StateDataType } from '../../redux/store';


type ProfileContainerType ={
  profile: APIProfileType
  setUserProfile:(profile:APIProfileType) => void
}


class ProfileContainer extends React.Component<ProfileContainerType> {
  
  componentDidMount() {
    
    axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setUserProfile(response.data)
    })
}

  render()
  {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

let mapStateToProps= (state:StateDataType) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);