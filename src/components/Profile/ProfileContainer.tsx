import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect, ConnectedComponent } from 'react-redux';
import {
  APIProfileType,
  getProfile,
  getStatus,
  setUserProfile,
  updateStatus
} from '../../redux/profile-reduser';
import { StateDataType } from '../../redux/store';
import { RouteComponentProps, StaticContext, withRouter, WithRouterStatics } from 'react-router';
import {profileAPI} from "../../api/profileAPI";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

type UserId = {
  userId:string
}

type ProfileContainerType ={
  profile: APIProfileType
  setUserProfile:(profile:APIProfileType) => void
}
type RouterPropType = RouteComponentProps<UserId> & {
  profile: APIProfileType
  isAuth: boolean
  status:string
  setUserProfile:(profile:APIProfileType) => void
  getProfile:(profileUserId: string)=> void
  getStatus:(profileUserId: string) => void
  updateStatus:(status:string)=> void
}

class ProfileContainer extends React.Component<RouterPropType> {
  
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId = '21095'
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
}

  render()
  {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
  }
}

let mapStateToProps= (state:StateDataType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth

})

export default compose<React.ComponentClass<Pick<RouteComponentProps<any, StaticContext, unknown>, never>, any> & WithRouterStatics<ConnectedComponent<(props: any) => JSX.Element, Omit<any, "isAuth" | "dispatch">>>>(
  connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)