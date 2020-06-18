import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core'

import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'

import instructionStyle from '../../assets/jss/components/instructionStyle'

const Instruction = ({
	classes: c,
	title,
	text,
	image,
	className,
	imageClassName,
	imageAlt = '...'
}) => {
	const instructionClasses = cx({
		[c.instruction]: true,
		[className]: className
	})

	const pictureClasses = cx({
		[c.picture]: true,
		[imageClassName]: imageClassName
	})

	return (
		<div className={instructionClasses}>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<strong>{title}</strong>
					<p>{text}</p>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<div className={pictureClasses}>
						<img src={image} alt={imageAlt} className={c.image} />
					</div>
				</GridItem>
			</GridContainer>
		</div>
	)
}

Instruction.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.node.isRequired,
	text: PropTypes.node.isRequired,
	image: PropTypes.string.isRequired,
	imageAlt: PropTypes.string,
	className: PropTypes.string,
	imageClassName: PropTypes.string
}

export default withStyles(instructionStyle)(Instruction)
