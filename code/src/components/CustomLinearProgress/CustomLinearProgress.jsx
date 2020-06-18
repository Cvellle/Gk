import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, LinearProgress } from '@material-ui/core'

import customLinearProgressStyle from '../../assets/jss/components/customLinearProgressStyle'

const CustomLinearProgress = ({ classes: c, color, ...rest }) => (
	<LinearProgress
		{...rest}
		classes={{
			root: c.root + ' ' + c[color + 'Background'],
			bar: c.bar + ' ' + c[color]
		}}
	/>
)

CustomLinearProgress.defaultProps = {
	color: 'gray'
}

CustomLinearProgress.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf([
		'primary',
		'warning',
		'danger',
		'success',
		'info',
		'rose',
		'gray'
	])
}

export default withStyles(customLinearProgressStyle)(
	CustomLinearProgress
)
