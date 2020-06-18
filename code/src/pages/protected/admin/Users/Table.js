import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@components/Card/Card'
import CardHeader from '@components/Card/CardHeader'
import CardIcon from '@components/Card/CardIcon'
import CardBody from '@components/Card/CardBody'
import CardFooter from '@components/Card/CardFooter'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Pagination from '@components/Pagination/Pagination'

import {
    SupervisorAccount,
    Add,
    ArrowUpward,
    ArrowDownward,
} from '@material-ui/icons'

import tableStyle from '@assets/jss/components/tableStyle'

const CustomTable = ({ ...props }) => {
    const {
        classes,
        tableHead,
        tableData,
        tableHeaderColor,
        hover,
        colorsColls,
        coloredColls,
        customCellClasses,
        customClassesForCells,
        striped,
        tableShopping,
        customHeadCellClasses,
        customHeadClassesForCells,
    } = props
    const [sortRow, setSortRow] = React.useState(null)

    const UP = 'up'
    const DOWN = 'down'

    const getTableData = () => {
        const minRows = 20
        let newTableData = []
        newTableData = [...tableData]
        while (newTableData.length < minRows) {
            newTableData.push({})
        }

        return newTableData
    }

    const setSort = key => {
        if (sortRow) {
            if (sortRow.key === key) {
                if (sortRow.value === UP) {
                    setSortRow({
                        key,
                        value: DOWN,
                    })
                } else {
                    setSortRow(null)
                }
            } else {
                setSortRow({
                    key,
                    value: UP,
                })
            }
        } else {
            setSortRow({
                key,
                value: UP,
            })
        }
    }
    return (
        <Card>
            <CardHeader color="primary" icon>
                <CardIcon color="primary">
                    <SupervisorAccount />
                </CardIcon>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <h4 className={classes.cardTitle}>{props.title}</h4>
                    <CardIcon color="primary">
                        <Add />
                    </CardIcon>
                </div>
            </CardHeader>
            <CardBody>
                <div className={classes.tableResponsive}>
                    <Table className={classes.table}>
                        {tableHead !== undefined ? (
                            <TableHead className={classes[tableHeaderColor]}>
                                <TableRow className={classes.tableRow}>
                                    {tableHead.map((prop, key) => {
                                        const tableCellClasses =
                                            classes.tableHeadCell +
                                            ' ' +
                                            classes.tableCell +
                                            ' ' +
                                            cx({
                                                [customHeadCellClasses[
                                                    customHeadClassesForCells.indexOf(
                                                        key,
                                                    )
                                                ]]:
                                                    customHeadClassesForCells.indexOf(
                                                        key,
                                                    ) !== -1,
                                                [classes.tableShoppingHead]: tableShopping,
                                                [classes.tableHeadFontSize]: !tableShopping,
                                            })
                                        return (
                                            <TableCell
                                                className={tableCellClasses}
                                                key={key}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems:
                                                            'flex-start',

                                                        height: '25px',
                                                        minWidth: '200px',
                                                        WebkitUserSelect:
                                                            'none',
                                                        MozUserSelect: 'none',
                                                        msUserSelect: 'none',
                                                        userSelect: 'none',
                                                    }}
                                                >
                                                    <div
                                                        onClick={() =>
                                                            setSort(key)
                                                        }
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        {prop}
                                                    </div>
                                                    <div
                                                        style={{
                                                            marginLeft: '5px',
                                                        }}
                                                    >
                                                        {sortRow &&
                                                            sortRow.key ===
                                                                key &&
                                                            sortRow.value ===
                                                                UP && (
                                                                <ArrowUpward />
                                                            )}
                                                        {sortRow &&
                                                            sortRow.key ===
                                                                key &&
                                                            sortRow.value ===
                                                                DOWN && (
                                                                <ArrowDownward />
                                                            )}
                                                    </div>
                                                </div>
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>
                        ) : null}
                        <TableBody>
                            {getTableData().map((prop, key) => {
                                var rowColor = ''
                                var rowColored = false
                                if (prop.color !== undefined) {
                                    rowColor = prop.color
                                    rowColored = true
                                    prop = prop.data
                                }
                                const tableRowClasses = cx({
                                    [classes.tableRowHover]: hover,
                                    [classes[rowColor + 'Row']]: rowColored,
                                    [classes.tableStripedRow]:
                                        striped && key % 2 === 0,
                                })

                                return (
                                    <TableRow
                                        key={key}
                                        hover={hover}
                                        className={
                                            classes.tableRow +
                                            ' ' +
                                            tableRowClasses
                                        }
                                        onClick={() => console.log(prop.id)}
                                    >
                                        {Object.values(prop)
                                            .slice(1)
                                            .map((prop, key) => {
                                                const tableCellClasses =
                                                    classes.tableCell +
                                                    ' ' +
                                                    cx({
                                                        [classes[
                                                            colorsColls[
                                                                coloredColls.indexOf(
                                                                    key,
                                                                )
                                                            ]
                                                        ]]:
                                                            coloredColls.indexOf(
                                                                key,
                                                            ) !== -1,
                                                        [customCellClasses[
                                                            customClassesForCells.indexOf(
                                                                key,
                                                            )
                                                        ]]:
                                                            customClassesForCells.indexOf(
                                                                key,
                                                            ) !== -1,
                                                    })

                                                return (
                                                    <TableCell
                                                        className={
                                                            tableCellClasses
                                                        }
                                                        key={key}
                                                    >
                                                        {prop}
                                                    </TableCell>
                                                )
                                            })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </CardBody>
            <CardFooter right>
                <Pagination
                    pages={[
                        { active: true, text: 1 },
                        { text: 2 },
                        { text: 3 },
                        { text: 4 },
                    ]}
                />
            </CardFooter>
        </Card>
    )
}

CustomTable.defaultProps = {
    tableHeaderColor: 'gray',
    hover: false,
    colorsColls: [],
    coloredColls: [],
    striped: false,
    customCellClasses: [],
    customClassesForCells: [],
    customHeadCellClasses: [],
    customHeadClassesForCells: [],
}

CustomTable.propTypes = {
    title: PropTypes.string,
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf([
        'warning',
        'primary',
        'danger',
        'success',
        'info',
        'rose',
        'gray',
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
    tableData: PropTypes.array,
    hover: PropTypes.bool,
    coloredColls: PropTypes.arrayOf(PropTypes.number),
    // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
    colorsColls: PropTypes.array,
    customCellClasses: PropTypes.arrayOf(PropTypes.string),
    customClassesForCells: PropTypes.arrayOf(PropTypes.number),
    customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
    customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
    striped: PropTypes.bool,
    // this will cause some changes in font
    tableShopping: PropTypes.bool,
}

export default withStyles(tableStyle)(CustomTable)
