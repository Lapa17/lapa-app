import React from 'react';
import { PostMesageType } from '../../../../redux/store';
import {Demo} from "../Posts";
import {Col} from "antd";


const Post:React.FC<PostMesageType> = React.memo((props) => { 
  return <Col span={6}>
      <Demo author={'asd'} avatar={'asda'} content={props.message}/>
  </Col>

})

export default Post;