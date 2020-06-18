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
import { FormikTextInput, FormikSelectInput } from '@inputs'

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
    name: '',
    description: '',
    // content: '',
    tag: '',
}

const AddLectureDialog = ({ setFieldValue, lectures }) => {
    const [open, setOpen] = React.useState(false)

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
                let newLectures = [...lectures]
                newLectures.push(values)
                setFieldValue('lectures', newLectures)
                actions.resetForm()
                handleClose()
            }}
            render={({ handleSubmit, isSubmitting }) => (
                <div>
                    <Button color="primary" onClick={handleOpen}>
                        Add Lecture
                    </Button>
                    <Dialog onClose={handleClose} open={open}>
                        <DialogTitle onClose={handleClose}>
                            Add Lecture
                        </DialogTitle>
                        <DialogContent>
                            <Field
                                required
                                name="name"
                                label="Name"
                                component={FormikTextInput}
                            />
                            <Field
                                required
                                name="description"
                                label="Description"
                                component={FormikTextInput}
                            />
                            {/*
                            <Field
                                required
                                name="content"
                                label="Content"
                                component={FormikTextInput}
                            />
                            */}
                            <Field
                                required
                                name="tag"
                                label="Tag"
                                component={FormikTextInput}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={handleSubmit} color="primary">
                                Save Lecture
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )}
        />
    )
}

export default AddLectureDialog
