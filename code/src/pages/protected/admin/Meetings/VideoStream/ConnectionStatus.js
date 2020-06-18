import React, { Component } from 'react'

export default class ConnectionStatus extends Component {
    render() {
        const { connected } = this.props
        let status = connected ? 'Connected' : 'Disconnected'
        return (
            <div
                style={{
                    position: 'absolute',
                    color: 'white',
                }}
            >
                <strong>Status:</strong> {status}
            </div>
        )
    }
}
