import React from 'react';
import { PostMesageType } from '../../../../redux/store';
import {Col} from "antd";
import { PostComment } from './PostComment';


const Post:React.FC<PostMesageType> = React.memo((props) => { 
  return <Col span={24} style={{marginBottom: 10}}
  >
      <PostComment author={props.profile.fullName} avatar={props.profile.photos.small} content={props.message}/>
  </Col>

})

export default Post;