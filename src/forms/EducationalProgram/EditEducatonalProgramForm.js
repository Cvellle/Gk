import React, { Fragment } from 'react'
import {
	withStyles,
	InputLabel,
	FormControl,
	Select,
	MenuItem
} from '@material-ui/core'
import { Cancel, Save } from '@material-ui/icons'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Button from '../../components/CustomButtons/Button'
import Input from '../../components/CustomInput/CustomInput'

import style from '../../assets/jss/forms/editEducationalProgramForm'

const EditEducationalProgramForm = ({
	classes: c,
	educationalProgram,
	history
}) => {
	return (
		<Fragment>
			<GridContainer>
				<GridItem xs={12} sm={6} md={6} lg={6}>
					<Input
						inputProps={{
							value: educationalProgram.name
						}}
						formControlProps={{ fullWidth: true }}
						labelText="Name"
					/>
					<Input
						inputProps={{
							value: educationalProgram.description,
							multiline: true
						}}
						formControlProps={{ fullWidth: true }}
						labelText="Description"
					/>
					<Input
						inputProps={{
							value: educationalProgram.publisher
						}}
						formControlProps={{ fullWidth: true }}
						labelText="Publisher"
					/>
					<Input
						inputProps={{
							value: educationalProgram.price
						}}
						formControlProps={{ fullWidth: true }}
						labelText="Price"
					/>
					<FormControl fullWidth className={c.selectFormControl}>
						<InputLabel
							htmlFor="simple-select"
							className={c.selectLabel}
						>
							Choose Level
						</InputLabel>
						<Select
							MenuProps={{
								className: c.selectMenu
							}}
							classes={{
								select: c.select
							}}
							value={''}
							//	onChange={this.handleSimple}
							inputProps={{
								name: 'levelSelect',
								id: 'levelSelect'
							}}
						>
							<MenuItem
								disabled
								classes={{
									root: c.selectMenuItem
								}}
							>
								Choose Level
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="A1"
							>
								A1
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="A2"
							>
								A2
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="B1"
							>
								B1
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="B2"
							>
								B2
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="C1"
							>
								C1
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="C2"
							>
								C2
							</MenuItem>
						</Select>
					</FormControl>
					<FormControl fullWidth className={c.selectFormControl}>
						<InputLabel
							htmlFor="simple-select"
							className={c.selectLabel}
						>
							Choose Group
						</InputLabel>
						<Select
							MenuProps={{
								className: c.selectMenu
							}}
							classes={{
								select: c.select
							}}
							value={''}
							//	onChange={this.handleSimple}
							inputProps={{
								name: 'groupSelect',
								id: 'groupSelect'
							}}
						>
							<MenuItem
								disabled
								classes={{
									root: c.selectMenuItem
								}}
							>
								Choose Group
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="kids"
							>
								Kids
							</MenuItem>
							<MenuItem
								classes={{
									root: c.selectMenuItem,
									selected: c.selectMenuItemSelected
								}}
								value="adults"
							>
								Adults
							</MenuItem>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem xs={12} sm={6} md={6} lg={6}>
					<div>cao</div>
				</GridItem>
			</GridContainer>
			<GridContainer justify="flex-end" style={{ padding: 15 }}>
				<Button className={c.button} onClick={() => history.goBack()}>
					Cancel <Cancel className={c.icon} />
				</Button>
				<Button className={c.button} color="primary">
					Save <Save className={c.icon} />
				</Button>
			</GridContainer>
		</Fragment>
	)
}

export default withStyles(style)(EditEducationalProgramForm)
