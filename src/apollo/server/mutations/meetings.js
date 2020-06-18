import gql from 'graphql-tag'

const CREATE_MEETING = gql`
    mutation CreateMeeting($data: MeetingInput!) {
        createMeeting(data: $data) {
            _id
            date
            title
            meetingType
            description
            sessionId
        }
    }
`

export { CREATE_MEETING }
