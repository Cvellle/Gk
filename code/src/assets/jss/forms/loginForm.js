const loginForm = theme => ({
    content: {
        marginTop: '5px',
        padding: '0px 15px 15px 15px',
    },
    icon: {
        fontSize: 20,
        color:'#2577AD',
        marginTop:'35px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1px',
        },
       
    },
})

export default loginForm
