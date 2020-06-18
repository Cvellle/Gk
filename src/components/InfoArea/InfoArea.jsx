import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import infoStyle from '../../assets/jss/components/infoStyle'

const InfoArea = ({
	classes: c,
	title,
	description,
	iconColor,
	icon: infoIcon
}) => (
	<div className={c.infoArea}>
		<div className={c.iconWrapper + ' ' + c[iconColor]}>
			<infoIcon className={c.icon} />
		</div>
		<div className={c.descriptionWrapper}>
			<h4 className={c.title}>{title}</h4>
			<p className={c.description}>{description}</p>
		</div>
	</div>
)

InfoArea.defaultProps = {
	iconColor: 'gray'
}

InfoArea.propTypes = {
	classes: PropTypes.object.isRequired,
	icon: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	iconColor: PropTypes.oneOf([
		'primary',
		'warning',
		'danger',
		'success',
		'info',
		'rose',
		'gray'
	])
}

export default withStyles(infoStyle)(InfoArea)
