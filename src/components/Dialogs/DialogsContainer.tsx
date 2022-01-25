import React from 'react'
import { connect, ConnectedComponent } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator } from '../../redux/dialogs-reduser'
import { ActionType, StateDataType } from '../../redux/store'
import Dialogs from './Dialogs'



let mapStateProps = (state:StateDataType) => {

  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messagetTextareaData: state.dialogsPage.messageTextareaData,
  }
}

let mapDispatchProps = (dispatch:(action:ActionType) => void) => {
 
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    textareaChange: (text:string)=> dispatch(changeMessageTextareaDataValueActionCreator(text))
  }
}

const DialogsContainer = compose<ConnectedComponent<(props: any) => JSX.Element, Omit<any, "isAuth" | "dispatch">>>(
  connect (mapStateProps,mapDispatchProps),
  withAuthRedirect)(Dialogs);

export default DialogsContainer;