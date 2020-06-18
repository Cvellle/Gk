import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
    withStyles,
    FormControl,
    InputLabel,
    FormHelperText,
    Input,
} from '@material-ui/core'

import customInputStyle from '../../assets/jss/components/customInputStyle'

const CustomInput = ({
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    helpText,
}) => {
    const labelClasses = classNames({
        [' ' + classes.labelRootError]: error,
        [' ' + classes.labelRootSuccess]: success && !error,
    })

    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white,
    })

    const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
    })

    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: white,
    })

    let formControlClasses = classes.formControl
    if (formControlProps !== undefined) {
        formControlClasses = classNames(
            formControlProps.className,
            classes.formControl,
        )
    }

    let helpTextClasses = classNames({
        [classes.labelRootError]: error,
        [classes.labelRootSuccess]: success && !error,
    })

    return (
        <FormControl {...formControlProps} className={formControlClasses}>
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + ' ' + labelClasses}
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                classes={{
                    input: inputClasses,
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses,
                }}
                id={id}
                {...inputProps}
            />
            {helpText !== undefined ? (
                <FormHelperText id={id + '-text'} className={helpTextClasses}>
                    {helpText}
                </FormHelperText>
            ) :null}
        </FormControl>
    )
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    inputRootCustomClasses: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool,
    helpText: PropTypes.node,
}

export default withStyles(customInputStyle)(CustomInput)
