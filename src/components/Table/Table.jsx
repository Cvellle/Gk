import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import tableStyle from '../../assets/jss/components/tableStyle'

function CustomTable({ ...props }) {
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
		customHeadClassesForCells
	} = props
	return (
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
											customHeadClassesForCells.indexOf(key)
										]]: customHeadClassesForCells.indexOf(key) !== -1,
										[classes.tableShoppingHead]: tableShopping,
										[classes.tableHeadFontSize]: !tableShopping
									})
								return (
									<TableCell className={tableCellClasses} key={key}>
										{prop}
									</TableCell>
								)
							})}
						</TableRow>
					</TableHead>
				) : null}
				<TableBody>
					{tableData.map((prop, key) => {
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
							[classes.tableStripedRow]: striped && key % 2 === 0
						})

						return (
							<TableRow
								key={key}
								hover={hover}
								className={classes.tableRow + ' ' + tableRowClasses}
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
													colorsColls[coloredColls.indexOf(key)]
												]]: coloredColls.indexOf(key) !== -1,
												[customCellClasses[
													customClassesForCells.indexOf(key)
												]]: customClassesForCells.indexOf(key) !== -1
											})

										return (
											<TableCell
												className={tableCellClasses}
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
	customHeadClassesForCells: []
}

CustomTable.propTypes = {
	classes: PropTypes.object.isRequired,
	tableHeaderColor: PropTypes.oneOf([
		'warning',
		'primary',
		'danger',
		'success',
		'info',
		'rose',
		'gray'
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
	tableShopping: PropTypes.bool
}

export default withStyles(tableStyle)(CustomTable)
