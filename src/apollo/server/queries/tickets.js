import gql from 'graphql-tag'

const TICKETS_QUERY = gql`
    query Tickets(
        $id: ID
        $pagination: PaginationInput
        $sort: TicketSortInput
        $search: String
    ) {
        tickets(
            id: $id
            pagination: $pagination
            sort: $sort
            search: $search
        ) {
            total
            limit
            page
            pages
            docs {
                _id
                subject
                description
                submittedBy {
                    _id
                    firstName
                    lastName
                    email
                }
                takenBy {
                    _id
                    firstName
                    lastName
                    email
                }
                status
                messages {
                    user {
                        _id
                        firstName
                        lastName
                        email
                    }
                }
                createdAt
            }
        }
    }
`
export { TICKETS_QUERY }
