import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import resolvers from './client/resolvers/index'
import state from './client/state'

const initApolloConfig = async () => {
  const cache = new InMemoryCache()

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('auth:token')
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  let URI

  switch (process.env.REACT_APP_NODE) {
    case 'development':
      URI = "http://localhost:4000/graphql"
      break
    case 'staging':
      URI = process.env.REACT_APP_APOLLO_URI_STAGE
      break
    case 'production':
      URI = process.env.REACT_APP_APOLLO_URI_PROD
      break
    default:
      URI = null
      break
  }

  const httpLink = createHttpLink({
    uri: URI,
    credentials: 'include',
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log(graphQLErrors, networkError)
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const link = ApolloLink.from([authLink, errorLink, httpLink])

  const defaultOptions = {}
  const client = new ApolloClient({
    cache,
    link: link,
    resolvers,
    connectToDevTools: process.env.NODE_ENV === 'development',
    defaultOptions: defaultOptions,
  })

  try {
    // See above for additional options, including other storage providers.
    await persistCache({
      cache,
      storage: window.localStorage,
    })
  } catch (error) {
    console.error('Error restoring Apollo cache', error)
  }

  //	write local data to apollo client cache

  if (cache.data.data['$ROOT_QUERY.me']) {
    cache.writeData({
      data: {
        ...state,
        me: cache.data.data['$ROOT_QUERY.me'],
        roles: {
          __typename: 'Role',
          json: cache.data.data['$ROOT_QUERY.roles.json'],
          type: 'json',
        },
      },
    })
  } else {
    cache.writeData({
      data: {
        ...state,
      },
    })
  }

  return client
}

export default initApolloConfig
