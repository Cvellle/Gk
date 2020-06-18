import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const style = {
	clearfix: {
		'&:after,&:before': {
			display: 'table',
			content: '" "'
		},
		'&:after': {
			clear: 'both'
		}
	}
}

const Clearfix = ({ classes: c }) => {
	return <div className={c.clearfix} />
}

Clearfix.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(Clearfix)
