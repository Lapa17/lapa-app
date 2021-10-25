import React from 'react';
import { AddPostType, state } from '../../../state';
import Post from './Post/Post';
import s from './Posts.module.css'






const Posts: React.FC<AddPostType> = (props) => {

  const postsElements = props.posts.map((m) => <Post key={m.id} message={m.postMessage} likes={m.likes} id={m.id}/>)

  // let textAreaElement = React.createRef<HTMLTextAreaElement>();

  
  
  
  

  let changeTextAreaDataValue = (e:any) => {
  let text = e.currentTarget.value
  props.textareaChange(text)
  console.log(state.textareaData)
    //event (e) 
  }

  let addPost = (e:any) => {
    if (props.textareaData !== '') {
        props.addPost()
        console.log(state.profilePage.posts)
        console.log(state)
        changeTextAreaDataValue(e);
        console.log(state)
      
    }

  }
  
 


  return <div>
    <div className={s.postHeader}>
      <div className={s.itemWrapper}>
        <h2 >{props.myPost} </h2>
      </div>
      <div className={s.item}>
        <textarea placeholder="What's new?" onChange={changeTextAreaDataValue} value={props.textareaData}/>
        <button onClick={addPost}>{props.newPost}</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}

    </div>
  </div>
}

export default Posts;