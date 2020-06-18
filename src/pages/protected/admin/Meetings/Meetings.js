import React from 'react'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import CustomTable from '@components/CustomTable'

import { MEETINGS_QUERY } from '@apollo/server/queries'
import { GET_ME_QUERY } from '@apollo/client/queries'

import moment from 'moment-timezone'

const columns = timeZone => [
    {
        title: 'Date',
        field: 'date',
        render: rowData =>
            moment
                .utc(rowData.date)
                .tz(timeZone)
                .format('DD-MM-YYYY HH:mm'),
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
        field: 'members[0].user.firstName',
    },
    {
        title: 'Last Name',
        field: 'members[0].user.lastName',
    },
]
class Meetings extends React.Component {
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
            query: MEETINGS_QUERY,
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
        const { meetings } = response.data
        return {
            data: meetings.docs,
            page: e.page,
            totalCount: meetings.total,
        }
    }

    render() {
        const { timeZone } = this.state
        return (
            <>
                {timeZone && (
                    <CustomTable
                        title={'All Meetings'}
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

export default withRouter(withApollo(Meetings))
