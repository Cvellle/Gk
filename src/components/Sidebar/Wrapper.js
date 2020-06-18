import React from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core'

//	sections
import Brand from './Sections/Brand'
import Links from './Sections/Links'

import style from '../../assets/jss/components/sidebarStyle'

const SidebarWrapper = ({ classes: c, miniActive, userData, links }) => {
    const sidebarWrapper = `${c.sidebarWrapper} ${classnames({
        [c.drawerPaperMini]: miniActive,
    })}`

    return (
        <div className={sidebarWrapper}>
            <Brand miniActive={miniActive} />
            <Links
                links={links}
                userData={userData}
                role={userData.currentRole}
                miniActive={miniActive}
            />
        </div>
    )
}

export default withStyles(style)(SidebarWrapper)
