import gql from 'graphql-tag'

const CREATE_LECTURE = gql`
    mutation CreateLecture($data: createLectureInput!) {
        createLecture(data: $data) {
            _id
        }
    }
`

export { CREATE_LECTURE }
