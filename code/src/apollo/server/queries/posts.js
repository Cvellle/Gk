import gql from 'graphql-tag'

const POSTS_QUERY = gql`
    query Posts(
        $pagination: PaginationInput
        $sort: PostSortInput
        $search: String
    ) {
        posts(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                _id
                title
                body
                category
                published
                authorId {
                    _id
                }
                createdAt
                updatedAt
            }
        }
    }
`

export { POSTS_QUERY }
