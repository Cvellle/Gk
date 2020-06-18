import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '../../components/CustomButtons/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

import SwipeableViews from 'react-swipeable-views'

import style from '../../assets/jss/components/wizardStyle'

class Wizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeStep: 0,
        }
        this.stepRefs = []
    }

    onNext = () => {
        const { activeStep } = this.state
        console.log(this.stepRefs)
        this.stepRefs[activeStep].handleSubmit()
    }

    handleNext = async () => {
        const { activeStep } = this.state

        this.setState({
            activeStep: activeStep + 1,
        })
    }

    handleBack = () => {
        const { activeStep } = this.state
        this.setState({
            activeStep: activeStep - 1,
        })
    }

    handleReset = () => {
        this.setState({ activeStep: 0 })
    }

    renderBackButton = () => {
        const { classes } = this.props
        const { activeStep } = this.state
        if (activeStep === 0) {
            return null
        } else {
            return (
                <div className={classes.left}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                    >
                        Back
                    </Button>
                </div>
            )
        }
    }

    render() {
        const { steps, classes, title, subtitle } = this.props
        const { activeStep } = this.state
        return (
            <div className={classes.wizardContainer}>
                <Card className={classes.card}>
                    <div className={classes.wizardHeader}>
                        <h3 className={classes.title}>{title}</h3>
                        <h5 className={classes.subtitle}>{subtitle}</h5>
                    </div>

                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepLabel
                                    StepIconProps={{
                                        classes: {
                                            root: classes.stepIcon,
                                            active: classes.stepIconActive,
                                            completed:
                                                classes.stepIconCompleted,
                                        },
                                    }}
                                >
                                    {step.title}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <>
                        {activeStep === steps.length ? (
                            <div className={classes.content}>
                                <Typography className={classes.instructions}>
                                    All steps completed
                                </Typography>
                                <Button onClick={this.handleReset}>
                                    Reset
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className={classes.content}>
                                    <SwipeableViews
                                        index={activeStep}
                                        onChangeIndex={() =>
                                            console.log(activeStep)
                                        }
                                    >
                                        {steps.map((step, index) => {
                                            const StepComponent = step.component

                                            return (
                                                <StepComponent
                                                    onSuccess={this.handleNext}
                                                    ref={ref => {
                                                        this.stepRefs[
                                                            index
                                                        ] = ref
                                                        return true
                                                    }}
                                                    key={index}
                                                />
                                            )
                                        })}
                                    </SwipeableViews>
                                </div>
                                <div className={classes.footer}>
                                    {this.renderBackButton()}
                                    <div className={classes.right}>
                                        <Button
                                            color="primary"
                                            onClick={this.onNext}
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Finish'
                                                : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                </Card>
            </div>
        )
    }
}

export default withStyles(style)(Wizard)
