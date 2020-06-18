import React from 'react'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import CustomTable from '@components/CustomTable'

import { TICKETS_QUERY } from '@apollo/server/queries'

const columns = [
    {
        title: 'Date',
        field: 'date',
    },
    {
        title: 'Subject',
        field: 'subject',
    },
    {
        title: 'Status',
        field: 'status',
    },
    {
        title: 'Created At',
        field: 'createdAt',
    },
]
class Tickets extends React.Component {
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
            query: TICKETS_QUERY,
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
        const { tickets } = response.data
        return {
            data: tickets.docs,
            page: e.page,
            totalCount: tickets.total,
        }
    }

    render() {
        return (
            <>
                <CustomTable
                    title={'Tickets'}
                    columns={columns}
                    data={this.getData}
                    onRowClick={this.onDetails}
                    onAdd={this.onAdd}
                />
            </>
        )
    }
}

export default withRouter(withApollo(Tickets))
