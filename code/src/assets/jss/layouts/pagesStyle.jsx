import { whiteColor } from '../main'

const pagesStyle = theme => ({
    wrapper: {
        height: 'auto',
        minHeight: '100vh',
        position: 'relative',
        top: '0',
        [theme.breakpoints.down('sm')]: {
            minHeight: '100vh',
            overflow: 'hidden',
        },
        [theme.breakpoints.up('lg')]: {
            height: '100vh',
            overflow: 'hidden',
        },
    },
    fullPage: {
        padding: '120px 0',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex!important',
        margin: '0',
        border: '0',
        color: whiteColor,
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            minHeight: 'fit-content!important',
        },
        '& footer': {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            border: 'none !important',
        },
        '&:before,&:after': {
            display: 'block',
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            zIndex: '2',
        },
    },
    logoContainer: {
        width: '400px',
        // height:'300px',
        position: 'fixed',
        top: '7vw',
        left: '50%',
        transform: 'translateX(-50%) translateY(-7vw)',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        [theme.breakpoints.up('lg')]: {
            transform: 'translateX(-147%) translateY(-7vw)',
        },
    },
})

export default pagesStyle
