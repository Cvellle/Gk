import React from 'react'
import { withStyles } from '@material-ui/core'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import {
    FormikTextInput,
    FormikSelectInput,
    FormikDateTimePicker,
} from '@inputs'
import Card from '@components/Card/Card'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { CREATE_MEETING } from '@apollo/server/mutations'

import useReactRouter from 'use-react-router'

import style from '@assets/jss/forms/addUserForm'

import TableSelectInput from './TableSelectInput'

import moment from 'moment'

// Apollo
import { useMutation } from 'react-apollo-hooks'

import MembersTable from './MembersTable'
import MemberChip from './MemberChip'

const initialValues = {
    date: moment.now(),
    title: '',
    meetingType: '',
    description: '',
    members: [],
}

const validationSchema = {
    firstName: Yup.string().required('First Name is required!'),
    lastName: Yup.string().required('Last Name is required!'),
    email: Yup.string()
        .email('E-mail is not valid!')
        .required('E-mail is required!'),
}

const AddMeetingForm = ({ classes: c }) => {
    const { history } = useReactRouter()
    const [members, setMembers] = React.useState([])
    const createMeetingMutation = useMutation(CREATE_MEETING)
    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            //validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                values.members = members.map(member => ({ user: member._id }))
                values.date = moment(values.date)
                    .toDate()
                    .toISOString()

                try {
                    const response = await createMeetingMutation({
                        variables: { data: values },
                    })
                    console.log(response)
                    actions.resetForm()
                    return history.push('/meetings/all')
                } catch (e) {
                    console.log(e)
                    actions.resetForm()
                }
            }}
            render={({ handleSubmit, isSubmitting }) => (
                <Card className={c.card}>
                    <form onSubmit={handleSubmit}>
                        <div className={c.formHeader}>
                            <h3 className={c.title}>{`Add Meeting`}</h3>
                        </div>
                        <div className={c.content}>
                            <GridContainer justify="flex-start">
                                <GridItem xs={12}>
                                    <TableSelectInput
                                        ItemComponent={MemberChip}
                                        Table={MembersTable}
                                        items={members}
                                        setItems={setMembers}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="date"
                                        label="Date"
                                        component={FormikDateTimePicker}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        options={[
                                            {
                                                label: 'Business',
                                                value: 'BUSINESS',
                                            },
                                            {
                                                label: 'Registration',
                                                value: 'REGISTRATION',
                                            },
                                        ]}
                                        name="meetingType"
                                        label="Type"
                                        component={FormikSelectInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="title"
                                        label="Title"
                                        component={FormikTextInput}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={6}>
                                    <Field
                                        required
                                        name="description"
                                        label="Description"
                                        component={FormikTextInput}
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
                                    Add User
                                </Button>
                            </GridContainer>
                        </div>
                    </form>
                </Card>
            )}
        />
    )
}

export default withStyles(style)(AddMeetingForm)
