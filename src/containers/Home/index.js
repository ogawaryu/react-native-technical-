// @flow
import React, { Component } from 'react'
import graphql from './graphql'
import { Query } from 'react-apollo'
import Home from './Home'
import LoadingView from '../../components/LoadingView'

class IndexComponent extends Component {
  static navigationOptions = {
    title: 'GitHub JavascriptPop'
  }

  render () {
    return (
      <Query query={graphql}>
        {({ loading, data }) => (
          <LoadingView loading={loading}>
            <Home {...this.props} data={data} />
          </LoadingView>
        )}
      </Query>
    )
  }
}

export default IndexComponent
