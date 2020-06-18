import React from 'react'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import CustomTable from '@components/CustomTable'

import { TEACHER_GROUPS_QUERY } from '@apollo/server/queries'

const columns = [
    {
        title: 'isNative',
        field: 'isNative',
    },
    {
        title: 'targetGroup',
        field: 'targetGroup',
    },
    {
        title: 'level',
        field: 'level',
    },
]
class TeacherGroupsPage extends React.Component {
    onAdd = () => {
        const { history } = this.props
        return history.push(`/teacher-groups/add`)
    }

    onDetails = (_, row) => {
        const { history } = this.props
        return history.push(`/teacher-groups/show/${row._id}`)
    }

    getData = async e => {
        const { query } = this.props.client
        let queryOptions = {
            query: TEACHER_GROUPS_QUERY,
            fetchPolicy: 'network-only',
            variables: {
                pagination: {
                    page: e.page + 1,
                    limit: e.pageSize,
                },
                search: e.search,
            },
        }

        if (e.orderBy) {
            queryOptions.variables = {
                ...queryOptions.variables,
                sort: {
                    field: e.orderBy.field,
                    order: e.orderDirection === 'asc' ? 1 : -1,
                },
            }
        }

        const response = await query(queryOptions)
        const { teachersGroups } = response.data
        return {
            data: teachersGroups.docs,
            page: e.page,
            totalCount: teachersGroups.total,
        }
    }

    render() {
        return (
            <>
                <CustomTable
                    title={'All Teacher Groups'}
                    columns={columns}
                    data={this.getData}
                    onRowClick={this.onDetails}
                    onAdd={this.onAdd}
                />
            </>
        )
    }
}

export default withRouter(withApollo(TeacherGroupsPage))
