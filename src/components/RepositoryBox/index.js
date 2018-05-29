// @flow
import React, { Component } from 'react'
import styles from './styles'

import {
  View,
  Text
} from 'react-native'

type Props = {
  repositoryName: string,
  description: string,
  alignLeft: boolean,
  children: React.Children
};

const MAX_LENGTH = 80

export default class RepositoryBox extends Component<Props> {
  render () {
    let {
      repositoryName,
      description,
      alignLeft
    } = this.props
    return (
      <View style={alignLeft ? styles.repositoryLeft : styles.repository}>
        <Text style={styles.repositoryTitle}>{repositoryName}</Text>
        <Text>
          {description.length > MAX_LENGTH ? `${description.substring(0, MAX_LENGTH)} ...` : description }
        </Text>
        {this.props.children}
      </View>
    )
  }
}
