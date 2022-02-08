import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import * as yup from 'yup'
import React from "react";
import {postValidationSchema} from "../../utilits/validations/validationScheme";

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
            validateOnBlur
            validationSchema={postValidationSchema}
            onSubmit={formSubmit}
        >
            {({isSubmitting,
                  errors,
                  touched,
                  dirty,
                  isValid,

            }) => (
                <Form>
                    <Field name="post"
                           as="textarea"
                           className="form-textarea"
                           placeholder='Enter a post...'
                    />
                    {touched.post && errors.post && <ErrorMessage name="post" component="div" />}
                    <button type="submit"
                            disabled={isSubmitting && !isValid && !dirty}
                    >
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}