import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import {messageValidationSchema} from "../../utilits/validations/validationScheme";
import {addMessage} from "../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";
import useAnalyticsEventTracker from "../../utilits/ga/useAnalyticsEventTracker";

type MessageFormValueType = {
    message: string
}

export const MessageForm = () => {

    const gaEventTracker = useAnalyticsEventTracker('Message form')
    const dispatch = useDispatch()
    const formSubmit = (values: MessageFormValueType, {setSubmitting}: FormikHelpers<{ message: string; }>) => {
        gaEventTracker('add message', values.message)
        dispatch(addMessage(values.message))
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