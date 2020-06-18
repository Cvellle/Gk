import React from 'react'

import CardHeader from '@components/Card/CardHeader'
import CardIcon from '@components/Card/CardIcon'

import Search from '@material-ui/icons/Search'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import TextField from '@material-ui/core/TextField'

import { SupervisorAccount, Add } from '@material-ui/icons'

import { useDebouncedCallback } from 'use-debounce'

const Toolbar = ({ onAdd, ...props }) => {
    const [searchActive, setSearchActive] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState(props.searchText)
    const [debouncedCallback] = useDebouncedCallback(value => {
        props.onSearchChanged(value)
    }, 1000)
    return (
        <CardHeader style={{ margin: '-20px -20px 0 0' }} color="primary" icon>
            <CardIcon color="primary">
                <SupervisorAccount />
            </CardIcon>

            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    color: 'black',

                    marginBottom: '20px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '80px',

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '50px',
                        width: 'calc(100% - 90px)',
                    }}
                >
                    <h3
                        style={{
                            margin: 0,
                        }}
                    >
                        {props.title}
                    </h3>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                alignContent: 'center',
                            }}
                        >
                            <Tooltip title="Search">
                                <IconButton
                                    onClick={() =>
                                        setSearchActive(!searchActive)
                                    }
                                    size="small"
                                    aria-label="Search"
                                >
                                    <Search />
                                </IconButton>
                            </Tooltip>
                            <TextField
                                value={searchValue}
                                onChange={e => {
                                    setSearchValue(e.target.value)
                                    debouncedCallback(e.target.value)
                                }}
                                style={{
                                    width: searchActive ? '200px' : '0px',
                                    opacity: searchActive ? 1 : 0,
                                    transition: 'all 0.3s ease-out',
                                }}
                            />
                        </div>
                        <div>
                            <Tooltip title="Add">
                                <IconButton
                                    onClick={onAdd}
                                    size="small"
                                    aria-label="Add"
                                >
                                    <Add />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </CardHeader>
    )
}

export default Toolbar
