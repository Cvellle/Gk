import gql from 'graphql-tag'

const PRODUCTS_QUERY = gql`
    query Products(
        $id: ID
        $pagination: PaginationInput
        $sort: ProductSortInput
        $search: String
    ) {
        products(
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
                name
                price
                description
                image
                licenced
                isProgram
                isAddOn
                status
                publisher
                targetGroup
                level
                classDuration
                parent {
                    _id
                    name
                }
                lectures {
                    _id
                    name
                }
            }
        }
    }
`
export { PRODUCTS_QUERY }
