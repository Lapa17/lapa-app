import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
})


export const authAPI = {
    getAuth (){
        return instance.get(`auth/me`).then(response => response.data)
    },
    logining(params: {email: string, password: string, rememberMe?:boolean}){
        return instance.post(`/auth/login`, {...params})
    },
    setUnlogging(){
        return instance.delete(`/auth/login`)
    },
}
