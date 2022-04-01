import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import {AddPostType} from '../../../redux/store';
import Post from './Post/Post';
import s from './Posts.module.css'
import {PostForm} from "../../Forms/PostForm";
import {createElement, useState} from 'react';
import {Comment, Tooltip, Avatar, Row} from 'antd';


const Posts: React.FC<AddPostType> = React.memo(({addPost, myPost, newPost, posts, profile, ...props}) => {

    const postsElements = posts.map((m) => <Post profile={profile} key={m.id} message={m.postMessage} likes={m.likes} id={m.id}/>)

    return <div>
            <Row  gutter={[8, 8]}>
                {postsElements}
            </Row>
    </div>
})

export default Posts;

