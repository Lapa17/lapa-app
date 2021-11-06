import React from 'react'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator } from '../../redux/dialogs-reduser'
import { ReduxStoreType } from '../../redux/store'
import Dialogs from './Dialogs'




const DialogsContainer: React.FC<ReduxStoreType> = (props) => {

    let state = props.store.getState().dialogsPage

    const changeMessageTextareaDataValue = (text:string) => {
        props.store.dispatch(changeMessageTextareaDataValueActionCreator(text))
      }
    
    let addMessage = () => {
        if (state.messageTextareaData !== '') {
          props.store.dispatch(addMessageActionCreator())
          props.store.dispatch(changeMessageTextareaDataValueActionCreator(''))
        }
    
      }
    


    return (
       <Dialogs addMessage={addMessage} textareaChange={changeMessageTextareaDataValue} dialogs={state.dialogs} messages={state.messages} messagetTextareaData={state.messageTextareaData}/>
    )
}

export default DialogsContainer;