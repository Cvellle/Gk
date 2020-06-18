import gql from 'graphql-tag'

const TOOGLE_DRAWER = gql`
    mutation {
        toogleDrawer @client
    }
`

const TOOGLE_MINI = gql`
    mutation {
        toogleMini @client
    }
`

const TOOGLE_COLLAPSE = gql`
    mutation($value: String) {
        toogleCollapse(value: $value) @client
    }
`

export { TOOGLE_DRAWER, TOOGLE_MINI, TOOGLE_COLLAPSE }
