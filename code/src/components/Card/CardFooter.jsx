import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import cardFooterStyle from '../../assets/jss/components/cardFooterStyle'

const CardFooter = ({
	classes: c,
	className,
	children,
	plain,
	profile,
	pricing,
	testimonial,
	stats,
	chart,
	product,
	right,
	...rest
}) => {
	const cardFooterClasses = classNames({
		[c.cardFooter]: true,
		[c.cardFooterRight]: right,
		[c.cardFooterPlain]: plain,
		[c.cardFooterProfile]: profile || testimonial,
		[c.cardFooterPricing]: pricing,
		[c.cardFooterTestimonial]: testimonial,
		[c.cardFooterStats]: stats,
		[c.cardFooterChart]: chart || product,
		[className]: className !== undefined
	})
	return (
		<div className={cardFooterClasses} {...rest}>
			{children}
		</div>
	)
}

CardFooter.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	pricing: PropTypes.bool,
	testimonial: PropTypes.bool,
	stats: PropTypes.bool,
	chart: PropTypes.bool,
	product: PropTypes.bool
}

export default withStyles(cardFooterStyle)(CardFooter)
