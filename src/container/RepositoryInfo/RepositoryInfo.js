// @flow
import React, { Component } from 'react'
import styles from './styles'
import AuthorCard from '../../components/AuthorCard'
import RepositoryBox from '../../components/RepositoryBox'
import SubTile from '../../components/SubTitle'
import {
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native'

type Props = {
  navigation: Object,
  data: Object
}

export default class RepositoryInfo extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Repository Info')
    }
  }

  constructor (props) {
    super(props)
    this.totalClosed = props.data.repositoryOwner.repository.totalClosed.totalCount
    this.totalOpened = props.data.repositoryOwner.repository.totalOpened.totalCount
    this.pullRequests = props.data.repositoryOwner.repository.totalOpened.edges
    this.params = this.props.navigation.state.params
  }

  render () {
    return (
      <ScrollView>
        <SubTile
          opened={this.totalOpened}
          closed={this.totalClosed} />
        { this.pullRequests.map((item, indx) => (
          <TouchableOpacity
            key={indx}
            style={styles.container}
            onPress={() => Linking.openURL(item.node.url)}>
            <RepositoryBox
              description=''
              repositoryName={item.node.title}
              alignLeft />
            <AuthorCard
              imagePath={this.params.avatarUrl}
              userName={this.params.login}
              alignLeft />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}
