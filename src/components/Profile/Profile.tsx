import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css'

const Profile = () => {
  return <div>
    <div>
      ava + description
    </div>
    <Posts myPost='My post' newPost='New Post'/>
  </div>
}

export default Profile;