// @flow
import React, { Component } from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image
} from 'react-native'

type Props = {
  forkAmount: number,
  starAmount: number,
};

export default class ScoreView extends Component<Props> {
  render () {
    let {
      forkAmount,
      starAmount
    } = this.props
    return (
      <View style={styles.containerScore}>
        <View style={styles.score}>
          <Image style={styles.scoreImage} source={require('./img/icon_fork.png')} />
          <Text style={styles.scoreCount}>{forkAmount}</Text>
        </View>
        <View style={styles.score}>
          <Image style={styles.scoreImage} source={require('./img/icon_star.png')} />
          <Text style={styles.scoreCount}>{starAmount}</Text>
        </View>
      </View>
    )
  }
}
