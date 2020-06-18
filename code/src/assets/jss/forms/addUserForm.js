import { transition } from '../main'

const addUserForm = theme => ({
    card: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        margin: '25px 0',
        padding: '25px',
        paddingBottom: '15px',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        borderRadius: '6px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
        transition: 'all 300ms linear',
    },
    header: {
        textAlign: 'center',
        padding: '25px 0 35px',
    },
    title: {
        margin: '0',
        marginLeft: '15px',
    },
    content: {
        marginTop: '20px',
        padding: '20px 15px',
    },
    button: {
        marginRight: '30px',
        ...transition,
    },
    footer: {
        marginTop: '30px',
        height: '100%',
    },
})

export default addUserForm
