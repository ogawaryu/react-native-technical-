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

export default SubTitle
