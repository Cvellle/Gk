import React from 'react'
import { withStyles } from '@material-ui/core'

import logo from '../../../assets/images/dashboardLogo.png'
import logoMini from '../../../assets/images/dashboardMiniLogo.png'

import style from '../../../assets/jss/components/sidebarStyle'

const Brand = ({ classes: c, miniActive }) => {
    return (
        <div className={c.logo}>
            <img
                src={miniActive ? logoMini : logo}
                alt="Minakwa learning platform"
                className={c.logoMini}
            />
        </div>
    )
}

export default withStyles(style)(Brand)
