import React from 'react'
import { withStyles } from '@material-ui/core'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import { FormikTextInput, FormikSelectInput, FormikDatePicker } from '@inputs'
import Card from '@components/Card/Card'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { CREATE_POTENTIAL_USER } from '@apollo/server/mutations'

import useReactRouter from 'use-react-router'

import style from '@assets/jss/forms/addUserForm'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'

// Apollo
import { useQuery } from 'react-apollo-hooks'; 
import { useMutation } from 'react-apollo-hooks'
import { POTENTIAL_USERS_QUERY } from '@apollo/server/queries'
import { USERS_QUERY } from '@apollo/server/queries'


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  roles: 'STUDENT',
  postalCode: '',
  birthDate: '',
  phone: '',
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required('Ime korisnika je obavezno.'),
  lastName: yup.string().required('Prezime korisnika je obavezno.'),
  email: yup
    .string()
    .email('Email nije validan.')
    .required('Email korisnika je obavezan.'),
  city: yup.string().required('Grad korisnika je obavezan.'),
  roles: yup.string().required('Rola korisnika je obavezna.'),
  phone: yup.string().required('Telefon korisnika je obavezan.'),
  postalCode: yup.string().required('Poštanski broj korisnika je obavezan.'),
  birthDate: yup.string().required('Datum rođenja korisnika je obavezan.'),
})

const useStyles = makeStyles({
  root: {
    '& .MuiFormHelperText-root': {
      display: 'none',
    },
  },
})

const AddUserForm = ({ classes: c }) => {
  const { refetch: refetchPotential } = useQuery(POTENTIAL_USERS_QUERY)
  const { refetch: refetchAll } = useQuery(USERS_QUERY)
  const classesField = useStyles()
  // const classesSelectField = selectMenuStyle()

  const { history } = useReactRouter()
  const addUserMutation = useMutation(CREATE_POTENTIAL_USER)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        try {
          const response = await addUserMutation({
            variables: values,
            //role,
          })
          actions.setSubmitting(false)
          history.push(`/potential-users`)
          refetchPotential()
          refetchAll()
        } catch (e) {
          actions.setSubmitting(false)
          console.log(e)
        }
      }}
      render={({ handleSubmit, isSubmitting }) => (
        <Card className={c.card}>
          <form onSubmit={handleSubmit} noValidate>
            <div className={c.formHeader}>
              <h3 className={c.title}>{`Dodaj Potencijalnog Korisnika`}</h3>
            </div>
            <div className={c.content}>
              <GridContainer justify="flex-start">
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    name="firstName"
                    label="Ime"
                    component={FormikTextInput}
                    classes={{
                      root: classesField.root,
                      // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'firstName'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    name="lastName"
                    label="Prezime"
                    component={FormikTextInput}
                    classes={{
                      root: classesField.root,
                      // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'lastName'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    name="email"
                    label="Email"
                    component={FormikTextInput}
                    classes={{
                      root: classesField.root,
                      // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'email'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
                {/* <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="nativeFirstName"
                                        label="Native First Name"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="nativeLastName"
                                        label="Native Last Name"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="country"
                                        label="Country"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="region"
                                        label="Region"
                                        component={FormikTextInput}
                                    />
                                </GridItem> */}
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    name="city"
                    label="Grad"
                    component={FormikTextInput}
                    classes={{
                      root: classesField.root,
                      // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'city'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    options={[
                      {
                        label: 'Admin',
                        value: 'ADMIN',
                      },
                      // {
                      //     label: 'Manager',
                      //     value: 'MANAGER',
                      // },
                      // {
                      //     label:
                      //         'Afilliate Marketing Manager',
                      //     value: 'AMM',
                      // },
                      // {
                      //     label: 'Referral',
                      //     value: 'REFERRAL',
                      // },
                      // {
                      //     label: 'Sales Representative',
                      //     value: 'SALES',
                      // },
                      // {
                      //     label: 'Teacher',
                      //     value: 'TEACHER',
                      // },
                      // {
                      //     label: 'Support',
                      //     value: 'SUPPORT',
                      // },
                      {
                        label: 'Student',
                        value: 'STUDENT',
                      },
                    ]}
                    name="roles"
                    label="Uloga"
                    component={FormikSelectInput}
                    // classes={{
                    //     root: classesField.root,
                    //     // class name, e.g. `classes-nesting-root-x`

                    //   }}
                    // classes={{
                    //     root: classesSelectField.root,
                    //     // class name, e.g. `classes-nesting-root-x`

                    //   }}
                  />
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'roles'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
                {/* <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        options={TIMEZONES.map(zone => {
                                            return {
                                                label: stringifyZone(
                                                    zone,
                                                    'GMT',
                                                ),
                                                value: zone.name,
                                            }
                                        })}
                                        name="timeZone"
                                        label="Time Zone"
                                        component={FormikSelectInput}
                                    />
                                </GridItem> */}
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    name="phone"
                    label="Telefon"
                    component={FormikTextInput}
                    classes={{
                      root: classesField.root,
                      // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'phone'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    name="postalCode"
                    label="Poštanski broj"
                    component={FormikTextInput}
                    classes={{
                      root: classesField.root,
                      // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                  {/*
                                   
                                    */}
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'postalCode'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <Field
                    required
                    name="birthDate"
                    label="Datum rođenja"
                    component={FormikDatePicker}
                    classes={{
                      root: classesField.root,
                      // class name, e.g. `classes-nesting-root-x`
                    }}
                  />
                  <div style={{ height: '14px' }}>
                    <ErrorMessage name={'birthDate'}>
                      {msg => <div style={{ color: 'red', fontSize: '14px' }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
            <div className={c.footer}>
              <GridContainer justify="flex-end">
                <Button className={c.button} color="primary" type="submit" disabled={isSubmitting}>
                  Dodaj korisnika
                </Button>
              </GridContainer>
            </div>
          </form>
        </Card>
      )}
    />
  )
}

export default withStyles(style)(AddUserForm)
