import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import badgeStyle from '../../assets/jss/components/badgeStyle'

const Badge = ({ classes, color, children }) => (
	<span className={classes.badge + ' ' + classes[color]}>
		{children}
	</span>
)

Badge.propTypes = {
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

export default withStyles(badgeStyle)(Badge)
