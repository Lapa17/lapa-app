import * as axios from "axios";
import {Items} from "../components/Users/UsersContainer";

const instance = axios.default.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY" : "ed0fa8fa-ddbb-478a-b370-1f41a9c286be"}
})


export const profileAPI = {
    getProfile (userId:string){
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus (userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string){
        return instance.put(`profile/status`, {status:status})
    }
}
