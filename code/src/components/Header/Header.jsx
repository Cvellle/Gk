import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles, AppBar, Toolbar, Hidden } from '@material-ui/core'
import { Menu, MoreVert, ViewList } from '@material-ui/icons'

//	apollo
import { useQuery, useMutation } from 'react-apollo-hooks'
import { TOOGLE_DRAWER, TOOGLE_MINI } from '../../apollo/client/mutations'
import { SIDEBAR_QUERY } from '../../apollo/client/queries'

import HeaderLinks from './HeaderLinks'
import Button from '../CustomButtons/Button'
import headerStyle from '../../assets/jss/components/headerStyle'

const Header = ({ classes: c, color, title }) => {
    const appBarClasses = cx({
        [' ' + c[color]]: color,
    })

    const { data } = useQuery(SIDEBAR_QUERY)
    const toogleDrawer = useMutation(TOOGLE_DRAWER)
    const toogleMini = useMutation(TOOGLE_MINI)

    return (
        <AppBar className={c.appBar + appBarClasses}>
            <Toolbar className={c.container}>
                <Hidden smDown implementation="css">
                    <div className={c.sidebarMinimize}>
                        {data.sidebar.miniActive ? (
                            <Button
                                justIcon
                                round
                                color="white"
                                onClick={toogleMini}
                            >
                                <ViewList className={c.sidebarMiniIcon} />
                            </Button>
                        ) : (
                            <Button
                                justIcon
                                round
                                color="white"
                                onClick={toogleMini}
                            >
                                <MoreVert className={c.sidebarMiniIcon} />
                            </Button>
                        )}
                    </div>
                </Hidden>
                <div className={c.flex}>
                    <Button href="#" className={c.title} color="transparent">
                        {title}
                    </Button>
                </div>
                <Hidden smDown implementation="css">
                    <HeaderLinks />
                </Hidden>
                <Hidden mdUp implementation="css">
                    <Button
                        className={c.appResponsive}
                        color="transparent"
                        justIcon
                        aria-label="open drawer"
                        onClick={toogleDrawer}
                    >
                        <Menu />
                    </Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
}

export default withStyles(headerStyle)(Header)
