import React from 'react';
import { AddPostType, state } from '../../../state';
import Post from './Post/Post';
import s from './Posts.module.css'






const Posts: React.FC<AddPostType> = (props) => {

  const postsElements = props.posts.map((m) => <Post message={m.postMessage} likes={m.likes} />)

  let textAreaElement = React.createRef<HTMLTextAreaElement>();

  
  
  
  

  let changeTextAreaDataValue = () => {
    if (textAreaElement.current !== null) {
      let text = textAreaElement.current.value
        props.textareaChange(text)
        console.log(state.textareaData)
      
    }
  }

  let addPost = () => {

    if (props.textareaData !== '' && textAreaElement.current !== null) {
        props.addPost()
        console.log(state.profilePage.posts)
        console.log(state)
        textAreaElement.current.value = ''
        changeTextAreaDataValue();
      
    }

  }


  return <div>
    <div className={s.postHeader}>
      <div className={s.itemWrapper}>
        <h2 >{props.myPost} </h2>
      </div>
      <div className={s.item}>
        <textarea placeholder="What's new?" ref={textAreaElement} onChange={changeTextAreaDataValue} value={props.textareaData}/>
        <button onClick={addPost}>{props.newPost}</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}

    </div>
  </div>
}

export default Posts;