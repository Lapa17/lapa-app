import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import {AddPostType} from '../../../redux/store';
import Post from './Post/Post';
import s from './Posts.module.css'
import {PostForm} from "../../Forms/PostForm";
import {addPost} from "../../../redux/profile-reducer";
import {createElement, useState} from 'react';
import {Comment, Tooltip, Avatar, Row} from 'antd';
import moment from 'moment';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';


const Posts: React.FC<AddPostType> = React.memo(({addPost, myPost, newPost, posts, ...props}) => {

    const postsElements = posts.map((m) => <Post key={m.id} message={m.postMessage} likes={m.likes} id={m.id}/>)

    return <div>
        <div className={s.postHeader}>
            <div className={s.itemWrapper}>
                <h2>{myPost} </h2>
            </div>
            <div className={s.item}>
                <PostForm addPost={addPost}/>
            </div>
        </div>

        <div className={s.posts}>
            <Row>
                {postsElements}
            </Row>
        </div>
    </div>
})

export default Posts;

type CommentPropsType ={
    author: string
    avatar: string
    content: string
}

export const Demo = (props: CommentPropsType) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState<'liked' | 'disliked' | null>(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={props.author}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
            content={
                <p>

                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
};