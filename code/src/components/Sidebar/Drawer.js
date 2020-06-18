import React from 'react'
import classnames from 'classnames'
import { Drawer, Hidden, withStyles } from '@material-ui/core'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { TOOGLE_DRAWER } from '../../apollo/client/mutations'
import { SIDEBAR_QUERY } from '../../apollo/client/queries'

import SidebarWrapper from './Wrapper'
import style from '../../assets/jss/components/sidebarStyle'

const SidebarDrawer = ({
    classes: c,
    bgColor = 'gradient',
    links,
    userData,
}) => {
    const { data } = useQuery(SIDEBAR_QUERY)
    const toogleDrawer = useMutation(TOOGLE_DRAWER)

    const drawerPaper = `${c.drawerPaper} ${classnames({
        [c.drawerPaperMini]: data.sidebar.miniActive,
    })}`

    return (
        <div>
            {/* MOBILE DRAWER */}
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={data.sidebar.mobileOpen}
                    onClose={toogleDrawer}
                    classes={{
                        paper: `${drawerPaper} ${c[bgColor + 'Background']}`,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <SidebarWrapper
                        links={links}
                        userData={userData}
                        miniActive={data.sidebar.miniActive}
                    />
                </Drawer>
            </Hidden>

            {/* DESKTOP DRAWER */}
            <Hidden smDown implementation="css">
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{
                        paper: `${drawerPaper} ${c[bgColor + 'Background']}`,
                    }}
                    // onMouseOver={() =>
                    // 	state.miniActive &&
                    // 	dispatch({ type: 'TOOGLE_MINI', value: false })
                    // }
                    // onMouseOut={() =>
                    // 	state.miniActive &&
                    // 	dispatch({ type: 'TOOGLE_MINI', value: true })
                    // }
                >
                    <SidebarWrapper
                        links={links}
                        userData={userData}
                        miniActive={data.sidebar.miniActive}
                    />
                </Drawer>
            </Hidden>
        </div>
    )
}

export default withStyles(style)(SidebarDrawer)
