import React, { useState, useEffect } from 'react'
import useReactRouter from 'use-react-router'
import { withApollo } from 'react-apollo'
import { USERS_QUERY } from '@apollo/server/queries'
// import { makeStyles } from '@material-ui/core/styles'
import CustomTable from '@components/CustomTable'
// import styles from '@assets/jss/pages/usersPage'

// const useStyles = makeStyles(styles)

const columns = [
  {
    title: 'Ime',
    field: 'firstName',
  },
  { title: 'Prezime', field: 'lastName' },
  { title: 'Email', field: 'email' },
  { title: 'Uloga', field: 'roles' },
]

const UsersPage = ({ client }) => {
  //   const classes = useStyles()
  const { history } = useReactRouter()

  const onAdd = () => history.push(`/users/add`)
  const onDetails = (_, row) => history.push(`/users/${row._id}`)

  const getData = async e => {
    const { query } = client
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

    console.log('dataUser', response)
    return {
      data: users.docs,
      page: e.page,
      totalCount: users.totalDocs,
    }


  }





  return (
    <CustomTable
      title={'Lista Registrovanih Korisnika'}
      columns={columns}
      data={getData}
      onRowClick={onDetails}
      onAdd={onAdd}
    />

  )
}

export default withApollo(UsersPage)
