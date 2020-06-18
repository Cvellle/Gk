import React, { useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {
	withStyles,
	AppBar,
	Toolbar,
	Hidden,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon
} from '@material-ui/core'
import { Dashboard, Menu } from '@material-ui/icons'

import Button from 'components/CustomButtons/Button'
import pagesRoutes from 'routes/pages'

import pagesHeaderStyle from '../../assets/jss/components/pagesHeaderStyle'

const PagesHeader = ({ classes: c, color, location }) => {
	const [open, setOpen] = useState(false)

	const handleDrawerToggle = () => {
		setOpen(!open)
	}

	// verifies if routeName is the one active (in browser input)
	const activeRoute = routeName =>
		location.pathname.indexOf(routeName) > -1 ? true : false

	const appBarClasses = cx({
		[' ' + c[color]]: color
	})

	let list = (
		<List className={c.list}>
			<ListItem className={c.listItem}>
				<NavLink to={'/dashboard'} className={c.navLink}>
					<ListItemIcon className={c.listItemIcon}>
						<Dashboard />
					</ListItemIcon>
					<ListItemText
						primary={'Dashboard'}
						disableTypography={true}
						className={c.listItemText}
					/>
				</NavLink>
			</ListItem>

			{pagesRoutes.map((prop, key) => {
				if (prop.redirect) {
					return null
				}
				const navLink =
					c.navLink +
					cx({
						[' ' + c.navLinkActive]: activeRoute(prop.path)
					})
				return (
					<ListItem key={key} className={c.listItem}>
						<NavLink to={prop.path} className={navLink}>
							<ListItemIcon className={c.listItemIcon}>
								<prop.icon />
							</ListItemIcon>
							<ListItemText
								primary={prop.short}
								disableTypography={true}
								className={c.listItemText}
							/>
						</NavLink>
					</ListItem>
				)
			})}
		</List>
	)

	return (
		<AppBar position="static" className={c.appBar + appBarClasses}>
			<Toolbar className={c.container}>
				<Hidden smDown>
					<div className={c.flex}>
						<Button href="#" className={c.title} color="transparent">
							Material Dashboard Pro React
						</Button>
					</div>
				</Hidden>
				<Hidden mdUp>
					<div className={c.flex}>
						<Button href="#" className={c.title} color="transparent">
							MD Pro React
						</Button>
					</div>
				</Hidden>
				<Hidden smDown>{list}</Hidden>
				<Hidden mdUp>
					<Button
						className={c.sidebarButton}
						color="transparent"
						justIcon
						aria-label="open drawer"
						onClick={handleDrawerToggle}
					>
						<Menu />
					</Button>
				</Hidden>
				<Hidden mdUp>
					<Hidden mdUp>
						<Drawer
							variant="temporary"
							anchor={'right'}
							open={open}
							classes={{
								paper: c.drawerPaper
							}}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true
							}}
						>
							{list}
						</Drawer>
					</Hidden>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

PagesHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf([
		'primary',
		'info',
		'success',
		'warning',
		'danger'
	])
}

export default withStyles(pagesHeaderStyle)(PagesHeader)
