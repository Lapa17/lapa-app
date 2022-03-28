import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { AddPostType} from '../../../redux/store';
import Post from './Post/Post';
import s from './Posts.module.css'
import {PostForm} from "../../Forms/PostForm";
import {addPost} from "../../../redux/profile-reducer";







const Posts: React.FC<AddPostType> = React.memo(({addPost, myPost, newPost, posts, ...props}) => {

  const postsElements = posts.map((m) => <Post key={m.id} message={m.postMessage} likes={m.likes} id={m.id} />)

  return <div>
    <div className={s.postHeader}>
      <div className={s.itemWrapper}>
        <h2 >{myPost} </h2>
      </div>
      <div className={s.item}>
        <PostForm addPost={addPost}/>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}

    </div>
  </div>
})

export default Posts;