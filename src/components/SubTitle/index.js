// @flow
import React, { Component } from 'react'
import styles from './styles'
import {
  Text,
  View
} from 'react-native'

type Props = {
  opened: number,
  closed: number
};

export default class SubTitle extends Component<Props> {
  render () {
    let {
      opened,
      closed
    } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          <Text style={styles.opened}>{opened} opened </Text>/ {closed} closed
        </Text>
      </View>
    )
  }
}
