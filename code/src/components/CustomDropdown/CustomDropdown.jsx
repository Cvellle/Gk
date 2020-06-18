import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
    withStyles,
    MenuItem,
    MenuList,
    ClickAwayListener,
    Paper,
    Grow,
    Divider,
    Popper,
} from '@material-ui/core'

import Button from '@components/CustomButtons/Button'
import customDropdownStyle from '@assets/jss/components/customDropdownStyle'

const CustomDropdown = ({
    classes: c,
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown,
}) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const handleClose = event => {
        if (this.anchorEl.contains(event.target)) return

        setOpen(false)
    }

    const handleCloseMenu = param => {
        setOpen(false)
        if (this.props && this.props.onClick) {
            this.props.onClick(param)
        }
    }

    const caretClasses = classNames({
        [c.caret]: true,
        [c.caretDropup]: dropup && !open,
        [c.caretActive]: open && !dropup,
        [c.caretRTL]: rtlActive,
    })
    const dropdownItem = classNames({
        [c.dropdownItem]: true,
        [c[hoverColor + 'Hover']]: true,
        [c.noLiPadding]: noLiPadding,
        [c.dropdownItemRTL]: rtlActive,
    })

    const dropDownMenu = (
        <MenuList role="menu" className={c.menuList}>
            {dropdownHeader !== undefined ? (
                <MenuItem
                    onClick={() => handleCloseMenu(dropdownHeader)}
                    className={c.dropdownHeader}
                >
                    {dropdownHeader}
                </MenuItem>
            ) : null}
            {dropdownList.map((prop, key) => {
                if (prop.divider) {
                    return (
                        <Divider
                            key={key}
                            onClick={() => handleCloseMenu('divider')}
                            className={c.dropdownDividerItem}
                        />
                    )
                } else if (prop.ref === 'multi') {
                    return (
                        <MenuItem
                            key={key}
                            className={dropdownItem}
                            style={{ overflow: 'visible', padding: 0 }}
                        >
                            {prop}
                        </MenuItem>
                    )
                }
                return (
                    <MenuItem
                        key={key}
                        onClick={() => handleCloseMenu(prop)}
                        className={dropdownItem}
                    >
                        {prop}
                    </MenuItem>
                )
            })}
        </MenuList>
    )
    return (
        <div className={innerDropDown ? c.innerManager : c.manager}>
            <div className={buttonText !== undefined ? '' : c.target}>
                <Button
                    aria-label="Notifications"
                    aria-owns={open ? 'menu-list' : null}
                    aria-haspopup="true"
                    buttonRef={node => {
                        this.anchorEl = node
                    }}
                    {...buttonProps}
                    onClick={handleClick}
                >
                    {buttonIcon !== undefined ? (
                        <this.props.buttonIcon className={c.buttonIcon} />
                    ) : null}
                    {buttonText !== undefined ? buttonText : null}
                    {caret ? <b className={caretClasses} /> : null}
                </Button>
            </div>
            <Popper
                open={open}
                anchorEl={this.anchorEl}
                transition
                disablePortal
                placement={dropPlacement}
                className={classNames({
                    [c.popperClose]: !open,
                    [c.pooperResponsive]: true,
                    [c.pooperNav]: open && navDropdown,
                })}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        in={open}
                        id="menu-list"
                        style={
                            dropup
                                ? { transformOrigin: '0 100% 0' }
                                : { transformOrigin: '0 0 0' }
                        }
                    >
                        <Paper className={c.dropdown}>
                            {innerDropDown ? (
                                dropDownMenu
                            ) : (
                                <ClickAwayListener
                                    onClickAway={handleClose}
                                    ref="cacat"
                                >
                                    {dropDownMenu}
                                </ClickAwayListener>
                            )}
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

CustomDropdown.defaultProps = {
    caret: true,
    dropup: false,
    hoverColor: 'primary',
}

CustomDropdown.propTypes = {
    classes: PropTypes.object.isRequired,
    hoverColor: PropTypes.oneOf([
        'dark',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'rose',
    ]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.func,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    dropPlacement: PropTypes.oneOf([
        'bottom',
        'top',
        'right',
        'left',
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
    ]),
    noLiPadding: PropTypes.bool,
    innerDropDown: PropTypes.bool,
    navDropdown: PropTypes.bool,
    // This is a function that returns the clicked menu item
    onClick: PropTypes.func,
}

export default withStyles(customDropdownStyle)(CustomDropdown)
