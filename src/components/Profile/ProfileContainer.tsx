import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { ProfileStateType, setUserProfile } from '../../redux/profile-reduser';


type ProfileContainerType ={
  profile: any
  setUserProfile:(profile:any) => void
}


class ProfileContainer extends React.Component<ProfileContainerType> {

  componentDidMount() {
    debugger
    axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      debugger
      this.props.setUserProfile(response.data)
    })
}

  render()
  {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

let mapStateToProps= (state:ProfileStateType) => ({
  profile: state.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);