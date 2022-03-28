import { Dispatch } from "redux"
import { v1 } from "uuid"
import { DialogsType, } from "./store"

const ADD_MESSAGE = 'lapa-app/dialogs-reducer/ADD-MESSAGE'



export type DialogsActionType = AddMessageActionType

type AddMessageActionType = ReturnType<typeof addMessage>


export const addMessage = (message: string) => ({ type: ADD_MESSAGE, message } as const)

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

}

const dialogsReducer = (state: DialogsType = initialDialogState, action: DialogsActionType) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: v1(),
        message: action.message
      }
      return {...state, messages: [...state.messages, newMessage] }

    }
    default:
      return state;
  }
}
export default dialogsReducer;


export const AddMessage = (message:string) => {
  return (dispatch: Dispatch<DialogsActionType>) => {
    dispatch(addMessage(message))
  }
}