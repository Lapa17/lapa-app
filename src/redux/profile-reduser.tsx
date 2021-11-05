import { v1 } from "uuid"
import { ActionType,PostType } from "./state"

const ADD_POST: string = 'ADD-POST'
const PROFILE_TEXTAREA_CHANGE: string = 'PROFILE-TEXAREA-CHANGE'

export const addPostActionCreator = () => ({type:ADD_POST,value:''})
export const changeProfileTextareaDataValueActionCreator = (text:string) => ({type:PROFILE_TEXTAREA_CHANGE,value:text})

const profileReduser = (state: PostType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                postMessage: state.profileTextareaData,
                likes: 0
            }
            state.posts.push(newPost);
            return state;
        case PROFILE_TEXTAREA_CHANGE:
            state.profileTextareaData = action.value;
            return state;
        default: 
        return state;
    }
}

export default profileReduser;