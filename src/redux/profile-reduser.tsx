import { v1 } from "uuid"
import { ActionType,PostType } from "./store"

const ADD_POST: string = 'ADD-POST'
const PROFILE_TEXTAREA_CHANGE: string = 'PROFILE-TEXAREA-CHANGE'

export const addPostActionCreator = () => ({type:ADD_POST,value:''})
export const changeProfileTextareaDataValueActionCreator = (text:string) => ({type:PROFILE_TEXTAREA_CHANGE,value:text})


const initialProfileState = {
    posts: [
      { id: v1(), postMessage: "Hi, I'm Pavel", likes: 10 },
      { id: v1(), postMessage: "Let's go to learn a React", likes: 9 },
      { id: v1(), postMessage: "Also we need improve our html/css skills", likes: 11 },
      { id: v1(), postMessage: "Then we'll learn Redux", likes: 22 }
    ], 
    myPost: 'My posts', 
    newPost: 'New post',
    profileTextareaData: '',
  }

const profileReduser = (state: PostType = initialProfileState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: v1(),
                postMessage: state.profileTextareaData,
                likes: 0
            }
            // let stateCopy = {...state}
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost);
            // stateCopy.profileTextareaData = ''
            // return stateCopy;
            return {...state, posts: [...state.posts, newPost], profileTextareaData: ''}
        }
        case PROFILE_TEXTAREA_CHANGE:{
            // let stateCopy = {...state}
            // stateCopy.profileTextareaData = action.value;
            // return stateCopy;
            return {...state,profileTextareaData: action.value }
        }
        default: 
        return state;
    }
}

export default profileReduser;