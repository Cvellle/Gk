import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import cardBodyStyle from '../../assets/jss/components/cardBodyStyle'

const CardBody = ({
	classes: c,
	className,
	children,
	background,
	plain,
	formHorizontal,
	pricing,
	signup,
	color,
	profile,
	calendar,
	...rest
}) => {
	const cardBodyClasses = classNames({
		[c.cardBody]: true,
		[c.cardBodyBackground]: background,
		[c.cardBodyPlain]: plain,
		[c.cardBodyFormHorizontal]: formHorizontal,
		[c.cardPricing]: pricing,
		[c.cardSignup]: signup,
		[c.cardBodyColor]: color,
		[c.cardBodyProfile]: profile,
		[c.cardBodyCalendar]: calendar,
		[className]: className !== undefined
	})
	return (
		<div className={cardBodyClasses} {...rest}>
			{children}
		</div>
	)
}

CardBody.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	background: PropTypes.bool,
	plain: PropTypes.bool,
	formHorizontal: PropTypes.bool,
	pricing: PropTypes.bool,
	signup: PropTypes.bool,
	color: PropTypes.bool,
	profile: PropTypes.bool,
	calendar: PropTypes.bool
}

export default withStyles(cardBodyStyle)(CardBody)
