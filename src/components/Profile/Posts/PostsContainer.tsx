import React from 'react';
import { connect } from 'react-redux';
import {
  addPost,
} from '../../../redux/profile-reducer';
import { StateDataType } from '../../../redux/store';
import Posts from './Posts';




const mapStateProps = (state:StateDataType) =>{
  return {  
    myPost:state.profilePage.myPost,
    newPost:state.profilePage.newPost,
    posts: state.profilePage.posts,

  }
}


const PostsContainer = connect (mapStateProps,{addPost}) (Posts);

export default PostsContainer;