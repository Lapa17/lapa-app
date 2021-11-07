import React from 'react'
import { connect } from 'react-redux'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator } from '../../redux/dialogs-reduser'
import { ActionType, DialogsType, StateDataType } from '../../redux/store'
import Dialogs from './Dialogs'



let mapStateProps = (state:StateDataType) => {

  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messagetTextareaData: state.dialogsPage.messageTextareaData
  }
}

let mapDispatchProps = (dispatch:(action:ActionType) => void) => {
 
  return {
    addMessage: () => {
      debugger
      return dispatch(addMessageActionCreator())},
    textareaChange: (text:string)=> {dispatch(changeMessageTextareaDataValueActionCreator(text))}
  }
}

const DialogsContainer = connect (mapStateProps,mapDispatchProps) (Dialogs);

export default DialogsContainer;