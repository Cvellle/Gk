import React from 'react'

import { Redirect } from 'react-router-dom'

class ErrorBoundaryRedirect extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        //console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return <Redirect to="/" />
        }

        return this.props.children
    }
}

export default ErrorBoundaryRedirect
