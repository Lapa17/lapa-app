import axios from "axios";
import {Items} from "../components/Users/UsersContainer";

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY" : "ed0fa8fa-ddbb-478a-b370-1f41a9c286be"}
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get<Items>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    setFollow (id:number) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    setUnFollow (id:number) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
