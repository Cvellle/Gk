import React from 'react'
import { withStyles } from '@material-ui/core'

import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'

import style from '@assets/jss/pages/usersPage'

import AddMeetingForm from '@forms/AddMeetingForm'

const AddMeetingPage = () => {
    return (
        <>
            <GridContainer justify="center">
                <GridItem xs={12}>
                    <AddMeetingForm />
                </GridItem>
            </GridContainer>
        </>
    )
}

export default withStyles(style)(AddMeetingPage)
