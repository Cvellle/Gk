import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import style from '../../assets/jss/components/cardStyle'

const Card = ({
	classes: c,
	className,
	children,
	plain,
	profile,
	blog,
	raised,
	background,
	pricing,
	color,
	product,
	testimonial,
	chart,
	login,
	...rest
}) => {
	const cardClasses = classNames({
		[c.card]: true,
		[c.cardPlain]: plain,
		[c.cardProfile]: profile || testimonial,
		[c.cardBlog]: blog,
		[c.cardRaised]: raised,
		[c.cardBackground]: background,
		[c.cardPricingColor]:
			(pricing && color !== undefined) ||
			(pricing && background !== undefined),
		[c[color]]: color,
		[c.cardPricing]: pricing,
		[c.cardProduct]: product,
		[c.cardChart]: chart,
		[c.cardLogin]: login,
		[className]: className !== undefined
	})

	return (
		<div className={cardClasses} {...rest}>
			{children}
		</div>
	)
}

Card.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	blog: PropTypes.bool,
	raised: PropTypes.bool,
	background: PropTypes.bool,
	pricing: PropTypes.bool,
	testimonial: PropTypes.bool,
	color: PropTypes.oneOf([
		'primary',
		'info',
		'success',
		'warning',
		'danger',
		'rose'
	]),
	product: PropTypes.bool,
	chart: PropTypes.bool,
	login: PropTypes.bool
}

export default withStyles(style)(Card)
