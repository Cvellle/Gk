import React, { Fragment } from 'react'
import {
	withStyles,
	Radio,
	FormControlLabel,
	RadioGroup,
	Fade
} from '@material-ui/core'
import GridContainer from '../../components/Grid/GridContainer'
import Button from '../../components/CustomButtons/Button'
import Input from '../../components/CustomInput/CustomInput'

import style from '../../assets/jss/forms/buyCourseForm'

const BuyCourseForm = ({ classes: c, activeUser, setBuying }) => {
	return (
		<Fade
			in
			timeout={{ enter: 500, exit: 500 }}
			unmountOnExit
			style={{ transformOrigin: '0 0 0' }}
		>
			<Fragment>
				<Input
					inputProps={{
						value: activeUser.firstName
					}}
					formControlProps={{ fullWidth: true }}
					labelText="First name"
				/>
				<Input
					inputProps={{
						value: activeUser.lastName
					}}
					formControlProps={{ fullWidth: true }}
					labelText="Last name"
				/>
				<Input
					inputProps={{
						value: activeUser.email
					}}
					formControlProps={{ fullWidth: true }}
					labelText="Email"
				/>
				<Input
					inputProps={{
						value: activeUser.country
					}}
					formControlProps={{ fullWidth: true }}
					labelText="Country"
				/>
				<div style={{ marginTop: '20px' }}>
					<p>Choose your payment method:</p>
					<GridContainer>
						<RadioGroup>
							<FormControlLabel
								control={<Radio value="card" />}
								label="Credit card"
							/>
							<FormControlLabel
								control={<Radio value="paypal" />}
								label="Paypal"
							/>
							<FormControlLabel
								control={<Radio value="wepay" />}
								label="WePay"
							/>
						</RadioGroup>
					</GridContainer>
				</div>
				<GridContainer justify="flex-end">
					<Button
						className={c.button}
						onClick={() => setBuying(false)}
					>
						Cancel
					</Button>
					<Button className={c.button} color="primary">
						Buy now
					</Button>
				</GridContainer>
			</Fragment>
		</Fade>
	)
}

export default withStyles(style)(BuyCourseForm)
