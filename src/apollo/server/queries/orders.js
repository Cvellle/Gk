import gql from 'graphql-tag'

const ORDERS_QUERY = gql`
    query Orders(
        $pagination: PaginationInput
        $sort: OrderSortInput
        $search: String
    ) {
        orders(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                _id
                date
                buyer {
                    _id
                    fullName
                }
                product {
                    _id
                    name
                }
                isProgram
                isGroup
            }
        }
    }
`

export { ORDERS_QUERY }
