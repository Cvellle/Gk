import React from 'react'
import { withStyles } from '@material-ui/core'

import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'

import style from '@assets/jss/pages/usersPage'

import AddUserForm from '@forms/AddUserForm/AddUserForm'

const AddUser = () => {
    return (
        <>
            <GridContainer justify="center">
                <GridItem xs={12}>
                    <AddUserForm />
                </GridItem>
            </GridContainer>
        </>
    )
}

export default withStyles(style)(AddUser)
