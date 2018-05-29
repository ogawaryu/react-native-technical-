// @flow
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import {
  HttpLink,
  InMemoryCache,
  ApolloClient
} from 'apollo-client-preset'
import Router from './Router'

const token = ''

const client = new ApolloClient({
  link: new HttpLink({ uri: `https://api.github.com/graphql?access_token=${token}` }),
  cache: new InMemoryCache()
})

export default class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    )
  }
}
