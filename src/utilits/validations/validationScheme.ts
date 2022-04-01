import * as yup from "yup";

export const postValidationSchema = yup.object().shape({
    post: yup.string()
        .max(100, 'Max length is 100 symbols!')


})

export const messageValidationSchema = yup.object().shape({
    message: yup.string()
        .max(100, 'Max length is 100 symbols!')
})


export const loginningValidationSchema = yup.object({
    login: yup.string().email('Enter valid email'),
    password: yup.string().min(6,'Min length is 6 symbols!' )
}).required('Required field')