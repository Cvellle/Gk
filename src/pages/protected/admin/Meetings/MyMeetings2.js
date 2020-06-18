import React from 'react'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import CustomTable from '@components/CustomTable'

import { MY_MEETINGS_QUERY } from '@apollo/server/queries'

const columns = [
    {
        title: 'Date',
        field: 'date',
    },
    {
        title: 'Type',
        field: 'meetingType',
    },
    {
        title: 'Title',
        field: 'title',
    },
    {
        title: 'First Name',
        field: 'members[0].firstName',
    },
    {
        title: 'Last Name',
        field: 'members[0].lastName',
    },
]
class MyMeetings extends React.Component {
    onAdd = () => {
        const { history } = this.props
        return history.push(`/meetings/add`)
    }

    onDetails = (_, row) => {
        const { history } = this.props
        return history.push(`/meetings/show/${row._id}`)
    }

    getData = async e => {
        const { query } = this.props.client
        let queryOptions = {
            query: MY_MEETINGS_QUERY,
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
        const { myMeetings } = response.data
        return {
            data: myMeetings.docs,
            page: e.page,
            totalCount: myMeetings.total,
        }
    }

    render() {
        return (
            <>
                <CustomTable
                    title={'My Meetings'}
                    columns={columns}
                    data={this.getData}
                    onRowClick={this.onDetails}
                    onAdd={this.onAdd}
                />
            </>
        )
    }
}

export default withRouter(withApollo(MyMeetings))
