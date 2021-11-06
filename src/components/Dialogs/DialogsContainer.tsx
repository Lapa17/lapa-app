import React from 'react'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator } from '../../redux/dialogs-reduser'
import { PostMessageType, ReduxStoreType } from '../../redux/store'
import Dialogs from './Dialogs'




const DialogsContainer: React.FC<ReduxStoreType> = (props) => {


    const changeMessageTextareaDataValue = (text:string) => {
        props.store.dispatch(changeMessageTextareaDataValueActionCreator(text))
      }
    
    let addMessage = () => {
        if (props.store.getState().dialogsPage.messageTextareaData !== '') {
          props.store.dispatch(addMessageActionCreator())
          props.store.dispatch(changeMessageTextareaDataValueActionCreator(''))
        }
    
      }
    


    return (
       <Dialogs addMessage={addMessage} textareaChange={changeMessageTextareaDataValue} dialogs={props.store.getState().dialogsPage.dialogs} messages={props.store.getState().dialogsPage.messages} messagetTextareaData={props.store.getState().dialogsPage.messageTextareaData}/>
    )
}

export default DialogsContainer;