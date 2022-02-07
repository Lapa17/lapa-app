import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { Redirect } from 'react-router-dom'
import { PostMessageType } from '../../redux/store'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs: React.FC<PostMessageType> = ({ dialogs, messages, addMessage, textareaChange, messagetTextareaData, ...props }) => {

    const dialogsElements = dialogs.map((dialogs) => <Dialog id={dialogs.id} name={dialogs.name} />)
    const messageElements = messages.map((message) => <Message message={message.message} id={message.id} />)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div className={s.item}>
                <MessageForm addMessage={addMessage}/>
            </div>
        </div>
    )
}

type MessageFormValueType = {
    message: string
}

type MessageFormType = {
    addMessage: (message: string) => void
}


const MessageForm = ({addMessage, ...props}:MessageFormType) => {

    const formSubmit = (values: MessageFormValueType, { setSubmitting }: FormikHelpers<{ message: string; }>) => {
            addMessage(values.message)
            setSubmitting(false);

    }

    return (
        <Formik
            initialValues={{ message: '' }}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={formSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field name="message" as="textarea" className="form-textarea"  placeholder='Enter a message...'/>
                    <ErrorMessage name="textarea" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default Dialogs;