import React from 'react'
import { addMessageActionCreator, changeMessageTextareaDataValueActionCreator } from '../../redux/dialogs-reduser'
import { ReduxStoreType } from '../../redux/store'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'




const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage

          const changeMessageTextareaDataValue = (text: string) => {
            store.dispatch(changeMessageTextareaDataValueActionCreator(text))
          }

          let addMessage = () => {
            if (state.messageTextareaData !== '') {
              store.dispatch(addMessageActionCreator())
              store.dispatch(changeMessageTextareaDataValueActionCreator(''))
            }

          }

          return <Dialogs addMessage={addMessage} textareaChange={changeMessageTextareaDataValue} dialogs={state.dialogs} messages={state.messages} messagetTextareaData={state.messageTextareaData} />
        }
      }
    </StoreContext.Consumer>

  )
}

export default DialogsContainer;