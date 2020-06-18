import gql from 'graphql-tag'

const SIDEBAR_QUERY = gql`
    query {
        sidebar @client {
            mobileOpen
            miniActive
            activeCollapse
        }
    }
`
export { SIDEBAR_QUERY }
