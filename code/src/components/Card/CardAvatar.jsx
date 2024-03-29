import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import cardAvatarStyle from '../../assets/jss/components/cardAvatarStyle'

const CardAvatar = ({
    classes,
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
}) => {
    const cardAvatarClasses = classNames({
        [classes.cardAvatar]: true,
        [classes.cardAvatarProfile]: profile,
        [classes.cardAvatarPlain]: plain,
        [classes.cardAvatarTestimonial]: testimonial,
        [classes.cardAvatarTestimonialFooter]: testimonialFooter,
        [className]: className !== undefined,
    })
    return (
        <div className={cardAvatarClasses} {...rest}>
            {children}
        </div>
    )
}

CardAvatar.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    profile: PropTypes.bool,
    plain: PropTypes.bool,
    testimonial: PropTypes.bool,
    testimonialFooter: PropTypes.bool,
}

export default withStyles(cardAvatarStyle)(CardAvatar)
