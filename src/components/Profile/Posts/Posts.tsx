import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'

type PropsType = {
  myPost: string;
  newPost:string;
}



const Posts:React.FC<PropsType> = (props) => {
  return <div>
  {props.myPost}
  <div>
  {props.newPost}
  </div>
  <div className={s.posts}>
    <Post message="Hi, I'm Pavel"/>
  </div>
</div>
}

export default Posts;