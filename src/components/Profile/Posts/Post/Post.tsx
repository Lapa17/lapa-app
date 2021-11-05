import React from 'react';
import { PostMesageType } from '../../../../redux/state';
import s from './Post.module.css'


const Post:React.FC<PostMesageType> = (props) => { 
  return <div className={s.item} key={props.id}>
     <div className={s.postMessage}>{props.message}</div>
     <div className={s.postLikes}>Likes: {props.likes}</div>
    </div>
  
}

export default Post;