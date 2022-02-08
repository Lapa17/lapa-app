import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";

type PostFormValueType = {
    post: string
}

type PostFormType = {
    addPost: (post: string) => void
}

export const PostForm = ({addPost, ...props}: PostFormType) => {

    const formSubmit = (values: PostFormValueType, {setSubmitting}: FormikHelpers<{ post: string; }>) => {
        addPost(values.post)
        setSubmitting(false);

    }

    return (
        <Formik
            initialValues={{post: ''}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={formSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field name="post" as="textarea" className="form-textarea" placeholder='Enter a post...'/>
                    <ErrorMessage name="textarea" component="div"/>
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}