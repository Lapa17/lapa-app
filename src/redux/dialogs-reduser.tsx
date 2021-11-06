import { v1 } from "uuid"
import { ActionType, DialogsType, } from "./store"

const ADD_MESSAGE:string = 'ADD-MESSAGE'
const MESSAGE_TEXTAREA_CHANGE:string  ='MESSAGE-TEXAREA-CHANGE'

export const addMessageActionCreator = () => ({type:ADD_MESSAGE,value:''})
export const changeMessageTextareaDataValueActionCreator = (text:string) => ({type:MESSAGE_TEXTAREA_CHANGE,value:text})

const initialDialogState = {
    dialogs: [
      { id: v1(), name: 'Pashka' },
      { id: v1(), name: 'Maks' },
      { id: v1(), name: 'Vlados' },
      { id: v1(), name: 'Leha' },
      { id: v1(), name: 'Dima' }
    ],
    messages: [
      { id: v1(), message: 'Hi' },
      { id: v1(), message: 'How are you?' },
      { id: v1(), message: 'I am fine' }
    ],
    messageTextareaData:''
  }

const dialogsReduser = (state:DialogsType = initialDialogState, action: ActionType) => {
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