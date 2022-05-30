import React, { ChangeEvent, useEffect, useState } from "react";
import { addPost } from "../../redux/profile-reducer";
import { useDispatch } from "react-redux";
import s from '../Profile/Posts/Posts.module.css'
import { Col, Row } from "antd";
import { Form, Input, Button, message, Checkbox } from 'antd';
import {SendOutlined} from '@ant-design/icons'

export const PostForm = () => {

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});


    useEffect(() => {
        forceUpdate({});
    }, []);

    const { TextArea } = Input;
    const dispatch = useDispatch()
    const formSubmit = (values: { post: string }) => {
        console.log('Success:', values);
        dispatch(addPost(values.post))
        form.resetFields()
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('Post must be maximum 100 characters.')
    };
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        form.setFieldsValue({ post: e.currentTarget.value })
    }

    const addPostClass = `${s.buttonText} addPost`

    return (
        <Form onFinish={formSubmit} form={form}
            onFinishFailed={onFinishFailed} >
            <Row justify="center" align="middle">
                <Col xs={{ span: 17, offset: 1 }}
                        md={{ span: 17, offset: 1 }}
                        lg={{ span: 17, offset: 1 }}
                        xl={{ span: 17, offset: 1 }}>
                    <Form.Item
                        rules={[{ max: 100, message: 'Post must be maximum 100 characters.' }]}
                        name='post'
                        style={{marginBottom: 0}}>
                        <TextArea rows={2} name='post' onChange={onChange} required style={{borderRadius: 10}}/>
                    </Form.Item>
                </Col>
                <Col xs={{ span: 5, offset: 1 }}
                        md={{ span: 5, offset: 1 }}
                        lg={{ span: 5, offset: 1 }}
                        xl={{ span: 5, offset: 1 }}>
                    <Form.Item style={{marginBottom: 0}}>
                        <Button type="primary" htmlType="submit" icon={<SendOutlined className={s.buttonImg}/>}>
                            <span className={addPostClass}>Add post</span>
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}