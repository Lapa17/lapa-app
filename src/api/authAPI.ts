import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
})


export const authAPI = {
    getAuth (){
        return instance.get(`auth/me`).then(response => response.data)
    },
    logining(params: {email: string, password: string, rememberMe:boolean, captcha: boolean}){
        return instance.post(`/auth/login`, {...params, captcha: true})
    },
    setUnlogging(){
        return instance.delete(`/auth/login`)
    },
    getCaptcha (){
        return instance.get(`/security/get-captcha-url`).then(response => response.data)
    },
}
