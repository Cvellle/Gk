import React, { useState, useEffect } from 'react'
import useReactRouter from 'use-react-router'
import { withApollo } from 'react-apollo'
import CustomTable from '@components/CustomTable'
import { ARCHIVED_COURSES_QUERY } from '@apollo/server/queries'
import { GET_ME_QUERY } from '@apollo/client/queries'
// import moment from 'moment-timezone'

const columns = timeZone => [
  {
    title: 'Program',
    field: 'program.name',
  },
  {
    title: 'Group',
    field: 'isGroup',
  },
  {
    title: 'isPrivate',
    field: 'isPrivate',
  },
  {
    title: 'Seats',
    field: 'seats',
  },
]

const ArchivedCoursesPage = ({ client }) => {
  const { history } = useReactRouter()

  const [timeZone, setTimeZone] = useState(null)

  const onAdd = () => history.push(`/courses/add`)

  const onDetails = (_, row) => history.push(`/courses/show/${row._id}`)

  useEffect(() => {
    const { query } = client
    const getMe = async () => {
      const response = await query({ query: GET_ME_QUERY })
      setTimeZone(response.data.me.timeZone)
    }
    getMe()
  }, [client])

  const getData = async e => {
    const { query } = client
    let queryOptions = {
      query: ARCHIVED_COURSES_QUERY,
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
    const { archivedCourses } = response.data
    return {
      data: archivedCourses.docs,
      page: e.page,
      totalCount: archivedCourses.total,
    }
  }

  return (
    <>
      {timeZone && (
        <CustomTable
          title={'Completed Courses'}
          columns={columns(timeZone)}
          data={getData}
          onRowClick={onDetails}
          onAdd={onAdd}
        />
      )}
    </>
  )
}

export default withApollo(ArchivedCoursesPage)
