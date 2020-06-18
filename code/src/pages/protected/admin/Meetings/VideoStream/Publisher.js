import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { OTPublisher } from 'opentok-react'
import RadioButtons from './RadioButtons'
import CheckBox from './CheckBox'

import ContainerDimensions from 'react-container-dimensions'

export default class Publisher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            audio: true,
            video: true,
            videoSource: 'camera',
        }

        this.publisher = React.createRef()
    }

    componentDidMount = () => {
        const mainDiv = ReactDOM.findDOMNode(this.publisher.current)
        mainDiv.style.width = '100%'
        mainDiv.style.height = '100%'
    }

    setAudio = audio => {
        this.setState({ audio })
    }

    setVideo = video => {
        this.setState({ video })
    }

    setVideoSource = videoSource => {
        this.setState({ videoSource })
    }

    onError = err => {
        this.setState({ error: `Failed to publish: ${err.message}` })
    }

    getDimensions = () => {
        const { width, height } = this.props
        const minusPercent = 0.8
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
                    width: `${this.getDimensions().width}px`,
                    height: `${this.getDimensions().height}px`,
                }}
            >
                {this.state.error ? <div>{this.state.error}</div> : null}
                <OTPublisher
                    ref={this.publisher}
                    properties={{
                        width: '100%',
                        height: '100%',

                        publishAudio: this.state.audio,
                        publishVideo: this.state.video,
                        videoSource:
                            this.state.videoSource === 'screen'
                                ? 'screen'
                                : undefined,
                    }}
                    onError={this.onError}
                />

                <div
                    style={{
                        position: 'absolute',
                        color: 'white',
                        top: '100px',
                        zIndex: 200,
                    }}
                >
                    <RadioButtons
                        buttons={[
                            {
                                label: 'Camera',
                                value: 'camera',
                            },
                            {
                                label: 'Screen',
                                value: 'screen',
                            },
                        ]}
                        initialChecked={this.state.videoSource}
                        onChange={this.setVideoSource}
                    />
                    <CheckBox
                        label="Publish Audio"
                        initialChecked={this.state.audio}
                        onChange={this.setAudio}
                    />
                    <CheckBox
                        label="Publish Video"
                        initialChecked={this.state.video}
                        onChange={this.setVideo}
                    />
                </div>
            </div>
        )
    }
}
