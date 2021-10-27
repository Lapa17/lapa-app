import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { AddPostType} from '../../../state';
import Post from './Post/Post';
import s from './Posts.module.css'






const Posts: React.FC<AddPostType> = (props) => {

  const postsElements = props.posts.map((m) => <Post key={m.id} message={m.postMessage} likes={m.likes} id={m.id} />)

  const changeTextAreaDataValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    let text = e.currentTarget.value
    props.textareaChange(text)
  }

  const addPost: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (props.textareaData !== '') {
      props.addPost()
      props.textareaChange('')
    }

  }




  return <div>
    <div className={s.postHeader}>
      <div className={s.itemWrapper}>
        <h2 >{props.myPost} </h2>
      </div>
      <div className={s.item}>
        <textarea placeholder="What's new?" onChange={changeTextAreaDataValue} value={props.textareaData} />
        <button onClick={addPost}>{props.newPost}</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}

    </div>
  </div>
}

export default Posts;