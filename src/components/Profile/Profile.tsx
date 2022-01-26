import React, { ReactNode } from 'react';
import { AddPostType, ReduxStoreType} from '../../redux/store';
import Avatar from './ProfileInfo/Avatar/Avatar';
import Posts from './Posts/Posts';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css'
import ProfileDescription from './ProfileInfo/Description/Description';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {APIProfileType, updateStatus} from '../../redux/profile-reduser';
import { Redirect } from 'react-router-dom';


type ProfilePropsType ={
  children?: ReactNode
  profile:APIProfileType
  status: string
  updateStatus:(status:string)=> void
}



const Profile = (props:ProfilePropsType) => {
 
  return <div>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    {/* <Posts myPost={props.myPost} newPost={props.newPost} posts={props.posts} dispatch={props.dispatch} postTextareaData={props.postTextareaData}/> */}
    <PostsContainer/>
  </div>
}

export default Profile;