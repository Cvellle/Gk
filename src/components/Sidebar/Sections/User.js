import React from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import {
    withStyles,
    List,
    ListItem,
    ListItemText,
    Collapse,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { ROLE_DISPLAY_FROM_NAME } from '@constants/roles'
import useReactRouter from 'use-react-router'

import style from '../../../assets/jss/components/sidebarStyle'

import { LOGOUT_QUERY } from '@apollo/server/queries'
import { LOGOUT_LOCAL_MUTATION } from '@apollo/client/mutations'

import { withApollo } from 'react-apollo'


const UserSidebarSection = ({
    classes: c,
    miniActive,
    activeCollapse,
    openCollapse,
    userData,
    client,
    width
}) => {

    const matches = useMediaQuery('(max-width:956px)');

    const itemText = `${c.itemText} ${classnames({
        [c.itemTextMini]: miniActive,
    })}`
    
    const collapseItemText = `${c.collapseItemText} ${classnames({
        [c.collapseItemTextMini]: miniActive,
    })}`
    
    const { history } = useReactRouter()
    
    const onLogout = async () => {
        const { query, mutate } = client
        console.log(client)
        try {
            const serverResponse = await query({ query: LOGOUT_QUERY })
            console.log(serverResponse)
            await mutate({
                mutation:LOGOUT_LOCAL_MUTATION
              })
              client.resetStore()
              await mutate({
                mutation:LOGOUT_LOCAL_MUTATION
              })
            // const clientResponse = await mutate({
            //     mutation: LOGOUT_LOCAL_MUTATION,
            // })
            // console.log(clientResponse)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className={c.user}>
            <List className={c.list}>
                <ListItem className={classnames(c.item, c.userItem)} divider>
                    <NavLink
                        to={'#'}
                        className={classnames(c.itemLink, c.userCollapseButton)}
                        onClick={() => {
                            openCollapse('User')
                            
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyItems: 'center',
                            }}
                        >
                            <div className={c.photo}  style={{display:miniActive?'none':'block'}}>
                                <img
                                    src="http://arunoommen.com/wp-content/uploads/2017/01/woman_icon-icons.com_55031.png"
                                    className={c.avatarImg}
                                    alt="..."
                                   
                                />
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    marginLeft: '5px',
                                }}
                            >
  {/*/                             <ListItemText
                                    primary={`${userData.firstName} ${
                                        userData.lastName
                                    }`}
                                    disableTypography={true}
                                    style={{
                                        margin: '4px 0 0 0',
                                        maxWidth: '145px',
                                    }}
                                /> /*/}
                                <ListItemText
                                    primary={`${
                                        ROLE_DISPLAY_FROM_NAME[
                                            userData.currentRole
                                        ].displayName
                                    }`}
                                    disableTypography={true}
                                    style={{
                                        margin: 0,
                                        fontSize: '12px',
                                    }}
                                />
                            </div>

                            {matches &&    <b
                                className={classnames(
                                    c.caret,
                                    c.userCaret,
                                    activeCollapse === 'User' && c.caretActive,
                                )}
                            /> }
  {/*/                        /*/}
                        </div>
                    </NavLink>
                    {matches &&   <Collapse in={activeCollapse === 'User'} unmountOnExit>
                    <List className={classnames(c.list, c.collapseList)}>
                        {userData.roles.length > 1 && (
                            <ListItem className={c.collapseItem}>
                                <NavLink
                                    to="#"
                                    className={
                                        c.itemLink +
                                        ' ' +
                                        c.userCollapseLinks
                                    }
                                >
                                    <span className={c.collapseItemMini}>
                                        CR
                                    </span>
                                    <ListItemText
                                        primary="Change Role"
                                        disableTypography={true}
                                        className={collapseItemText}
                                    />
                                </NavLink>
                            </ListItem>
                        )}
                       
                           {/*
                         <ListItem className={c.collapseItem}>
                        <NavLink
                                to="/my-profile"
                                className={
                                    c.itemLink + ' ' + c.userCollapseLinks
                                }
                            >
                                <span className={c.collapseItemMini}>
                                    P
                                </span>
                                <ListItemText
                                    primary="Profil"
                                    disableTypography={true}
                                    className={collapseItemText}
                                />
                            </NavLink>
                         </ListItem>
                        */} 
                       
                        <ListItem className={c.collapseItem}>
                            <NavLink
                                to="/updateProfile"
                                className={
                                    c.itemLink + ' ' + c.userCollapseLinks
                                }
                            >
                                <span className={c.collapseItemMini}>
                                    I
                                </span>
                                <ListItemText
                                    primary="Izmeni profil"
                                    disableTypography={true}
                                    className={collapseItemText}
                                />
                            </NavLink>
                        </ListItem>
                        <ListItem className={c.collapseItem} onClick={onLogout}>
                            <NavLink
                                to="#"
                                className={
                                    c.itemLink + ' ' + c.userCollapseLinks
                                }
                            >
                                <span className={c.collapseItemMini}>
                                    O
                                </span>
                                <ListItemText
                                    primary="Odjavi se"
                                    disableTypography={true}
                                    className={collapseItemText}
                                />
                            </NavLink>
                        </ListItem>
                    </List>
                </Collapse> }
{ /*/                  /*/}
                </ListItem>
            </List>
        </div>
    )
}

export default withApollo(withStyles(style)(UserSidebarSection))
