import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY" : "a60fb14a-6f41-481f-9441-d849223c43b5"}
})


export const profileAPI = {
    getProfile (userId:number){
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus (userId:number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string){
        return instance.put(`profile/status`, {status})
    },
    updatePhoto (image: File){
        debugger
        const formData = new FormData()
        formData.append('image', image)
        return instance.put(`profile/photo`, formData , {headers:{
            "Content-type": "multipart/form-data"
        }})
    },
    updateProfile (profile: UpdateProfileType){
        return instance.put(`profile`, profile)
    },

}

export type UpdateProfileType = {
    aboutMe: string
    userId: number
    fullName: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
    contacts:{
        facebook?: string
        github?: string
        instagram?: string
        mainLink?: string
        twitter?: string
        vk?: string
        website?: string
        youtube?: string
    }
}