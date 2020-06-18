import gql from 'graphql-tag'

const MEETINGS_QUERY = gql`
    query Meetings(
        $pagination: PaginationInput
        $sort: MeetingSortInput
        $search: String
    ) {
        meetings(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                _id
                date
                members {
                    user {
                        _id
                        firstName
                        lastName
                    }
                }
                meetingType
                title
                sessionId
            }
        }
    }
`

const MY_MEETINGS_QUERY = gql`
    query MyMeetings(
        $pagination: PaginationInput
        $sort: MeetingSortInput
        $search: String
    ) {
        myMeetings(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                _id
                date
                members {
                    user {
                        _id
                        firstName
                        lastName
                    }
                }
                meetingType
                title
                sessionId
            }
        }
    }
`

const MEETING_QUERY = gql`
    query Meeting($id: ID) {
        meetings(id: $id) {
            docs {
                _id
                date
                members {
                    user {
                        _id
                        firstName
                        lastName
                    }
                }
                meetingType
                title
                sessionId
            }
        }
    }
`

export { MEETINGS_QUERY, MEETING_QUERY, MY_MEETINGS_QUERY }
