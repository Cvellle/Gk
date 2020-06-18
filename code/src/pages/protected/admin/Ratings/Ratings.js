import React from 'react'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import CustomTable from '@components/CustomTable'

import { RATINGS_QUERY } from '@apollo/server/queries'
import { GET_ME_QUERY } from '@apollo/client/queries'

import moment from 'moment-timezone'

const columns = timeZone => [
    {
        title: 'Created',
        field: 'createdAt',
        render: rowData =>
            moment
                .utc(rowData.createdAt)
                .tz(timeZone)
                .format('DD-MM-YYYY HH:mm'),
    },
    {
        title: 'Value',
        field: 'value',
    },
    {
        title: 'Student',
        field: 'student.fullName',
    },
    {
        title: 'Teacher',
        field: 'teacher.fullName',
    },
]
class RatingsPage extends React.Component {
    state = {
        timeZone: null,
    }

    onAdd = () => {
        const { history } = this.props
        return history.push(`/meetings/add`)
    }

    onDetails = (_, row) => {
        const { history } = this.props
        return history.push(`/meetings/show/${row._id}`)
    }

    componentDidMount = async () => {
        const { query } = this.props.client
        const response = await query({ query: GET_ME_QUERY })
        this.setState({
            timeZone: response.data.me.timeZone,
        })
    }

    getData = async e => {
        const { query } = this.props.client
        let queryOptions = {
            query: RATINGS_QUERY,
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
        const { ratings } = response.data
        return {
            data: ratings.docs,
            page: e.page,
            totalCount: ratings.total,
        }
    }

    render() {
        const { timeZone } = this.state
        return (
            <>
                {timeZone && (
                    <CustomTable
                        title={'All Ratings'}
                        columns={columns(timeZone)}
                        data={this.getData}
                        onRowClick={this.onDetails}
                        onAdd={this.onAdd}
                    />
                )}
            </>
        )
    }
}

export default withRouter(withApollo(RatingsPage))
