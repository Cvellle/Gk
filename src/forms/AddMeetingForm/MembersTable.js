import React from 'react'
import { withStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import Button from '@components/CustomButtons/Button'
import CustomTable from '@components/CustomTable'

import style from '@assets/jss/pages/usersPage'

import { USERS_QUERY } from '@apollo/server/queries'

const columns = [
    {
        title: 'First Name',
        field: 'firstName',
    },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Email', field: 'email' },
    { title: 'Country', field: 'country' },
]

class UsersPage extends React.Component {
    state = {
        data: [],
        page: null,
        totalCount: null,
        selected: [],
        pageSelected: [],
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (
            this.props.dialogItems.length < prevProps.dialogItems.length &&
            prevProps.dialogItems.length === prevState.selected.length
        ) {
            let deletedItem = prevProps.dialogItems.filter(
                item => !this.props.dialogItems.includes(item),
            )[0]
            this.setState({
                selected: this.props.dialogItems,
                pageSelected: this.state.pageSelected.filter(
                    item => item._id !== deletedItem.__id,
                ),
                data: this.state.data.map(item => {
                    if (item._id === deletedItem._id) {
                        item.tableData.checked = false
                    }
                    return item
                }),
            })
        }
    }

    onAdd = () => {
        const { history } = this.props
        return history.push(`/users/add`)
    }

    onDetails = (_, row) => {
        const { history } = this.props
        return history.push(`/users/show/${row._id}`)
    }

    getData = async e => {
        const { query } = this.props.client
        const { items } = this.props
        let queryOptions = {
            query: USERS_QUERY,
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
        const { users } = response.data
        await this.setState({
            selected: [...this.state.selected, ...items],
        })
        await this.setState({
            data: users.docs.map(user => {
                let checked = false
                this.state.selected.forEach(item => {
                    if (item._id === user._id) {
                        user.tableData = { ...user.tableData, checked: true }
                        checked = true
                    }
                })
                if (!checked) {
                    user.tableData = { ...user.tableData, checked: false }
                }

                return user
            }),
            page: e.page,
            totalCount: users.total,
        })

        return this.state
    }

    inThisPage = id => {
        let isOnThisPage = false
        this.state.data.forEach(item => {
            if (item._id === id) {
                isOnThisPage = true
            }
        })
        return !isOnThisPage
    }

    onSelectionChange = async e => {
        await this.setState({
            pageSelected: e,
            selected: e.concat(
                this.state.selected.filter(item => this.inThisPage(item._id)),
            ),
        })
        this.props.onChange(this.state.selected)
    }

    resetPageSelected = () => {
        this.setState({
            pageSelected: [],
        })
    }

    render() {
        return (
            <>
                <CustomTable
                    title={'Users'}
                    columns={columns}
                    data={this.getData}
                    onRowClick={() => {}}
                    onAdd={() => {}}
                    onSelectionChange={this.onSelectionChange}
                    onChangePage={this.resetPageSelected}
                    options={{
                        selection: true,
                    }}
                />
            </>
        )
    }
}

export default withRouter(withApollo(withStyles(style)(UsersPage)))
