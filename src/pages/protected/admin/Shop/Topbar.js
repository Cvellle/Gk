import React from 'react'
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    withStyles,
} from '@material-ui/core'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'

import style from '@assets/jss/pages/shopPage'

const Topbar = ({ classes: c, filters, setFilters }) => {
    return (
        <GridContainer alignItems="center" justify="flex-start">
            <GridItem xs={12} sm={3} md={2} lg={1}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="showDropdown">Show</InputLabel>
                    <Select
                        MenuProps={{
                            className: c.selectMenu,
                        }}
                        classes={{
                            select: c.select,
                        }}
                        value={filters.show}
                        onChange={e =>
                            setFilters({ ...filters, show: e.target.value })
                        }
                        inputProps={{
                            name: 'showDropdown',
                            id: 'showDropdown',
                        }}
                    >
                        <MenuItem
                            disabled
                            classes={{
                                root: c.selectMenuItem,
                            }}
                        >
                            Show
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                            }}
                            value="all"
                        >
                            All
                        </MenuItem>
                        <MenuItem
                            value="draft"
                            classes={{
                                root: c.selectMenuItem,
                            }}
                        >
                            Drafts
                        </MenuItem>
                        <MenuItem
                            value="published"
                            classes={{
                                root: c.selectMenuItem,
                            }}
                        >
                            Published
                        </MenuItem>
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem xs={12} sm={3} md={2} lg={1}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="showLevel">Level</InputLabel>
                    <Select
                        MenuProps={{
                            className: c.selectMenu,
                        }}
                        classes={{
                            select: c.select,
                        }}
                        value={filters.level}
                        onChange={e =>
                            setFilters({
                                ...filters,
                                level: e.target.value,
                            })
                        }
                        inputProps={{
                            name: 'showLevel',
                            id: 'showLevel',
                        }}
                    >
                        <MenuItem
                            disabled
                            classes={{
                                root: c.selectMenuItem,
                            }}
                        >
                            Level
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                            }}
                            value="all"
                        >
                            All
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="A1"
                        >
                            A1
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="A2"
                        >
                            A2
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="B1"
                        >
                            B1
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="B2"
                        >
                            B2
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="C1"
                        >
                            C1
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="C2"
                        >
                            C2
                        </MenuItem>
                    </Select>
                </FormControl>
            </GridItem>
            <GridItem xs={12} sm={3} md={2} lg={1}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="showGroup">Group</InputLabel>
                    <Select
                        MenuProps={{
                            className: c.selectMenu,
                        }}
                        classes={{
                            select: c.select,
                        }}
                        value={filters.group}
                        onChange={e =>
                            setFilters({
                                ...filters,
                                group: e.target.value,
                            })
                        }
                        inputProps={{
                            name: 'showGroup',
                            id: 'showGroup',
                        }}
                    >
                        <MenuItem
                            disabled
                            classes={{
                                root: c.selectMenuItem,
                            }}
                        >
                            Group
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                            }}
                            value="all"
                        >
                            All
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="kids"
                        >
                            Kids
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: c.selectMenuItem,
                                selected: c.selectMenuItemSelected,
                            }}
                            value="adults"
                        >
                            Adults
                        </MenuItem>
                    </Select>
                </FormControl>
            </GridItem>
        </GridContainer>
    )
}

export default withStyles(style)(Topbar)
