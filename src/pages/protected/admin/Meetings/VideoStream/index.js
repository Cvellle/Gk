import React, { Component } from 'react'

import { OTSession, OTStreams, preloadScript } from 'opentok-react'
import ConnectionStatus from './ConnectionStatus'
import Publisher from './Publisher'
import Subscriber from './Subscriber'

import Clock from 'react-live-clock'

import ContainerDimensions from 'react-container-dimensions'

class VideoStream extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            connected: false,
        }

        this.sessionEvents = {
            sessionConnected: () => {
                this.setState({ connected: true })
            },
            sessionDisconnected: () => {
                this.setState({ connected: false })
            },
        }
    }

    componentWillMount() {
        /*
        OT.registerScreenSharingExtension(
            'chrome',
            config.CHROME_EXTENSION_ID,
            2,
        )
        */
    }

    onError = err => {
        this.setState({ error: `Failed to connect: ${err.message}` })
    }

    renderSession = () => {
        const { sessionId, token } = this.props
        const { error, connected } = this.state

        return (
            <ContainerDimensions>
                {({ width, height }) => (
                    <OTSession
                        apiKey={process.env.REACT_APP_OPENTOK_API_KEY}
                        sessionId={sessionId}
                        token={token}
                        eventHandlers={this.sessionEvents}
                        onError={this.onError}
                        properties={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        {error ? <div>{error}</div> : null}

                        <ConnectionStatus connected={connected} />
                        <Publisher width={width} height={height} />
                        <OTStreams>
                            <Subscriber width={width} height={height} />
                        </OTStreams>
                    </OTSession>
                )}
            </ContainerDimensions>
        )
    }

    renderClock = () => {
        const { data } = this.props
        if (data) {
            return (
                <div
                    style={{
                        backgroundColor: 'red',
                    }}
                >
                    <p>{data.date}</p>
                    <Clock format={'hh:mm:ss'} ticking={true} />
                </div>
            )
        }
    }

    render() {
        const { sessionId, token, onJoin } = this.props
        const { connected } = this.state
        if (this.props.data) {
            console.log(this.props.data)
        }
        return (
            <>
                <div
                    style={{
                        backgroundColor: 'black',
                        width: '100%',
                        height: '75vh',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                >
                    {sessionId && token && this.renderSession()}

                    {this.renderClock()}

                    {!token && (
                        <button
                            style={{
                                alignSelf: 'center',
                            }}
                            onClick={onJoin}
                        >
                            JOIN MEETING
                        </button>
                    )}
                </div>
            </>
        )
    }
}

export default preloadScript(VideoStream)
