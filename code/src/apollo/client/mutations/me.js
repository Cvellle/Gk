import gql from 'graphql-tag'

const LOGIN_LOCAL = gql`
    mutation(
        $id: String
        $firstName: String!
        $lastName: String!
        $currentRole: String!
        # $timeZone: String!
        $roles: [Role!]!
    ) {
        loginLocal(
            id: $id
            firstName: $firstName
            lastName: $lastName
            currentRole: $currentRole
            # timeZone: $timeZone
            roles: $roles
        ) @client
    }
`

const LOGOUT_LOCAL_MUTATION = gql`
    mutation {
        logoutLocal @client
    }
`

export { LOGIN_LOCAL, LOGOUT_LOCAL_MUTATION }
