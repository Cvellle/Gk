import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import headingStyle from '../../assets/jss/components/headingStyle'

const Heading = ({ textAlign, category, title, classes }) => {
	const heading =
		classes.heading +
		' ' +
		cx({
			[classes[textAlign + 'TextAlign']]: textAlign
		})

	if (title || category) {
		return (
			<div className={heading}>
				{title && <h3 className={classes.title}>{title}</h3>}
				{category && <p className={classes.category}>{category}</p>}
			</div>
		)
	}

	return null
}

Heading.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.node,
	category: PropTypes.node,
	textAlign: PropTypes.oneOf(['right', 'left', 'center'])
}

export default withStyles(headingStyle)(Heading)
