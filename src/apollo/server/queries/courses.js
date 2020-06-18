import gql from 'graphql-tag'

const ACTIVE_COURSES_QUERY = gql`
    query ActiveCourses(
        $pagination: PaginationInput
        $sort: CourseSortInput
        $search: String
    ) {
        activeCourses(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                _id
                program {
                    _id
                    name
                }
                isGroup
                isPrivate
                status
                members {
                    _id
                    fullName
                }
                classes {
                    class
                    classId
                }
                seats
                dynamics
                bookedTime {
                    day
                    time
                }
                teachersGroup {
                    _id
                    isNative
                    targetGroup
                    level
                }
                classDuration
            }
        }
    }
`

const ARCHIVED_COURSES_QUERY = gql`
    query ArchivedCourses(
        $pagination: PaginationInput
        $sort: CourseSortInput
        $search: String
    ) {
        archivedCourses(pagination: $pagination, sort: $sort, search: $search) {
            total
            limit
            page
            pages
            docs {
                _id
                program {
                    _id
                    name
                }
                isGroup
                isPrivate
                status
                members {
                    _id
                    fullName
                }
                classes {
                    class
                    classId
                }
                seats
                dynamics
                bookedTime {
                    day
                    time
                }
                teachersGroup {
                    _id
                    isNative
                    targetGroup
                    level
                }
                classDuration
            }
        }
    }
`

export { ACTIVE_COURSES_QUERY, ARCHIVED_COURSES_QUERY }
