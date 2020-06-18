import React, {useState } from 'react'
import { withStyles } from '@material-ui/core'

import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import { FormikTextInput, FormikDatePicker } from '@inputs'
import Card from '@components/Card/Card'
import { Formik, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { UPDATE_PROFILE } from '@apollo/server/mutations/user'
import { USERS_QUERY } from '@apollo/server/queries'

import useReactRouter from 'use-react-router'

import style from '@assets/jss/forms/addUserForm'

import { useMutation, useQuery } from 'react-apollo-hooks'

import { makeStyles } from '@material-ui/core/styles'

const validationSchema = Yup.object().shape({
    oldPassword:Yup.string().required('Lozinka je obavezna!'),
    firstName: Yup.string().required('Ime je obavezno!'),
    lastName: Yup.string().required('Prezime je obavezno!'),
    city: Yup.string().required('Grad je obavezan!'),
    phone: Yup.string().required('Telefon je obavezan!'),
    birthDate: Yup.string().required('Datum rođenja je obavezan!'),
    postalCode: Yup.string().required('Poštanski kod je obavezan!')
})

const initialValues = {
    oldPassword: '',
    newPassword: '',
    firstName: '',
    lastName: '',
    city: '',
    phone: '',
    birthDate: '',
    postalCode: '',
}

const useStyles = makeStyles({
    root: {
      '& .MuiFormHelperText-root': {
        display: 'none',
      },
    },
  })

const UpdateProfileForm = ({ classes: c }) => {

    const classesField = useStyles()

    const { data } = useQuery(USERS_QUERY, {
        variables: { id: window.localStorage["currentUserId"] },
    })

    if (data && data.users) {
        console.log(data.users.docs[0])
        initialValues.firstName = data.users.docs[0].firstName
        initialValues.lastName = data.users.docs[0].lastName
        initialValues.city = data.users.docs[0].city
        initialValues.phone = data.users.docs[0].phone
        initialValues.birthDate = data.users.docs[0].birthDate.toString()
        initialValues.postalCode = data.users.docs[0].postalCode
    }

    const { history } = useReactRouter()
    const [hasErrors,setErrorState] = useState(false)
    const updateProfileMutation = useMutation(UPDATE_PROFILE)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                try {
                     await updateProfileMutation({
                        variables: values,
                        refetchQueries: [
                            { query: USERS_QUERY, variables: { id: window.localStorage["currentUserId"] } },
                        ],
                    })
                    actions.setSubmitting(false)
                    history.push(`/`)
                } catch (e) {
                    actions.setSubmitting(false)
                    setErrorState(true)
                }
            }}
            render={({ handleSubmit, isSubmitting }) => (
                <Card className={c.card}>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={c.formHeader}>
                            <h3 className={c.title}>{`Izmeni Profil`}</h3>
                        </div>
                        <div className={c.content}>
                            <GridContainer justify="flex-start">
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        placeholder="Unesi staru lozinku."
                                        name="oldPassword"
                                        label="Stara Lozinka"
                                        component={FormikTextInput}
                                        onFocus={()=>setErrorState(false)}
                                        classes={{
                                            root: classesField.root,
                                          }}
                                    />
                                    <div style={{ height: '14px' }}>
                                    <ErrorMessage name={'oldPassword'}>
                                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                                    </ErrorMessage>
                                  </div>
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        name="newPassword"
                                        label="Nova Lozinka"
                                        component={FormikTextInput}
                                        onFocus={()=>setErrorState(false)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="firstName"
                                        label="Ime"
                                        component={FormikTextInput}
                                        onFocus={()=>setErrorState(false)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="lastName"
                                        label="Prezime"
                                        component={FormikTextInput}
                                        onFocus={()=>setErrorState(false)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="postalCode"
                                        label="Poštanski broj"
                                        component={FormikTextInput}
                                        onFocus={()=>setErrorState(false)}
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="city"
                                        label="Grad"
                                        component={FormikTextInput}
                                        onFocus={()=>setErrorState(false)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="phone"
                                        label="Telefon"
                                        component={FormikTextInput}
                                        onFocus={()=>setErrorState(false)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="birthDate"
                                        label="Datum rođenja"
                                        component={FormikDatePicker}
                                        onFocus={()=>setErrorState(false)}
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                        <div className={c.footer}>
                            <GridContainer justify="flex-end">
                                <Button
                                    className={c.button}
                                    color="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Potvrdi
                                </Button>
                            </GridContainer>
                        </div>
                        {<p style={{color:'red',visibility:'visible', height:'15px', textAlign:'center'}}>{hasErrors ? 'Lozinka nije ispravna' :' '}</p>}
                    </form>
                </Card>
            )}
        />
    )
}

export default withStyles(style)(UpdateProfileForm)
