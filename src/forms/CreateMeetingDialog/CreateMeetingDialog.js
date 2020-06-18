import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { Formik, Field } from 'formik'
import {
    FormikTextInput,
    FormikSelectInput,
    FormikDateTimePicker,
} from '@inputs'

import moment from 'moment'
import { useMutation } from 'react-apollo-hooks'
import { CREATE_MEETING } from '@apollo/server/mutations'

const DialogTitle = withStyles(theme => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}))(props => {
    const { children, classes, onClose } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="Close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const initialValues = {
    date: moment.now(),
    title: '',
    meetingType: '',
    description: '',
    duration: '',
}

const CreateMeetingDialog = ({ userId }) => {
    const [open, setOpen] = React.useState(false)

    const createMeeting = useMutation(CREATE_MEETING)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            //validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                values.members = [{ user: userId }]
                values.date = moment(values.date)
                    .toDate()
                    .toISOString()

                try {
                    const response = await createMeeting({
                        variables: { data: values },
                    })
                    console.log(response)
                    actions.resetForm()
                    handleClose()
                } catch (e) {
                    console.log(e)
                    actions.resetForm()
                    handleClose()
                }
            }}
            render={({ handleSubmit, isSubmitting }) => (
                <div>
                    <Button color="primary" onClick={handleOpen}>
                        Create Meeting
                    </Button>
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle onClose={handleClose}>
                            Create Meeting
                        </DialogTitle>
                        <DialogContent>
                            <Field
                                required
                                name="date"
                                label="Date"
                                component={FormikDateTimePicker}
                            />
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
                            <Field
                                required
                                name="title"
                                label="Title"
                                component={FormikTextInput}
                            />
                            <Field
                                required
                                name="description"
                                label="Description"
                                component={FormikTextInput}
                            />
                            <Field
                                required
                                name="duration"
                                label="Duration"
                                component={FormikTextInput}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )}
        />
    )
}

export default CreateMeetingDialog
