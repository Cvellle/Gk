import React from 'react'
import classnames from 'classnames'
import { withStyles, Grid } from '@material-ui/core'

const style = {
    grid: {
        margin: '0 -15px',
        width: 'calc(100% + 30px)',
    },
}

const GridContainer = ({ classes, children, className, ...rest }) => (
    <Grid container {...rest} className={classnames(classes.grid, className)}>
        {children}
    </Grid>
)

export default withStyles(style)(GridContainer)
