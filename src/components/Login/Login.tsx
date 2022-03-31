import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuth } from '../../redux/auth-reducer';
import { StateDataType } from '../../redux/store';
import { loginningValidationSchema } from '../../utilits/validations/validationScheme';
import { yupResolver } from '@hookform/resolvers/yup'
import {getCaptchaUrl, setLoginData} from "../../redux/login-reducer";

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
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver (loginningValidationSchema)
    });

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
    
    return (
        
        <div>
            <h1>LOGIN PAGE</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input defaultValue={''} {...register("login", { required: true, pattern: /^[A-Za-z]+$/i })} />
                </div>
                {props.errorMessage && <span>{props.errorMessage}</span>}
                {errors.login && <span>This field is required</span>}
                <div>
                    <input defaultValue={''} type='password' {...register("password", { required: true })} />
                </div>
                {errors.password && <span>{errors.password.message}</span>}
                <div>
                    <input type='checkbox' {...register("rememberMe")} />
                </div>
                {props.captchaUrl && <div>
                    <img src={props.captchaUrl} style={{width:'200px'}}/>
                    <input type='text' {...register("captcha")}/>
                </div>}
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
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


