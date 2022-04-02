import {Comment, Tooltip, Avatar, Row} from 'antd';
import moment from 'moment';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';
import { createElement, useState } from 'react';
import React from 'react';
import s from './Post.module.css'

type CommentPropsType ={
    author: string
    avatar: string
    content: string
}

export const PostComment = (props: CommentPropsType) => {
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
        </Tooltip>
    ];

    return (
        <Comment
        className={s.comment}
            actions={actions}
            author={props.author}
            content={
                <p>
                    {props.content}
                </p>
            }
            style={{boxShadow:'rgb(0 0 0 / 50%) -6px 5px 10px -5px'}}
            
            // datetime={
            //     <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            //         <span>{moment().fromNow()}</span>
            //     </Tooltip>
            // }
        />
    );
};