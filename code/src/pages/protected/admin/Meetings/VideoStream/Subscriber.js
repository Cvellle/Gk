import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { OTSubscriber } from 'opentok-react'
import CheckBox from './CheckBox'

export default class Subscriber extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            audio: true,
            video: true,
        }

        this.subscriber = React.createRef()
    }

    componentDidMount = () => {
        const mainDiv = ReactDOM.findDOMNode(this.subscriber.current)
        mainDiv.style.width = '100%'
        mainDiv.style.height = '100%'
    }

    setAudio = audio => {
        this.setState({ audio })
    }

    setVideo = video => {
        this.setState({ video })
    }

    onError = err => {
        this.setState({ error: `Failed to subscribe: ${err.message}` })
    }

    getDimensions = () => {
        const { width, height } = this.props
        const minusPercent = 0.2
        if (height < (width / 4) * 3) {
            return {
                height: height * minusPercent,
                width: (height / 3) * 4 * minusPercent,
            }
        } else {
            return {
                width: width * minusPercent,
                height: (width / 4) * 3 * minusPercent,
            }
        }
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: 'green',
                    width: `${this.getDimensions().width}px`,
                    height: `${this.getDimensions().height}px`,
                }}
            >
                {this.state.error ? <div>{this.state.error}</div> : null}

                <OTSubscriber
                    ref={this.subscriber}
                    properties={{
                        width: '100%',
                        height: '100%',
                        subscribeToAudio: this.state.audio,
                        subscribeToVideo: this.state.video,
                    }}
                    onError={this.onError}
                />
                {/*
                <CheckBox
                    label="Subscribe to Audio"
                    initialChecked={this.state.audio}
                    onChange={this.setAudio}
                />
                <CheckBox
                    label="Subscribe to Video"
                    initialChecked={this.state.video}
                    onChange={this.setVideo}
                />*/}
            </div>
        )
    }
}
