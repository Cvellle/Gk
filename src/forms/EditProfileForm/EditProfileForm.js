import React, { useState } from 'react'
import { withStyles } from '@material-ui/core'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import { FormikTextInput, FormikSelectInput, FormikDatePicker } from '@inputs'
import Card from '@components/Card/Card'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { EDIT_USER } from '@apollo/server/mutations'
import { USERS_QUERY } from '@apollo/server/queries'

import useReactRouter from 'use-react-router'
import style from '@assets/jss/forms/addUserForm'



const initialValues = {
    firstName: " ",
    lastName: " ",
    email: " ",
    phone: " ",
    country: " ",
    city: " ",
    roles: "ADMIN",
    postalCode: " ",
    birthDate: " "
}

const EditProfileForm = ({ classes: c }) => {
    const { history } = useReactRouter()
    const editUserMutation = useMutation(EDIT_USER)
    const [msg, setMsg] = useState(false)

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Ime je obavezno!'),
        lastName: Yup.string().required('Prezime je obavezno!'),
        email: Yup.string()
            .email('Email nije ispravan!')
            .required('Email je obavezan!'),
        phone: Yup.string().required('Telefon je obavezan!'),
        city: Yup.string().required('Grad je obavezan!'),
        postalCode: Yup.string().required('Postanski kod je obavezan!')
    })

    const userId = window.location.pathname
        .split('/')
        .slice(-1)
        .pop()

    const { data } = useQuery(USERS_QUERY, { variables: { id: userId } })

    if (data && data.users) {
        let user = data.users.docs[0];
        initialValues.firstName = user.firstName
        initialValues.lastName = user.lastName
        initialValues.email = user.email
        initialValues.phone = user.phone
        initialValues.country = user.country
        initialValues.city = user.city
        initialValues.roles = user.roles[0]
        initialValues.postalCode = user.postalCode
        initialValues.birthDate = user.birthDate.toString()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (data, actions) => {
                try {
                    await editUserMutation({
                        variables: {
                            id: userId,
                            birthDate: data.birthDate,
                            city: data.city,
                            firstName: data.firstName,
                            lastName: data.lastName,
                            phone: data.phone,
                            postalCode: data.postalCode,
                            newPassword: data.newPassword,
                            roles: data.roles
                        },
                        refetchQueries: [{ query: USERS_QUERY, variables: { id: userId } }]
                    })
                    actions.setSubmitting(false)
                   setMsg(true)
                   setTimeout(() => history.push(`/users`), 1500)
                } catch (e) {
                    actions.setSubmitting(false)
                }
            }}
            render={({ handleSubmit, isSubmitting }) => (
                <Card className={c.card}>
                    <form onSubmit={handleSubmit}>
                        <div className={c.formHeader}>
                            <h3 className={c.title}>{`Izmeni Podatke Korisnika`}</h3>
                        </div>
                        <div className={c.content}>
                            <GridContainer justify="flex-start">
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="firstName"
                                        label="Ime"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="lastName"
                                        label="Prezime"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="phone"
                                        label="Telefon"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="city"
                                        label="Grad"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="postalCode"
                                        label="Postanski kod"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="birthDate"
                                        label="Datum rodjenja"
                                        component={FormikDatePicker}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        name="newPassword"
                                        label="Lozinka"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        options={[
                                            {
                                                label: 'Admin',
                                                value: 'ADMIN',
                                            },
                                            {
                                                label: 'Manager',
                                                value: 'MANAGER',
                                            },
                                            {
                                                label:
                                                    'Afilliate Marketing Manager',
                                                value: 'AMM',
                                            },
                                            {
                                                label: 'Referral',
                                                value: 'REFERRAL',
                                            },
                                            {
                                                label: 'Sales Representative',
                                                value: 'SALES',
                                            },
                                            {
                                                label: 'Teacher',
                                                value: 'TEACHER',
                                            },
                                            {
                                                label: 'Support',
                                                value: 'SUPPORT',
                                            },
                                            {
                                                label: 'Student',
                                                value: 'STUDENT',
                                            },
                                        ]}
                                        name="roles"
                                        label="Uloga"
                                        component={FormikSelectInput}
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
                                    Sacuvaj
                                </Button>
                            </GridContainer>
                            {<p style={{ transform:'scale(1.2)', color: 'limegreen', visibility: 'visible', height: '15px', textAlign: 'center' }}>{msg ? 'Usepešno ste izmenili podatke' : ' '}</p>}
                        </div>
                    </form>
                </Card>
            )}
        />
    )
}

export default withStyles(style)(EditProfileForm)
