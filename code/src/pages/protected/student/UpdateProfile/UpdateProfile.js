import React from 'react'
import { withStyles } from '@material-ui/core'

import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'

import style from '@assets/jss/pages/usersPage'

import UpdateProfileForm from '@forms/UpdateProfileForm/UpdateProfileForm'

const UpdateProfile = () => {
    return (
        <>
            <GridContainer justify="center">
                <GridItem xs={12}>
                    <UpdateProfileForm />
                </GridItem>
            </GridContainer>
        </>
    )
}

export default withStyles(style)(UpdateProfile)