import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My post
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>Post1</div>
        <div className={s.item}>Post2</div>
        <div className={s.item}>Post3</div>
      </div>
    </div>
  </div>
}

export default Profile;