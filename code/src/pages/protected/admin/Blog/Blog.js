import React from 'react'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import CustomTable from '@components/CustomTable'

import { POSTS_QUERY } from '@apollo/server/queries'
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
        title: 'Updated',
        field: 'updatedAt',
        render: rowData =>
            moment
                .utc(rowData.updatedAt)
                .tz(timeZone)
                .format('DD-MM-YYYY HH:mm'),
    },
    {
        title: 'Title',
        field: 'title',
    },
    {
        title: 'Published',
        field: 'published',
    },
]
class BlogPage extends React.Component {
    state = {
        timeZone: null,
    }

    onAdd = () => {
        const { history } = this.props
        return history.push(`/blog/add`)
    }

    onDetails = (_, row) => {
        const { history } = this.props
        return history.push(`/blog/show/${row._id}`)
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
            query: POSTS_QUERY,
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
        const { posts } = response.data
        return {
            data: posts.docs,
            page: e.page,
            totalCount: posts.total,
        }
    }

    render() {
        const { timeZone } = this.state
        return (
            <>
                {timeZone && (
                    <CustomTable
                        title={'All Posts'}
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

export default withRouter(withApollo(BlogPage))
