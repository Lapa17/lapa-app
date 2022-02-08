import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";

type MessageFormValueType = {
    message: string
}
type MessageFormType = {
    addMessage: (message: string) => void
}
export const MessageForm = ({addMessage, ...props}: MessageFormType) => {

    const formSubmit = (values: MessageFormValueType, {setSubmitting}: FormikHelpers<{ message: string; }>) => {
        addMessage(values.message)
        setSubmitting(false);

    }

    return (
        <Formik
            initialValues={{message: ''}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={formSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field name="message" as="textarea" className="form-textarea" placeholder='Enter a message...'/>
                    <ErrorMessage name="textarea" component="div"/>
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}