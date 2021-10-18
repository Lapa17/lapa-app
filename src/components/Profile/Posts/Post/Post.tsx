import React from 'react';
import s from './Post.module.css'

type PropsType = {
  message: string;
}

const Post:React.FC<PropsType> = (props) => {
  return <div className={s.item}>
     {props.message}
    </div>
  
}

export default Post;