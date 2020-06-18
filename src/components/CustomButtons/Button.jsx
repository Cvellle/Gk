import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from '@assets/jss/components/buttonStyle'

const useStyles = makeStyles(styles)

const RegularButton = React.forwardRef((props, ref) => {
  const c = useStyles()

  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props

  const btnClasses = classNames({
    [c.button]: true,
    [c[size]]: size,
    [c[color]]: color,
    [c.round]: round,
    [c.fullWidth]: fullWidth,
    [c.disabled]: disabled,
    [c.simple]: simple,
    [c.block]: block,
    [c.link]: link,
    [c.justIcon]: justIcon,
    [className]: className,
  })
  return (
    <Button {...rest} ref={ref} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  )
})

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'twitter',
    'facebook',
    'google',
    'linkedin',
    'pinterest',
    'youtube',
    'tumblr',
    'github',
    'behance',
    'dribbble',
    'reddit',
    'transparent',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  muiClasses: PropTypes.object,
  children: PropTypes.node,
}

export default RegularButton
