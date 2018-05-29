// @flow
import React from 'react'
import styles from './styles'
import {
  ActivityIndicator,
  View
} from 'react-native'

type Props = {
  loading: boolean,
  children: React.children
}

const LoadingView = (props: Props) => {
  return props.loading ? (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#3e7db1' />
    </View>
  ) : props.children
}

export default LoadingView
