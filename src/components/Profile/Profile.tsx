import React, {ReactNode, useEffect} from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {APIProfileType, getProfile, getStatus} from '../../redux/profile-reducer';
import {UpdateProfileType} from "../../api/profileAPI";
import {useDispatch, useSelector} from "react-redux";
import { useAppSelector} from "../../redux/redux-store";
import {
  selectIsAuth,
  selectMainUserId,
  selectProfile,
  selectProfileStatus
} from "../../utilits/selectors/profile-selector";
import {Redirect, useParams} from "react-router-dom";



const Profile = () => {

  const dispatch = useDispatch()
  const isAuth = useAppSelector(selectIsAuth)
  const profile = useAppSelector(selectProfile)
  const status = useAppSelector(selectProfileStatus)
  const mainUserId = useAppSelector(selectMainUserId)
  let {userId}:any = useParams()

  useEffect(()=>{
  if(isAuth){
    if(!userId){
      userId = mainUserId
    }
    dispatch(getProfile(userId))
    dispatch(getStatus(userId))
  }}, [userId])

  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }

  return <div>
    <ProfileInfo
        profile={profile}
        status={status}
    />
        <PostsContainer/>
  </div>
}

export default Profile;