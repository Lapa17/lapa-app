import React from 'react';
import { addPostActionCreator, changeProfileTextareaDataValueActionCreator } from '../../../redux/profile-reduser';
import { ReduxStoreType} from '../../../redux/store';
import Posts from './Posts';







const PostsContainer: React.FC<ReduxStoreType> = (props) => {

  const changeTextAreaDataValue = (text:string) => {
    props.store.dispatch(changeProfileTextareaDataValueActionCreator(text))
  }

  const addPost = () => {
    if (props.store.getState().profilePage.profileTextareaData !== '') {
      props.store.dispatch(addPostActionCreator())
      props.store.dispatch(changeProfileTextareaDataValueActionCreator(''))
    }

  }

  return (
    <Posts addPost={addPost} textareaChange={changeTextAreaDataValue} myPost={props.store.getState().profilePage.myPost} newPost={props.store.getState().profilePage.newPost} posts={props.store.getState().profilePage.posts} postTextareaData={props.store.getState().profilePage.profileTextareaData}/>
  )
}

export default PostsContainer;