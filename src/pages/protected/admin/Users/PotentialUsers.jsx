import React from 'react'
import useReactRouter from 'use-react-router'
import { withApollo } from 'react-apollo'
import { POTENTIAL_USERS_QUERY } from '@apollo/server/queries'
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
]

const PotentialUsersPage = ({ client }) => {
  //   const classes = useStyles()
  const { history } = useReactRouter()

  const onAdd = () => history.push(`/users/add`)
  const onDetails = (_, row) => history.push(`/users/${row._id}`)

  const getData = async e => {
    const { query } = client
    let queryOptions = {
      query: POTENTIAL_USERS_QUERY,
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
    const { getPotentialUsers } = response.data
    console.log(getPotentialUsers)
    return {
      data: getPotentialUsers.docs,
      page: e.page,
      totalCount: getPotentialUsers.totalPages,
    }
  }

  return (
    <CustomTable
      title={'Lista Potencijalnih Korisnika'}
      columns={columns}
      data={getData}
      onRowClick={onDetails}
      onAdd={onAdd}
    />
  )
}

export default withApollo(PotentialUsersPage)
