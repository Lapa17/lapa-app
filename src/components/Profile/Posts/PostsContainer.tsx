import React from 'react';
import { addPostActionCreator, changeProfileTextareaDataValueActionCreator } from '../../../redux/profile-reduser';
import { ReduxStoreType} from '../../../redux/store';
import Posts from './Posts';







const PostsContainer: React.FC<ReduxStoreType> = (props) => {

  let state = props.store.getState().profilePage

  const changeTextAreaDataValue = (text:string) => {
    props.store.dispatch(changeProfileTextareaDataValueActionCreator(text))
  }

  const addPost = () => {
    if (state.profileTextareaData !== '') {
      props.store.dispatch(addPostActionCreator())
      props.store.dispatch(changeProfileTextareaDataValueActionCreator(''))
    }

  }

  return (
    <Posts addPost={addPost} textareaChange={changeTextAreaDataValue} myPost={state.myPost} newPost={state.newPost} posts={state.posts} postTextareaData={state.profileTextareaData}/>
  )
}

export default PostsContainer;