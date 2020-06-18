import gql from 'graphql-tag'

const TEACHER_GROUPS_QUERY = gql`
    query TeacherGroups(
        $pagination: PaginationInput
        $sort: TeachersGroupSortInput
        $search: String
    ) {
        teachersGroups(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                _id
                members {
                    _id
                    fullName
                }
                isNative
                targetGroup
                level
            }
        }
    }
`

export { TEACHER_GROUPS_QUERY }
