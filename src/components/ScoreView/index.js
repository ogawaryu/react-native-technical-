// @flow
import React from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image
} from 'react-native'

type Props = {
  forkAmount: number,
  starAmount: number
}

const ScoreView = ({forkAmount, starAmount}: Props) => (
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

ScoreView.defaultProps = {
  forkAmount: 0,
  starAmount: 0
}

export default ScoreView
