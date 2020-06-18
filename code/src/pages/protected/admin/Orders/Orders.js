import React from 'react'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import CustomTable from '@components/CustomTable'

import { ORDERS_QUERY } from '@apollo/server/queries'
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
        title: 'Buyer',
        field: 'buyer.fullName',
    },
    {
        title: 'Product',
        field: 'product.name',
    },
]
class OrdersPage extends React.Component {
    state = {
        timeZone: null,
    }

    onAdd = () => {
        const { history } = this.props
        return history.push(`/orders/add`)
    }

    onDetails = (_, row) => {
        const { history } = this.props
        return history.push(`/orders/show/${row._id}`)
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
            query: ORDERS_QUERY,
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
        const { orders } = response.data
        return {
            data: orders.docs,
            page: e.page,
            totalCount: orders.total,
        }
    }

    render() {
        const { timeZone } = this.state
        return (
            <>
                {timeZone && (
                    <CustomTable
                        title={'All Orders'}
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

export default withRouter(withApollo(OrdersPage))
