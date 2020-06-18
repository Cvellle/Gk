import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Tabs, Tab } from '@material-ui/core'

import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'

import customTabsStyle from '../../assets/jss/components/customTabsStyle'

const CustomTabs = ({
	classes: c,
	headerColor,
	plainTabs,
	tabs,
	title
}) => {
	const [value, setValue] = useState(0)

	const handleChange = (event, value) => {
		setValue(value)
	}

	return (
		<Card plain={plainTabs}>
			<CardHeader color={headerColor} plain={plainTabs}>
				{title && <div className={c.cardTitle}>{title}</div>}
				<Tabs
					value={value}
					onChange={handleChange}
					classes={{
						root: c.tabsRoot,
						indicator: c.displayNone
					}}
				>
					{tabs.map((prop, key) => {
						var icon = {}
						if (prop.tabIcon) {
							icon = {
								icon: <prop.tabIcon />
							}
						}
						return (
							<Tab
								classes={{
									root: c.tabRootButton,
									labelContainer: c.tabLabelContainer,
									label: c.tabLabel,
									selected: c.tabSelected,
									wrapper: c.tabWrapper
								}}
								key={key}
								label={prop.tabName}
								{...icon}
							/>
						)
					})}
				</Tabs>
			</CardHeader>
			<CardBody>
				{tabs.map((prop, key) => {
					if (key === value) {
						return <div key={key}>{prop.tabContent}</div>
					}
					return null
				})}
			</CardBody>
		</Card>
	)
}

CustomTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	headerColor: PropTypes.oneOf([
		'warning',
		'success',
		'danger',
		'info',
		'primary',
		'rose'
	]),
	title: PropTypes.string,
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			tabName: PropTypes.string.isRequired,
			tabIcon: PropTypes.func,
			tabContent: PropTypes.node.isRequired
		})
	),
	rtlActive: PropTypes.bool,
	plainTabs: PropTypes.bool
}

export default withStyles(customTabsStyle)(CustomTabs)
