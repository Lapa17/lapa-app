import * as axios from "axios";
import {Items} from "../components/Users/UsersContainer";

const instance = axios.default.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
})


export const authAPI = {
    getAuth (){
        return instance.get(`auth/me`).then(response => response.data)
    },
    logining(params: {email: string, password: string}){
        return instance.post(`/auth/login`, {...params})
    }
}
