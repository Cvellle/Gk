import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { withStyles, MenuItem, MenuList, ClickAwayListener, Paper, Grow, Hidden, Popper } from '@material-ui/core'
import { Person, Notifications } from '@material-ui/icons'
import Button from '../CustomButtons/Button'
import headerLinksStyle from '../../assets/jss/components/headerLinksStyle'
import useReactRouter from 'use-react-router'

import { withApollo } from 'react-apollo'

import { LOGOUT_QUERY } from '@apollo/server/queries'
import { LOGOUT_LOCAL_MUTATION } from '@apollo/client/mutations'

import Clock from 'react-live-clock'

const HeaderLinks = ({ ...props }) => {
  const { history } = useReactRouter()
  const [open, setOpen] = useState(false)
  const [personOpen, setPersonOpen] = useState(false)
  const [anchorEl, setAnchor] = useState(null)

  const handlePersonClick = () => {
    setPersonOpen(!personOpen)
  }

  const handlePersonClose = () => {
    setPersonOpen(false)
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { classes } = props
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover)

  const managerClasses = classNames({
    [classes.managerClasses]: true,
  })

  
  const onLogout = async () => {
    const { query, mutate } = props.client
    console.log(props.client)
    try {
      const serverResponse = await query({ query: LOGOUT_QUERY })
      console.log(serverResponse)

      localStorage.clear()
      // props.client.clearStore()
      await mutate({
        mutation:LOGOUT_LOCAL_MUTATION
      })
      // localStorage.clear()
      
      props.client.resetStore()
      await mutate({
        mutation:LOGOUT_LOCAL_MUTATION
      })
      // await mutate({
      //   mutation:LOGOUT_LOCAL_MUTATION
      // })
      // props.client
      //   .clearStore()
      //   .then(() => {
      //     props.client.resetStore()
      //   })
      //   .then(() => {
      //     mutate({
      //       mutation: LOGOUT_LOCAL_MUTATION,
      //     })
      //   })
      //   .then(() => {
      //     window.location.reload()
      //   })
      //   const clientResponse = await mutate({
      //     mutation: LOGOUT_LOCAL_MUTATION,
      //   })
      //   console.log(clientResponse)
      //   history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      {/*/        <div className={managerClasses}>
                <Button
                    color="transparent"
                    justIcon
                    aria-label="Notifications"
                    aria-owns={open ? 'menu-list' : null}
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.buttonLink}
                    buttonRef={node => {
                        setAnchor(node)
                    }}
                >
                    <Notifications
                        className={classes.headerLinksSvg + ' ' + classes.links}
                    />
                    <span className={classes.notifications}>5</span>
                    <Hidden mdUp implementation="css">
                        <span
                            onClick={handleClick}
                            className={classes.linkText}
                        >
                            Notification
                        </span>
                    </Hidden>
                </Button>
               <Popper
                    open={open}
                    anchorEl={anchorEl}
                    transition
                    disablePortal
                    placement="bottom"
                    className={classNames({
                        [classes.popperClose]: !open,
                        [classes.pooperResponsive]: true,
                        [classes.pooperNav]: true,
                    })}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list"
                            style={{ transformOrigin: '0 0 0' }}
                        >
                            <Paper className={classes.dropdown}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList role="menu">
                                        <MenuItem
                                            onClick={handleClose}
                                            className={dropdownItem}
                                        >
                                            Mike John responded to your email
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleClose}
                                            className={dropdownItem}
                                        >
                                            You have 5 new tasks
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper> 
            </div> /*/}

      <div className={managerClasses}>
        <Button
          color="transparent"
          justIcon
          aria-label="Person"
          aria-owns={personOpen ? 'person-list' : null}
          aria-haspopup="true"
          onClick={handlePersonClick}
          className={classes.buttonLink}
          buttonRef={node => {
            setAnchor(node)
          }}
        >
          <Person className={classes.headerLinksSvg + ' ' + classes.links} />

          <Hidden mdUp implementation="css">
            <span onClick={handlePersonClick} className={classes.linkText}>
              Notification
            </span>
          </Hidden>
        </Button>
        <Popper
          open={personOpen}
          anchorEl={anchorEl}
          transition
          disablePortal
          placement="bottom"
          className={classNames({
            [classes.popperClose]: !personOpen,
            [classes.pooperResponsive]: true,
            [classes.pooperNav]: true,
          })}
        >
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handlePersonClose}>
                  <MenuList role="menu">
                    <MenuItem
                      divider
                      onClick={() => {
                        handlePersonClose()
                        history.push('/updateProfile')
                      }}
                      className={dropdownItem}
                    >
                      Izmeni profil
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handlePersonClose()
                        onLogout()
                      }}
                      className={dropdownItem}
                    >
                      Odjavi se
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withApollo(withStyles(headerLinksStyle)(HeaderLinks))
