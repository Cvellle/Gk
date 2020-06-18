import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { withStyles, Tab, Tabs } from '@material-ui/core'

import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'

import navPillsStyle from '../../assets/jss/components/navPillsStyle'

const NavPills = ({
	classes,
	tabs,
	color = 'primary',
	horizontal,
	alignCenter
}) => {
	const [active, setActive] = useState(0)

	const handleChange = (event, active) => {
		setActive(active)
	}

	const handleChangeIndex = index => {
		setActive(index)
	}

	const flexContainerClasses = classNames({
		[classes.flexContainer]: true,
		[classes.horizontalDisplay]: horizontal !== undefined
	})

	const tabButtons = (
		<Tabs
			classes={{
				root: classes.root,
				fixed: classes.fixed,
				flexContainer: flexContainerClasses,
				indicator: classes.displayNone
			}}
			value={active}
			onChange={handleChange}
			centered={alignCenter}
		>
			{tabs.map((prop, key) => {
				var icon = {}
				if (prop.tabIcon) {
					icon['icon'] = <prop.tabIcon className={classes.tabIcon} />
				}
				const pillsClasses = classNames({
					[classes.pills]: true,
					[classes.horizontalPills]: horizontal,
					[classes.pillsWithIcons]: prop.tabIcon
				})
				return (
					<Tab
						label={prop.tabButton}
						key={key}
						{...icon}
						classes={{
							root: pillsClasses,
							labelContainer: classes.labelContainer,
							label: classes.label,
							selected: classes[color]
						}}
					/>
				)
			})}
		</Tabs>
	)
	const tabContent = (
		<div className={classes.contentWrapper}>
			<SwipeableViews
				axis={'x'}
				index={active}
				onChangeIndex={handleChangeIndex}
			>
				{tabs.map((prop, key) => {
					return (
						<div className={classes.tabContent} key={key}>
							{prop.tabContent}
						</div>
					)
				})}
			</SwipeableViews>
		</div>
	)

	return horizontal ? (
		<GridContainer>
			<GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
			<GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
		</GridContainer>
	) : (
		<div>
			{tabButtons}
			{tabContent}
		</div>
	)
}

NavPills.propTypes = {
	classes: PropTypes.object.isRequired,
	// index of the default active pill
	active: PropTypes.number,
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			tabButton: PropTypes.string,
			tabIcon: PropTypes.func,
			tabContent: PropTypes.node
		})
	).isRequired,
	color: PropTypes.oneOf([
		'primary',
		'warning',
		'danger',
		'success',
		'info',
		'rose'
	]),
	horizontal: PropTypes.shape({
		tabsGrid: PropTypes.object,
		contentGrid: PropTypes.object
	}),
	alignCenter: PropTypes.bool
}

export default withStyles(navPillsStyle)(NavPills)
