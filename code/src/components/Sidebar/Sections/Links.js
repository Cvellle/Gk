import React from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import {
    withStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Icon,
    Collapse,
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'

//	apollo
import { useMutation, useQuery } from 'react-apollo-hooks'
import { TOOGLE_COLLAPSE } from '../../../apollo/client/mutations'
import { SIDEBAR_QUERY } from '../../../apollo/client/queries'

import User from './User'
import style from '../../../assets/jss/components/sidebarStyle'

const LinksSidebarSection = ({
    classes: c,
    miniActive,
    color = 'white',
    location,
    userData,
    links,
}) => {
    const { data } = useQuery(SIDEBAR_QUERY)
    const toogleCollapse = useMutation(TOOGLE_COLLAPSE)

    const openCollapse = collapse => {
        toogleCollapse({ variables: { value: collapse } })
        if (data.sidebar.activeCollapse === collapse) {
            toogleCollapse({ variables: { value: '' } })
        }
    }

    const activeRoute = route => {
        if (location.pathname === route) return true
        return false
    }

    React.useEffect(() => {}, [links])

    return (
        <>
            <User
                miniActive={miniActive}
                activeCollapse={data.sidebar.activeCollapse}
                openCollapse={openCollapse}
                userData={userData}
            />
            <List className={c.list}>
                {links.map((prop, key) => {
                    const navLinkClasses = `${c.itemLink} ${activeRoute(
                        prop.path,
                    ) && c.collapseActive}`

                    if (prop.collapse) {
                        const itemText = `${c.itemText} ${classnames({
                            [c.itemTextMini]: miniActive,
                        })}`

                        const collapseItemText = `${
                            c.collapseItemText
                        } ${classnames({
                            [c.collapseItemTextMini]: miniActive,
                        })}`

                        return (
                            <ListItem key={key} className={c.item}>
                                <NavLink
                                    to={'#'}
                                    className={navLinkClasses}
                                    onClick={() => openCollapse(prop.name)}
                                >
                                    <ListItemIcon className={c.itemIcon}>
                                        {typeof prop.icon === 'string' ? (
                                            <Icon>{prop.icon}</Icon>
                                        ) : (
                                            <prop.icon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={prop.name}
                                        secondary={
                                            <b
                                                className={
                                                    c.caret +
                                                    ' ' +
                                                    (data.sidebar
                                                        .activeCollapse ===
                                                    prop.name
                                                        ? c.caretActive
                                                        : '')
                                                }
                                            />
                                        }
                                        disableTypography={true}
                                        className={itemText}
                                    />
                                </NavLink>
                                <Collapse
                                    in={
                                        prop.name ===
                                        data.sidebar.activeCollapse
                                    }
                                    unmountOnExit
                                >
                                    <List
                                        className={
                                            c.list + ' ' + c.collapseList
                                        }
                                    >
                                        {prop.views.map((prop, key) => {
                                            if (prop.redirect) {
                                                return null
                                            }

                                            const navLinkClasses = `${
                                                c.collapseItemLink
                                            } ${classnames({
                                                [' ' + c[color]]: activeRoute(
                                                    prop.path,
                                                ),
                                            })}`
                                            const collapseItemMini =
                                                c.collapseItemMini

                                            return (
                                                <ListItem
                                                    key={key}
                                                    className={c.collapseItem}
                                                >
                                                    <NavLink
                                                        to={prop.path}
                                                        className={
                                                            navLinkClasses
                                                        }
                                                    >
                                                        {miniActive && (
                                                            <span
                                                                className={
                                                                    collapseItemMini
                                                                }
                                                            >
                                                                {prop.mini}
                                                            </span>
                                                        )}
                                                        <ListItemText
                                                            primary={prop.name}
                                                            disableTypography={
                                                                true
                                                            }
                                                            className={
                                                                collapseItemText
                                                            }
                                                        />
                                                    </NavLink>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                            </ListItem>
                        )
                    }

                    const itemText = `${c.itemText} ${classnames({
                        [c.itemTextMini]: miniActive,
                    })}`

                    return (
                        <ListItem key={key} className={c.item}>
                            <NavLink to={prop.path} className={navLinkClasses}>
                                <ListItemIcon className={c.itemIcon}>
                                    {typeof prop.icon === 'string' ? (
                                        <Icon>{prop.icon}</Icon>
                                    ) : (
                                        <prop.icon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={prop.name}
                                    disableTypography={true}
                                    className={itemText}
                                />
                            </NavLink>
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}

export default withRouter(withStyles(style)(LinksSidebarSection))
