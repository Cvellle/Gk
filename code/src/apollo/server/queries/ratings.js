import gql from 'graphql-tag'

const RATINGS_QUERY = gql`
    query Ratings(
        $pagination: PaginationInput
        $sort: RatingSortInput
        $search: String
    ) {
        ratings(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                createdAt
                value
                description
                teacher {
                    _id
                    fullName
                }
                student {
                    _id
                    fullName
                }
            }
        }
    }
`
export { RATINGS_QUERY }
