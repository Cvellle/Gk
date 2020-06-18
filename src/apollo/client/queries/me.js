import gql from 'graphql-tag'

const GET_ME_QUERY = gql`
    query {
        me @client {
            firstName
            lastName
            # timeZone
            currentRole
        }
        roles @client {
            json
        }
    }
`

const LOGOUT_LOCAL_QUERY = gql`
    query {
        logoutLocal @client
    }
`

export { GET_ME_QUERY, LOGOUT_LOCAL_QUERY }
