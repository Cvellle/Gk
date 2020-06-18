import React from 'react'
import classnames from 'classnames'
import { withStyles, Grid } from '@material-ui/core'

const style = {
	grid: {
		padding: '0 15px !important'
	}
}

const GridItem = ({ classes, children, className, ...rest }) => (
	<Grid
		item
		{...rest}
		className={classnames(classes.grid, className)}
	>
		{children}
	</Grid>
)

export default withStyles(style)(GridItem)
