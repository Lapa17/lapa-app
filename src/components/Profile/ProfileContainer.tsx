import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import {APIProfileType, getProfile, ProfileStateType, setUserProfile} from '../../redux/profile-reduser';
import { StateDataType } from '../../redux/store';
import { RouteComponentProps, withRouter } from 'react-router';
import {profileAPI} from "../../api/profileAPI";

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
  getProfile:(profileUserId: string)=> void
}

class ProfileContainer extends React.Component<RouterPropType> {
  
  componentDidMount() {
    // let userId = this.props.match.params.userId
    // if(!userId){
    //   userId = '21095'
    // }
    // profileAPI.getProfile(userId).then(data => {
    //   this.props.setUserProfile(data)
    // })
    this.props.getProfile(this.props.match.params.userId)
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

export default connect(mapStateToProps, {setUserProfile, getProfile})(ProfileContainerWithUrl);