import React from 'react'

import useReactRouter from 'use-react-router'

import { useQuery, useMutation } from 'react-apollo-hooks'
import { MEETING_QUERY } from '@apollo/server/queries'

import { STREAM_GENERATE_TOKEN } from '@apollo/server/mutations'

import VideoStream from './VideoStream'

const Meeting = () => {
    const [meetingId, setMeetingId] = React.useState()
    const { history } = useReactRouter()

    const [sessionId, setSessionId] = React.useState(null)
    const [token, setToken] = React.useState(null)
    const [meetingData, setMeetingData] = React.useState(null)

    const generateToken = useMutation(STREAM_GENERATE_TOKEN, {
        variables: { data: { id: sessionId, type: 'MEETING' } },
    })

    const { data } = useQuery(MEETING_QUERY, {
        fetchPolicy: 'network-only',
        variables: {
            id: meetingId,
        },
    })

    const onJoin = async () => {
        try {
            const response = await generateToken()
            setToken(response.data.streamGenerateToken)
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        setMeetingId(
            history.location.pathname
                .split('/')
                .slice(-1)
                .pop(),
        )
        if (data && data.meetings && data.meetings.docs[0]) {
            setSessionId(data.meetings.docs[0].sessionId)
            setMeetingData(data.meetings.docs[0])
        }
    }, [data, generateToken, history.location.pathname, sessionId])

    return (
        <>
            <div>Meeting {meetingId}</div>

            <VideoStream
                data={meetingData}
                onJoin={onJoin}
                sessionId={sessionId}
                token={token}
            />
        </>
    )
}

export default Meeting
