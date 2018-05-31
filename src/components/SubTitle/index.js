// @flow
import React from 'react'
import styles from './styles'
import {
  Text,
  View
} from 'react-native'

type Props = {
  opened: number,
  closed: number
}

const SubTitle = ({opened, closed}: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>
      <Text style={styles.opened}>{opened} opened </Text>/ {closed} closed
    </Text>
  </View>
)

SubTitle.defaultProps = {
  opened: 0,
  closed: 0
}

export default SubTitle
