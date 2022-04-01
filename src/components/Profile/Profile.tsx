import React, { useEffect } from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { getProfile, getStatus } from '../../redux/profile-reducer';
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../redux/redux-store";
import {
  selectIsAuth,
  selectMainUserId,
  selectProfile,
  selectProfileStatus
} from "../../utilits/selectors/profile-selector";
import { Redirect, useParams } from "react-router-dom";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Space, Card } from 'antd';





const Profile = () => {



  const dispatch = useDispatch()
  const isAuth = useAppSelector(selectIsAuth)
  const profile = useAppSelector(selectProfile)
  const status = useAppSelector(selectProfileStatus)
  const mainUserId = useAppSelector(selectMainUserId)
  let { userId }: any = useParams()

  useEffect(() => {
    if (isAuth) {
      if (!userId) {
        userId = mainUserId
      }
      dispatch(getProfile(userId))
      dispatch(getStatus(userId))
    }
  }, [userId])

  if (!isAuth) {
    return <Redirect to={'/login'} />
  }

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }} >
        <ProfileInfo profile={profile} status={status} />
        <PostsContainer />
      </Space>
    </div>)
}

export default Profile;