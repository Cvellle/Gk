import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

import ErrorBoundaryRedirect from './ErrorBoundaryRedirect'

import Layout from '../layouts/Layout'

import LINKS from './sidebar'

import { GET_ME_QUERY } from '@apollo/client/queries'
import { useQuery } from 'react-apollo-hooks'
import useReactRouter from 'use-react-router'

const PrivateRoute = ({ componentPath, ...rest }) => {
  //UsereactRouter
  const { history, location, match } = useReactRouter()

  const [dynamicComponent, setDynamicComponent] = useState()

  const { data } = useQuery(GET_ME_QUERY)

  useEffect(() => {
    const role = data && data.me && data.me.currentRole
    setDynamicComponent(lazy(() => import(`../pages/protected/${role}/${componentPath}`)))
  }, [componentPath, data])

  const DynamicComponent = dynamicComponent
  let userData
  if (data.me && data.roles) {
    userData = { ...data.me, roles: data.roles.json }
  }

  return (
    <Route
      {...rest}
      render={props =>
        userData && userData.currentRole ? (
          <Layout links={LINKS[userData.currentRole]} userData={userData} title={rest.name}>
            <ErrorBoundaryRedirect>
              <Suspense fallback={<div>Loading</div>}>{dynamicComponent && <DynamicComponent {...props} />}</Suspense>
            </ErrorBoundaryRedirect>
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default PrivateRoute
