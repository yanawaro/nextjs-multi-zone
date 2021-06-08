/**
 * Apollo Client Configuration
 */

import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, gql } from '@apollo/client'
import { withApollo } from 'next-apollo'
import { GRAPHQL_URL, GRAPHQL_X_API_KEY, GRAPHCMS_URL } from '../config'

const graphQlJitta = new HttpLink({
  uri: GRAPHQL_URL,
  headers: {
    'content-language': 'th',
    'X-Api-Key': GRAPHQL_X_API_KEY
  }
})

const NEXT_PUBLIC_GRAPHCMS_APIKEY = process.env.NEXT_PUBLIC_GRAPHCMS_APIKEY
let graphCmsSendHeaders = {}

if (NEXT_PUBLIC_GRAPHCMS_APIKEY) {
  graphCmsSendHeaders = {
    authorization: `Bearer ${NEXT_PUBLIC_GRAPHCMS_APIKEY}`
  }
}

const graphCmslink = new HttpLink({
  uri: GRAPHCMS_URL,
  headers: graphCmsSendHeaders
})

const typeDefs = gql`
  type DefaultFund {
    stockId: String!
  }
`

const apolloClient = new ApolloClient({
  link: ApolloLink.split(
    (operation) => {
      const { link } = operation.getContext()
      if (typeof link === 'undefined') return true
    },
    graphQlJitta,
    graphCmslink
  ),
  cache: new InMemoryCache(),
  name: 'jitta-h4-client',
  version: '0.1.0',
  typeDefs
})

export default withApollo(apolloClient)
