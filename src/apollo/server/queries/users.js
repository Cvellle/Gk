import gql from 'graphql-tag'

const USERS_QUERY = gql`
    query getUsers(
        $id: ID
        $pagination: PaginationInput
        $sort: UserSortInput
        $search: String
    ) {
        users(id: $id, pagination: $pagination, sort: $sort, search: $search) {
            totalDocs
            limit
            page
            totalPages
            docs {
                _id
                email
                firstName
                lastName
                city
                roles
                phone
                postalCode
                birthDate
            }
        }
    }
`


const FETCH_ALL_USERS =  gql`
    query{
        users{
            totalDocs
        }
    }
`

const FETCH_POTENTIAL_USERS = gql`
    query{
        getPotentialUsers{
            totalDocs
        }
    }
`

const POTENTIAL_USERS_QUERY = gql`
    query getPotentialUsers(
        $id: ID
        $pagination: PaginationInput
        $sort: UserSortInput
        $search: String
    ) {
        getPotentialUsers(id: $id, pagination: $pagination, sort: $sort, search: $search) {
            totalDocs
            limit
            page
            totalPages
            docs {
                _id
                email
                firstName
                lastName
                city
                roles
                phone
                postalCode
                birthDate
            }
        }
    }
`

const LOGOUT_QUERY = gql`
    query Logout {
        logout
    }
`

export { USERS_QUERY, LOGOUT_QUERY, FETCH_ALL_USERS, FETCH_POTENTIAL_USERS, POTENTIAL_USERS_QUERY }
