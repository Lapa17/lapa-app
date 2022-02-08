import * as yup from "yup";

export const postValidationSchema = yup.object().shape({
    post: yup.string()
        .max(100, 'Max length is 100 symbols!')
        .required('Required field'),


})

export const messageValidationSchema = yup.object().shape({
    message: yup.string()
        .max(100, 'Max length is 100 symbols!')
        .required('Required field'),
})