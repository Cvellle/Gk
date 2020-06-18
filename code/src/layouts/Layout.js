import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, CssBaseline } from '@material-ui/core'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'

import { useQuery } from 'react-apollo-hooks'
import { SIDEBAR_QUERY } from '../apollo/client/queries'

//	components
import Drawer from '../components/Sidebar/Drawer'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import style from '../assets/jss/layouts/dashboardStyle'

const Layout = ({ children, classes: c, sidebar = true, title, userData, links }) => {
  const { data } = useQuery(SIDEBAR_QUERY)
  const mainPanel = `${c.mainPanel} ${classnames({
    [c.mainPanelSidebarMini]: data.sidebar.miniActive,
  })}`

  return (
    <div className={c.wrapper}>
      {!sidebar ? null : <Drawer links={links} userData={userData} />}
      <div className={mainPanel}>
        <CssBaseline />
        <Header title={title} />
        <Fade>
          <main className={c.content}>
            <div className={c.container}>{children}</div>
          </main>
        </Fade>
        <Footer flex />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.shape(),
  classes: PropTypes.shape(),
  sidebar: PropTypes.bool,
  center: PropTypes.bool,
  topbar: PropTypes.bool,
  backgroundImage: PropTypes.string,
}

export default withStyles(style)(Layout)
