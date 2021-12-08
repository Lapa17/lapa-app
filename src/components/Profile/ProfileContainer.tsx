import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { APIProfileType, ProfileStateType, setUserProfile } from '../../redux/profile-reduser';
import { StateDataType } from '../../redux/store';
import { RouteComponentProps, withRouter } from 'react-router';

type UserId = {
  userId:string
}

type ProfileContainerType ={
  profile: APIProfileType
  setUserProfile:(profile:APIProfileType) => void
}
type RouterPropType = RouteComponentProps<UserId> & {
  profile: APIProfileType
  setUserProfile:(profile:APIProfileType) => void
}

class ProfileContainer extends React.Component<RouterPropType> {
  
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId = '21095'
    }
    axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
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

let ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrl);