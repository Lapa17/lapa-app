import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from 'react-redux';
import { setLoginData } from '../../redux/login-reduser';
import { StateDataType } from '../../redux/store';

type Inputs = {
    login: string,
    password: string,
};

type LoginPropsType = {
    login: string,
    password: string,
    setLoginData: (data:{login: string,
        password: string,})=> void
}

const Login: React.FC<LoginPropsType> = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => props.setLoginData(data);

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div><input defaultValue={props.login} {...register("login", { required: true })} /></div>
                {errors.login && <span>This field is required</span>}
                {/* include validation with required or other standard HTML validation rules */}
                <div><input defaultValue={props.password} {...register("password", { required: true })} /></div>
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}

                <div><input type="submit" /></div>
            </form>
        </div>
    )
}


let mapStateToProps= (state:StateDataType) => ({
    login: state.login.data.login,
    password: state.login.data.password
  })

export default connect(mapStateToProps, {setLoginData})(Login);;


