import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import cardTextStyle from '../../assets/jss/components/cardTextStyle'

const CardText = ({
	classes: c,
	className,
	children,
	color,
	...rest
}) => {
	const cardTextClasses = classNames({
		[c.cardText]: true,
		[c[color + 'CardHeader']]: color,
		[className]: className !== undefined
	})
	return (
		<div className={cardTextClasses} {...rest}>
			{children}
		</div>
	)
}

CardText.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		'warning',
		'success',
		'danger',
		'info',
		'primary',
		'rose'
	])
}

export default withStyles(cardTextStyle)(CardText)
