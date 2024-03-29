import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import cardIconStyle from '../../assets/jss/components/cardIconStyle'

const CardIcon = ({
	classes: c,
	className,
	children,
	color,
	...rest
}) => {
	const cardIconClasses = classNames({
		[c.cardIcon]: true,
		[c[color + 'CardHeader']]: color,
		[className]: className !== undefined
	})
	return (
		<div className={cardIconClasses} {...rest}>
			{children}
		</div>
	)
}

CardIcon.propTypes = {
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

export default withStyles(cardIconStyle)(CardIcon)
