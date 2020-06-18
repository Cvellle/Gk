import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import cardHeaderStyle from '../../assets/jss/components/cardHeaderStyle'

const CardHeader = ({
	classes: c,
	className,
	children,
	color,
	plain,
	image,
	contact,
	signup,
	stats,
	icon,
	text,
	...rest
}) => {
	const cardHeaderClasses = classNames({
		[c.cardHeader]: true,
		[c[color + 'CardHeader']]: color,
		[c.cardHeaderPlain]: plain,
		[c.cardHeaderImage]: image,
		[c.cardHeaderContact]: contact,
		[c.cardHeaderSignup]: signup,
		[c.cardHeaderStats]: stats,
		[c.cardHeaderIcon]: icon,
		[c.cardHeaderText]: text,
		[className]: className !== undefined
	})
	return (
		<div className={cardHeaderClasses} {...rest}>
			{children}
		</div>
	)
}

CardHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		'warning',
		'success',
		'danger',
		'info',
		'primary',
		'rose'
	]),
	plain: PropTypes.bool,
	image: PropTypes.bool,
	contact: PropTypes.bool,
	signup: PropTypes.bool,
	stats: PropTypes.bool,
	icon: PropTypes.bool,
	text: PropTypes.bool
}

export default withStyles(cardHeaderStyle)(CardHeader)
