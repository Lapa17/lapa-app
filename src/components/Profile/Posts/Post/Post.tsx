import React from 'react';
import { PostMesageType } from '../../../../redux/store';
import {Col} from "antd";
import { PostComment } from './PostComment';


const Post:React.FC<PostMesageType> = React.memo((props) => { 
  return <Col className="gutter-row" 
  xs={{ span: 24, offset: 1 }} 
  md={{span: 10, offset: 1}} 
  lg={{ span: 7, offset: 1 }}
  xl={{ span: 5, offset: 1 }}
  >
      <PostComment author={props.profile.fullName} avatar={props.profile.photos.small} content={props.message}/>
  </Col>

})

export default Post;