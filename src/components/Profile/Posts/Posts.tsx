import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { addPostActionCreator, changeProfileTextareaDataValueActionCreator } from '../../../redux/profile-reduser';
import { AddPostType} from '../../../redux/store';
import Post from './Post/Post';
import s from './Posts.module.css'







const Posts: React.FC<AddPostType> = ({addPost, textareaChange, myPost, newPost, posts,postTextareaData, ...props}) => {

  const postsElements = posts.map((m) => <Post key={m.id} message={m.postMessage} likes={m.likes} id={m.id} />)

  const changeTextAreaDataValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    let text = e.currentTarget.value
    textareaChange(text)
  }

  const onAddPost: MouseEventHandler<HTMLButtonElement> = () => {
    if (postTextareaData){
      addPost()
    }
  }




  return <div>
    <div className={s.postHeader}>
      <div className={s.itemWrapper}>
        <h2 >{myPost} </h2>
      </div>
      <div className={s.item}>
        <textarea placeholder="What's new?" onChange={changeTextAreaDataValue} value={postTextareaData} />
        <button onClick={onAddPost}>{newPost}</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}

    </div>
  </div>
}

export default Posts;