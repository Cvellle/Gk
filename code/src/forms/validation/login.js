import * as yup from 'yup'

const errorMessages = {
    email: {
        valid: 'E-mail nije validan!',
        required: 'E-mail je obavezan!',
    },
    password: {
        required: 'Lozinka je obavezna!',
    },
    confirmPassword: {
        match: 'Lozinke moraju biti iste!',
        required: 'Potvrda lozinke je obavezna!',
    },
}

const login = yup.object().shape({
    email: yup
        .string()
        .email(errorMessages.email.valid)
        .required(errorMessages.email.required),
    password: yup.string().required(errorMessages.password.required),
})

const forgotPassword = yup.object().shape({
    email: yup
        .string()
        .email(errorMessages.email.valid)
        .required(errorMessages.email.required),
})

const resetPassword = yup.object().shape({
    password: yup.string().required(errorMessages.password.required),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], errorMessages.confirmPassword.match)
        .required(errorMessages.confirmPassword.required),
})

export { login, forgotPassword, resetPassword }
