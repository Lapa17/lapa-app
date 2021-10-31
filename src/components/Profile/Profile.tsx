import React from 'react';
import { AddPostType} from '../../state';
import Avatar from './Avatar/Avatar';
import ProfileDescription from './Description/Description';
import Posts from './Posts/Posts';
import s from './Profile.module.css'






const Profile = (props: AddPostType) => {
  return <div>
    <div className={s.wrapper}>
      <Avatar imgAdress='https://vjoy.cc/wp-content/uploads/2020/07/kartinki_muzhskie_na_avu_18_02210535.jpg' />
      <ProfileDescription title='Pavel Laparevich' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, repellat molestiae voluptate quas atque architecto praesentium! Tempore labore illum, necessitatibus fugiat voluptate, atque aspernatur totam vitae laborum, facere accusamus illo?' />
    </div>
    <Posts myPost={props.myPost} newPost={props.newPost} posts={props.posts} dispatch={props.dispatch} postTextareaData={props.postTextareaData}/>
  </div>
}

export default Profile;