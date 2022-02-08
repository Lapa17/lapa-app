import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuth } from '../../redux/auth-reduser';
import { setLoginData } from '../../redux/login-reduser';
import { StateDataType } from '../../redux/store';

type Inputs = {
    login: string,
    password: string,
    rememberMe: boolean
    captcha: boolean
};

type LoginPropsType = {
    captcha: string
    isAuth: boolean
    login: string,
    password: string,
    setLoginData: (data: {
        login: string,
        password: string,
    }) => void
    setAuth: (email: string, password: string, rememberMe:boolean, captcha: boolean) => void
}

const Login: React.FC<LoginPropsType> = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        loginRequest(data.login, data.password, data.rememberMe, data.captcha);
        props.setLoginData(data)
    }
    const loginRequest = (email: string, password: string, rememberMe:boolean, captcha:boolean) => {
        props.setAuth(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input defaultValue={''} {...register("login", { required: true })} />
                </div>
                {errors.login && <span>This field is required</span>}
                <div>
                    <input defaultValue={''} type='password' {...register("password", { required: true })} />
                </div>
                {errors.password && <span>This field is required</span>}
                <div>
                    <input type='checkbox' {...register("rememberMe")} />
                </div>
                <div><img src={props.captcha}/></div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}


let mapStateToProps = (state: StateDataType | any) => ({
    login: state.login.data.login,
    password: state.login.data.password,
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, { setLoginData, setAuth })(Login);;


