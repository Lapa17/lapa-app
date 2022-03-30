import React, { ReactNode } from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {APIProfileType} from '../../redux/profile-reducer';
import {UpdateProfileType} from "../../api/profileAPI";



type ProfilePropsType ={
  children?: ReactNode
  profile:APIProfileType
  status: string
  updateStatus:(status:string)=> void
  updateLargePhoto: (photo:File)=> void
  updateProfile: (profile:UpdateProfileType)=>void
}



const Profile = (props:ProfilePropsType) => {
 
  return <div>
    <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        updateLargePhoto={props.updateLargePhoto}
        updateProfile={props.updateProfile}
    />
        <PostsContainer/>
  </div>
}

export default Profile;