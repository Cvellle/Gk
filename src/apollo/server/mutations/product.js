import gql from 'graphql-tag'

const CREATE_PRODUCT = gql`
    mutation CreateProduct($data: createProductInput!) {
        createProduct(data: $data) {
            _id
        }
    }
`

export { CREATE_PRODUCT }
