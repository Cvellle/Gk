import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core'

import footerStyle from '../../assets/jss/components/footerStyle'

const Footer = ({ classes: c, fluid, white, flex }) => {
  const container = classnames({
    [c.container]: !fluid,
    [c.containerFluid]: fluid,
    [c.containerFlex]: flex,
    [c.whiteColor]: white,
  })

  return (
    <footer className={c.footer}>
      <div className={container}>
        <p className={c.right}>&copy; {1900 + new Date().getYear()} GitKids</p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
