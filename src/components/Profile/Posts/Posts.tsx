import React from 'react';
import { PostType } from '../../../state';
import Post from './Post/Post';
import s from './Posts.module.css'






const Posts: React.FC<PostType> = (props) => {

  const postsElements = props.posts.map((m) => <Post message={m.postMessage} likes={m.likes}/>)
  return <div>
    <div className={s.postHeader}>
      <div className={s.itemWrapper}>
        <h2 >{props.myPost} </h2>
      </div>
      <div className={s.item}>
        <button>{props.newPost}</button>
        
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
  
    </div>
  </div>
}

export default Posts;