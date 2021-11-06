import React from 'react';
import { addPostActionCreator, changeProfileTextareaDataValueActionCreator } from '../../../redux/profile-reduser';
import { ReduxStoreType } from '../../../redux/store';
import StoreContext from '../../../StoreContext';
import Posts from './Posts';







const PostsContainer = () => {
  return (<StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState().profilePage

        const changeTextAreaDataValue = (text: string) => {
          store.dispatch(changeProfileTextareaDataValueActionCreator(text))
        }

        const addPost = () => {
          if (state.profileTextareaData !== '') {
            store.dispatch(addPostActionCreator())
            store.dispatch(changeProfileTextareaDataValueActionCreator(''))
          }

        }

        return <Posts addPost={addPost} textareaChange={changeTextAreaDataValue} myPost={state.myPost} newPost={state.newPost} posts={state.posts} postTextareaData={state.profileTextareaData} />
      }
    }
  </StoreContext.Consumer>
  )
}

export default PostsContainer;