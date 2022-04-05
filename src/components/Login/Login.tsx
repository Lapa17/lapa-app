import React, {useEffect, useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuth } from '../../redux/auth-reducer';
import { StateDataType } from '../../redux/store';
import { loginningValidationSchema } from '../../utilits/validations/validationScheme';
import { yupResolver } from '@hookform/resolvers/yup'
import {getCaptchaUrl, setLoginData} from "../../redux/login-reducer";
import {Button, Card, Checkbox, Col, Form, Input, Row} from "antd";

type Inputs = {
    login: string,
    password: string,
    rememberMe: boolean
    captcha?: string
};

type LoginPropsType = {
    isAuth: boolean
    login: string,
    password: string,
    errorMessage?:string
    setLoginData: (data: {
        login: string,
        password: string,
    }) => void
    setAuth: (email: string, password: string, rememberMe:boolean, captcha?: string) => void
    getCaptchaUrl: ()=> void
    captchaUrl: string
}

const Login: React.FC<LoginPropsType> = (props) => {
    // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    //     resolver: yupResolver (loginningValidationSchema)
    // });
    const [form] = Form.useForm()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        loginRequest(data.login, data.password, data.rememberMe, data.captcha);
        props.setLoginData(data)
    }
    const loginRequest = (email: string, password: string, rememberMe:boolean, captcha?:string) => {
        props.setAuth(email, password, rememberMe,captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    // {pattern: /^[A-Za-z]+$/i , message: 'Incorrect symbols'},
    return (
        <Row justify={"center"} style={{height:'90vh'}}>
        <Col xs={{ span: 23, offset: 1 }}
             md={{ span: 23, offset: 1 }}
             lg={{ span: 8, offset: 1 }}
             xl={{ span: 8, offset: 1 }}>
            <Card style={{boxShadow: 'rgb(0 0 0 / 50%) 5px 6px 10px -5px', textAlign:"center"}}>
            <h1>LOGIN PAGE</h1>
            <Form onFinish={onSubmit} form={form}>
                <Form.Item name="login" rules={[{required: true, message:'You need to write your Email'},
                    {type:'email', message: 'Must be Email' }]}>
                    <Input name="login" placeholder={'Email'}/>
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message:'You need to write your password'}]}>
                    <Input name="password" placeholder={'Password'}/>
                </Form.Item>
                <Form.Item name="rememberMe">
                    <Checkbox name="rememberMe">Remember me</Checkbox>
                </Form.Item>
                {props.captchaUrl && <Form.Item name="captcha">
                    <img src={props.captchaUrl} style={{width:'200px'}}/>
                    <Input type='text' name="captcha"/>
                </Form.Item>}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </Card>
        </Col>
        </Row>
    )
}


let mapStateToProps = (state: StateDataType) => ({
    login: state.login.data.login,
    password: state.login.data.password,
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.errorMessage,
    captchaUrl: state.login.captchaUrl
})

export default connect(mapStateToProps, { setLoginData, setAuth, getCaptchaUrl })(Login);;


