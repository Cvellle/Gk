import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core'
import { Email, Lock, Visibility } from '@material-ui/icons'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import { FormikTextInput } from '@inputs'
import { Formik, Field, ErrorMessage } from 'formik'

import { login, forgotPassword, resetPassword } from '../validation'

import useReactRouter from 'use-react-router'
import style from '@assets/jss/forms/loginForm'
import { makeStyles } from '@material-ui/core/styles';

import queryString from 'query-string'
import { POTENTIAL_USERS_QUERY, USERS_QUERY } from '@apollo/server/queries'
import { useQuery } from 'react-apollo-hooks'



const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
}

const fields = [
    {
        icon: Email,
        name: 'email',
        label: 'Email',
        component: FormikTextInput,
        mode: ['login', 'forgotPassword'],
        type: 'email',
    },
    {
        icon: Lock,
        name: 'password',
        label: 'Lozinka',
        component: FormikTextInput,
        mode: ['login', 'registration'],
        type: 'password',
    },
    {
        icon: Lock,
        name: 'confirmPassword',
        label: 'Potvrdi lozinku',
        component: FormikTextInput,
        mode: ['registration'],
        type: 'password',
    },
]

const validationSchema = {
    login,
    forgotPassword,
    registration: resetPassword,
}


//
// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #A6D001 30%, #1B5B8E 90%)',
//     //   borderRadius: 3,
//     //   border: 0,
//     //   color: 'white',
//     //   height: 48,
//     //   padding: '0 30px',
//     //   boxShadow: '0 1px 1px 2px #A6D001',
//     },
//     notchedOutline:{
//         border:'3px solid blue'
//     }
//   });


const useStyles = makeStyles({
    root: {
        // '& .MuiInput-underline:after':{

        // }
        '& .MuiFormLabel-asterisk.Mui-error': {
            color: '#1B5B8E'
        },
        '& .MuiFormLabel-root.Mui-error': {
            color: '#1B5B8E'
        },
        '& .MuiFormHelperText-root': {
            display: 'none'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid #1B5B8E',
        },
        '& .MuiInputBase-input': {
            color: '#1B5B8E',
        },
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid #1B5B8E',
        },
        '& .MuiInput-underline:hover': {
            borderBottom: '.2px solid #1B5B8E',
        },
        '& label.Mui-focused': {
            color: '#1B5B8E',
        },
        '& label': {
            color: '#1B5B8E',
        },

        '& .MuiInput-underline:after': {
            left: "0",
            right: "0",
            bottom: "0",
            content: "",
            position: "absolute",
            transform: "scaleX(0)",
            transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
            borderBottom: "2px solid gold",
            pointerEvents: "none",

        },
        '& .MuiOutlinedInput-root': {

            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})


//


const LoginForm = ({
    classes: c,
    mode,
    loginUser,
    loginUserLocal,
    createUser,
}) => {

    const [autoLogin, setAutoLogin] = useState(false)
    const [hasErrors, setErrorState] = useState(false)
    const [msg, setMsg] = useState(false)


    const { history, location } = useReactRouter()
    const regKey = window.location.href
        .split('=')
        .slice(-2)
        .join(',')
        .split('&')
        .shift()

    const { data } = useQuery(POTENTIAL_USERS_QUERY, { variables: { search: regKey } })

    useEffect(() => {
        if (data && data.getPotentialUsers && data.getPotentialUsers.docs) {
            if (data.getPotentialUsers.totalDocs !== 1) {
                history.push(`/login`)
            }
            if (window.location.pathname !== "/login") {
                sessionStorage.setItem('emailToSearchGitKids', data.getPotentialUsers.docs[0].email)
                setAutoLogin(true)  
            }
        }
    }, []);

    const classesField = useStyles();
    const handleSubmit = async (
        { email, password, confirmPassword },
        { setSubmitting },
    ) => {
        try {
            switch (mode) {
                case 'login':
                    const {
                        data: { login },
                    } = await loginUser({
                        variables: { data: { email, password } },
                    })

                    window.localStorage.setItem('currentUserId', login.user['_id'])

                    await loginUserLocal({
                        variables: {
                            firstName: login.user.firstName,
                            lastName: login.user.lastName,
                            currentRole: login.user.currentRole,
                            // timeZone: login.user.timeZone,
                            roles: login.user.roles,
                        },
                    })
                    history.push('/')
                    break

                case 'registration':
                    const {
                        registrationKey,
                    } = queryString.parse(location.search, {
                        ignorePrefix: true,
                    })
                    await createUser({
                        variables: { password, registrationKey },
                        refetchQueries: [{ query: POTENTIAL_USERS_QUERY, variables: { search: regKey } }]
                    })
                    setMsg(true)
                    setAutoLogin(true)
                    setTimeout(() => history.push(`/`), 3000)
                    break
                default:
                    break
            }

            setSubmitting(false)
            console.log(document.cookie)
            setErrorState(false)
        } catch (error) {
            setSubmitting(false)
            console.log(error.message)
            setErrorState(true)

        }
    }

    return (
        <>
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema[mode]}
            render={({ handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} noValidate>

                    <div className={c.content}>

                        {<p style={{ color: 'red', visibility: 'visible', height: '15px', textAlign: 'center' }}>{hasErrors ? 'Pogrešan email ili lozinka!' : ' '}</p>}

                        {fields
                            .filter(field => field.mode.includes(mode))
                            .map(inputField => {
                                return (
                                    <GridContainer
                                        spacing={1}
                                        alignItems="center"
                                        justify="space-between"
                                        key={inputField.name}
                                    >
                                        <GridItem md={1} lg={1}>
                                            <inputField.icon
                                                className={c.icon}
                                            />
                                        </GridItem>
                                        <GridItem md={10} lg={10}>
                                            <Field
                                                onFocus={() => setErrorState(false)}
                                                required
                                                name={inputField.name}
                                                label={inputField.label}
                                                component={inputField.component}
                                                type={inputField.type}
                                                classes={{
                                                    root: classesField.root,
                                                    // class name, e.g. `classes-nesting-root-x`

                                                }}

                                            />
                                            <div style={{ height: '14px' }}>
                                                <ErrorMessage name={inputField.name}>{msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}</ErrorMessage>
                                            </div>

                                        </GridItem>
                                    </GridContainer>
                                )
                            })}
                    </div>

                    <GridContainer justify="center">
                        <Button

                            type="submit"
                            disabled={isSubmitting}
                            style={{ background: '#A6D000' }}
                        >
                            {mode === 'login' ? 'Uloguj se' : 'Potvrdi'}
                        </Button>
                    </GridContainer>
                    <GridContainer justify="center">
                        {mode === 'login' ?
                            null :
                            (
                                msg ?
                                    <p style={{ transform: 'scale(1.15)', color: 'limegreen', visibility: 'visible', textAlign: 'center', marginTop: '10px' }}>
                                        Uspešno kreirana lozinka!<br />
                                        Sada se ulogujte na sledecoj stranici
                                </p> :
                                    <p style={{ marginTop: '10px' }}> </p>
                            )

                        }
                    </GridContainer>
                </form>
            )}
        />
        {/* { (sessionStorage.getItem('emailToSearchGitKids') !== null && autoLogin) ? 
            <UsersQuery/> 
            : 
            null
        } */}
         { ((sessionStorage.getItem('emailToSearchGitKids') !== null) && autoLogin)
            && 
            <UsersQuery/> 
        }
        </>
    )
}

const UsersQuery = () => {
    const { data } = useQuery(USERS_QUERY, {
        variables: {
            search: sessionStorage.getItem('emailToSearchGitKids')
        }
    })
    let currentUserId = data.users.docs[0]._id
    window.localStorage.setItem('currentUserId', currentUserId)

    return null
}


export default withStyles(style)(LoginForm)
