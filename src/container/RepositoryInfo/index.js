// @flow
import React, { Component } from 'react'
import graphql from './graphql'
import { Query } from 'react-apollo'
import RepositoryInfo from './RepositoryInfo'
import LoadingView from '../../components/LoadingView'

type Props = {
  navigation: Object
}

class IndexComponent extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Repository Info')
    }
  }

  render () {
    let { params } = this.props.navigation.state
    return (
      <Query query={graphql} variables={{ login: params.login, repository: params.title }}>
        {({ loading, data }) => (
          <LoadingView loading={loading}>
            <RepositoryInfo {...this.props} data={data} />
          </LoadingView>
        )}
      </Query>
    )
  }
}

export default IndexComponent
