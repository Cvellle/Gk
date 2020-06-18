import React from 'react'

import { withStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import Button from '@components/CustomButtons/Button'
import CustomTable from '@components/CustomTable'

import style from '@assets/jss/pages/usersPage'

import { PRODUCTS_QUERY } from '@apollo/server/queries'

const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Price', field: 'price' },
    { title: 'Publisher', field: 'publisher' },
    { title: 'Target Group', field: 'targetGroup' },
    { title: 'Level', field: 'level' },
    { title: 'Status', field: 'status' },
]

class ProductsPage extends React.Component {
    onAdd = () => {
        const { history } = this.props
        return history.push(`/products/add`)
    }

    onDetails = (_, row) => {
        const { history } = this.props
        return history.push(`/products/show/${row._id}`)
    }

    getData = async e => {
        const { query } = this.props.client
        let queryOptions = {
            query: PRODUCTS_QUERY,
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
        const { products } = response.data
        return {
            data: products.docs,
            page: e.page,
            totalCount: products.total,
        }
    }

    render() {
        return (
            <>
                <CustomTable
                    title={'Products'}
                    columns={columns}
                    data={this.getData}
                    onRowClick={this.onDetails}
                    onAdd={this.onAdd}
                />
            </>
        )
    }
}

export default withRouter(withApollo(withStyles(style)(ProductsPage)))
