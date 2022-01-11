import React from 'react'
import { connect } from 'react-redux'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator } from '../../redux/dialogs-reduser'
import { ActionType, StateDataType } from '../../redux/store'
import Dialogs from './Dialogs'



let mapStateProps = (state:StateDataType) => {

  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messagetTextareaData: state.dialogsPage.messageTextareaData,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchProps = (dispatch:(action:ActionType) => void) => {
 
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    textareaChange: (text:string)=> dispatch(changeMessageTextareaDataValueActionCreator(text))
  }
}

const DialogsContainer = connect (mapStateProps,mapDispatchProps) (Dialogs);

export default DialogsContainer;