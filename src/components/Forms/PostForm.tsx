import {ErrorMessage, Field, Formik, FormikErrors, FormikHelpers, FormikProps, useFormik, withFormik} from "formik";
import * as yup from 'yup'
import React, {ChangeEvent} from "react";
import { postValidationSchema } from "../../utilits/validations/validationScheme";
import { addPost } from "../../redux/profile-reducer";
import { useDispatch } from "react-redux";
import s from '../Profile/Posts/Posts.module.css'
import { Col, Row } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';

type PostFormValueType = {
    post: string
}




const PostFormData = (props:FormikProps<PostFormValueType>) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        dirty,
    } = props

    const { TextArea } = Input;
    const dispatch = useDispatch()
    const formSubmit = (values: PostFormValueType, { setSubmitting }: FormikHelpers<{ post: string; }>) => {
        dispatch(addPost(values.post))
        setSubmitting(false);

    }
    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
        handleChange(e.target.value)
    }



    return (
        // <Formik
        //     initialValues={{ post: '' }}
        //     validateOnBlur
        //     validationSchema={postValidationSchema}
        //     onSubmit={formSubmit}
        // >
        //     {({ isSubmitting,
        //         errors,
        //         touched,
        //         dirty,
        //         isValid,
        //
        //     }) => (
        //         <Form>
        //             <Row>
        //                 <Col xs={{ span: 24, offset: 1 }}
        //                     md={{ span: 24, offset: 1 }}
        //                     lg={{ span: 18, offset: 1 }}
        //                     xl={{ span: 18, offset: 1 }}>
        //                     <Field name="post"
        //                         as="textarea"
        //                         placeholder='Enter a post...'
        //                         className={s.formTextarea}
        //                     />
        //
        //                     {touched.post && errors.post && <ErrorMessage name="post" component="div" />}
        //                 </Col>
        //                 <Col xs={{ span: 24, offset: 1 }}
        //                     md={{ span: 24, offset: 1 }}
        //                     lg={{ span: 4, offset: 1 }}
        //                     xl={{ span: 4, offset: 1 }}>
        //                     <button type="submit"
        //                         disabled={isSubmitting && !isValid && !dirty}
        //                         className={s.formButton}
        //                     >
        //                         Send
        //                     </button>
        //                 </Col>
        //             </Row>
        //         </Form>
        //     )}
        // </Formik>

         <Form onFinish={handleSubmit}>
            <Form.Item>
                <TextArea rows={4} name='post'
                          onChange={handleChange}
                          value={values.post}
                          />
            </Form.Item>
             {touched.post && errors.post && <div>{errors.post}</div>}
            <Button disabled={isSubmitting && !isValid && !dirty} type="primary" htmlType="submit">
                Add post
            </Button>
        </Form>
    )
}


export const PostForm = withFormik<PostFormValueType,PostFormValueType>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            post: props.post,
        };
    },
    validate: (values: PostFormValueType) => {
        let errors: FormikErrors<PostFormValueType> = {};
        if (!values.post) {
            errors.post = 'Required';
        } else if (values.post.length > 100) {
            errors.post = 'Too many symbols';
        }
        return errors;
    },

    handleSubmit: values => {
        console.log('SUBMIT',values.post)
    },
})(PostFormData);