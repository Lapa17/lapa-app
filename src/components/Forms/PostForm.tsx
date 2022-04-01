import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as yup from 'yup'
import React from "react";
import { postValidationSchema } from "../../utilits/validations/validationScheme";
import { addPost } from "../../redux/profile-reducer";
import { useDispatch } from "react-redux";
import s from '../Profile/Posts/Posts.module.css'
import { Col, Row } from "antd";

type PostFormValueType = {
    post: string
}




export const PostForm = () => {

    const dispatch = useDispatch()
    const formSubmit = (values: PostFormValueType, { setSubmitting }: FormikHelpers<{ post: string; }>) => {
        dispatch(addPost(values.post))
        setSubmitting(false);

    }



    return (
        <Formik
            initialValues={{ post: '' }}
            validateOnBlur
            validationSchema={postValidationSchema}
            onSubmit={formSubmit}
        >
            {({ isSubmitting,
                errors,
                touched,
                dirty,
                isValid,

            }) => (
                <Form>
                    <Row>
                        <Col xs={{ span: 24, offset: 1 }}
                            md={{ span: 24, offset: 1 }}
                            lg={{ span: 18, offset: 1 }}
                            xl={{ span: 18, offset: 1 }}>
                            <Field name="post"
                                as="textarea"
                                placeholder='Enter a post...'
                                className={s.formTextarea}
                            />

                            {touched.post && errors.post && <ErrorMessage name="post" component="div" />}
                        </Col>
                        <Col xs={{ span: 24, offset: 1 }}
                            md={{ span: 24, offset: 1 }}
                            lg={{ span: 4, offset: 1 }}
                            xl={{ span: 4, offset: 1 }}>
                            <button type="submit"
                                disabled={isSubmitting && !isValid && !dirty}
                                className={s.formButton}
                            >
                                Send
                            </button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}
