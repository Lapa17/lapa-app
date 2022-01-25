import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect, ConnectedComponent } from 'react-redux';
import {APIProfileType, getProfile, ProfileStateType, setUserProfile} from '../../redux/profile-reduser';
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
    return <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
  }
}

let mapStateToProps= (state:StateDataType) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth

})

// let wiathAuthContainer  = withAuthRedirect(ProfileContainer)

// let ProfileContainerWithUrl = withRouter(wiathAuthContainer)

// export default connect(mapStateToProps, {setUserProfile, getProfile})(ProfileContainerWithUrl);

export default compose<React.ComponentClass<Pick<RouteComponentProps<any, StaticContext, unknown>, never>, any> & WithRouterStatics<ConnectedComponent<(props: any) => JSX.Element, Omit<any, "isAuth" | "dispatch">>>>(
  connect(mapStateToProps, {setUserProfile, getProfile}),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)