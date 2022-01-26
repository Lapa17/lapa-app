import * as axios from "axios";
import {Items} from "../components/Users/UsersContainer";

const instance = axios.default.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
})


export const profileAPI = {
    getProfile (userId:string){
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus (userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string){
        return instance.put('profile/status', {status:status})
    }
}
