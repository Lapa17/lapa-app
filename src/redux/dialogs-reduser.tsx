import { v1 } from "uuid"
import { ActionType, DialogsType, } from "./state"

const ADD_MESSAGE:string = 'ADD-MESSAGE'
const MESSAGE_TEXTAREA_CHANGE:string  ='MESSAGE-TEXAREA-CHANGE'

export const addMessageActionCreator = () => ({type:ADD_MESSAGE,value:''})
export const changeMessageTextareaDataValueActionCreator = (text:string) => ({type:MESSAGE_TEXTAREA_CHANGE,value:text})

const dialogsReduser = (state:DialogsType, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: v1(),
                message:state.messageTextareaData,
              }
              state.messages.push(newMessage)
              return state;
        case MESSAGE_TEXTAREA_CHANGE:
            state.messageTextareaData = action.value;
            return state;
        default:
            return state;
    }
}
export default dialogsReduser;