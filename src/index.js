import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloProvider } from 'react-apollo'
// import './assets/jss/index.css'
import * as serviceWorker from './serviceWorker'
import Router from './router'
import initApolloConfig from './apollo/config'
import './assets/scss/main.scss'
import MomentUtils from '@date-io/moment'

// Refactor this later and put into separate file

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import blue from '@material-ui/core/colors/blue'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'Montserrat',
    },
})

////////////////////////

const App = () => {
    const [client, setClient] = React.useState(null)
    React.useEffect(() => {
        async function initApollo() {
            setClient(await initApolloConfig())
        }
        initApollo()
    }, [])

    return client ? (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <ThemeProvider theme={theme}>
                <ApolloProvider client={client}>
                    <ApolloHooksProvider client={client}>
                        <Router />
                    </ApolloHooksProvider>
                </ApolloProvider>
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    ) : null
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
