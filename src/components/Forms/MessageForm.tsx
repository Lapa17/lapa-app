import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import {messageValidationSchema} from "../../utilits/validations/validationScheme";

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
            validateOnBlur
            validationSchema={messageValidationSchema}
            onSubmit={formSubmit}
        >
            {({isSubmitting,
                  errors,
                  touched,
                  dirty,
                  isValid,}) => (
                <Form>
                    <Field name="message" as="textarea" className="form-textarea" placeholder='Enter a message...'/>
                    {touched.message && errors.message && <ErrorMessage name="message" component="div" />}
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}