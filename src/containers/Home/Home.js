// @flow
import React, { Component } from 'react'
import styles from './styles'
import AuthorCard from '../../components/AuthorCard'
import RepositoryBox from '../../components/RepositoryBox'
import ScoreView from '../../components/ScoreView'
import {
  ScrollView,
  TouchableOpacity
} from 'react-native'

type Props = {
  navigation: Function,
  data: Object,
  search: {
    edges: Array
  }
}

export default class Home extends Component<Props> {
  state = {
    repositorys: []
  }

  componentWillMount () {
    this.setState({
      repositorys: this.props.data.search.edges
    })
  }

  onPressReposityDetails (navigate, item) {
    navigate('RepositoryInfo', {
      title: item.node.name,
      avatarUrl: item.node.owner.avatarUrl,
      login: item.node.owner.login
    })
  }

  render () {
    let { navigate } = this.props.navigation
    return (
      <ScrollView>
        { this.state.repositorys.map((item, indx) => (
          <TouchableOpacity
            style={styles.container}
            key={indx}
            onPress={() => this.onPressReposityDetails(navigate, item)}>
            <RepositoryBox
              description={item.node.description}
              repositoryName={item.node.name}>
              <ScoreView
                forkAmount={item.node.forks.totalCount}
                starAmount={item.node.stargazers.totalCount} />
            </RepositoryBox>
            <AuthorCard
              imagePath={item.node.owner.avatarUrl}
              userName={item.node.owner.login}
              name={item.node.nameWithOwner} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}
