import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authAPI } from '../../api/authAPI';
import { setAuth, setAuthChange } from '../../redux/auth-reduser';
import { setLoginData } from '../../redux/login-reduser';
import { StateDataType } from '../../redux/store';

type Inputs = {
    login: string,
    password: string,
};

type LoginPropsType = {
    isAuth: boolean
    login: string,
    password: string,
    setLoginData: (data: {
        login: string,
        password: string,
    }) => void
    setAuth: (email: string, password: string) => void
}

const Login: React.FC<LoginPropsType> = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        loginRequest(data.login, data.password);
        props.setLoginData(data)

    }

    const loginRequest = (email: string, password: string) => {
        props.setAuth(email, password)
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
                    <input defaultValue={''} {...register("password", { required: true })} />
                </div>
                {errors.password && <span>This field is required</span>}
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
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setLoginData, setAuth })(Login);;


