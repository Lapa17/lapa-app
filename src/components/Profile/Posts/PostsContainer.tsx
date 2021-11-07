import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, changeProfileTextareaDataValueActionCreator } from '../../../redux/profile-reduser';
import { ActionType, StateDataType } from '../../../redux/store';
import Posts from './Posts';







// const PostsContainer = () => {
//   return (<StoreContext.Consumer>
//     {
//       (store) => {
//         let state = store.getState().profilePage

//         const changeTextAreaDataValue = (text: string) => {
//           store.dispatch(changeProfileTextareaDataValueActionCreator(text))
//         }

//         const addPost = () => {
//           if (state.profileTextareaData !== '') {
//             store.dispatch(addPostActionCreator())
//             store.dispatch(changeProfileTextareaDataValueActionCreator(''))
//           }

//         }

//         return <Posts addPost={addPost} textareaChange={changeTextAreaDataValue} myPost={state.myPost} newPost={state.newPost} posts={state.posts} postTextareaData={state.profileTextareaData} />
//       }
//     }
//   </StoreContext.Consumer>
//   )
// }

const mapStateProps = (state:StateDataType) =>{
  return {  
    myPost:state.profilePage.myPost,
    newPost:state.profilePage.newPost,
    posts: state.profilePage.posts,
    postTextareaData: state.profilePage.profileTextareaData

  }
}
const mapDispatchProps = (dispatch:(action:ActionType) => void)=>{
  return {
    addPost:()=> dispatch(addPostActionCreator()),
    textareaChange:(text:string)=> dispatch(changeProfileTextareaDataValueActionCreator(text)),
  }
}


const PostsContainer = connect (mapStateProps,mapDispatchProps) (Posts);

export default PostsContainer;