import React, { ReactNode } from 'react';
import { AddPostType, ReduxStoreType} from '../../redux/store';
import Avatar from './ProfileInfo/Avatar/Avatar';
import Posts from './Posts/Posts';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css'
import ProfileDescription from './ProfileInfo/Description/Description';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { APIProfileType } from '../../redux/profile-reduser';
import { Redirect } from 'react-router-dom';


type ProfilePropsType ={
  children?: ReactNode
  profile:APIProfileType
  isAuth:boolean
}



const Profile = (props:ProfilePropsType) => {
  
  if (!props.isAuth) return <Redirect to={'/login'}/>

  return <div>
    <ProfileInfo profile={props.profile}/>
    {/* <Posts myPost={props.myPost} newPost={props.newPost} posts={props.posts} dispatch={props.dispatch} postTextareaData={props.postTextareaData}/> */}
    <PostsContainer/>
  </div>
}

export default Profile;