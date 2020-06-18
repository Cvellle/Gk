import gql from 'graphql-tag'

const STREAM_GENERATE_TOKEN = gql`
    mutation StreamGenerateToken($data: streamInput!) {
        streamGenerateToken(data: $data)
    }
`

export { STREAM_GENERATE_TOKEN }
