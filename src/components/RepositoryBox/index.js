// @flow
import React from 'react'
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
}

const MAX_LENGTH = 80

const RepositoryBox = ({repositoryName, description, alignLeft, children}: Props) => (
  <View style={alignLeft ? styles.repositoryLeft : styles.repository}>
    <Text style={styles.repositoryTitle}>{repositoryName}</Text>
    <Text>
      {description.length > MAX_LENGTH ? `${description.substring(0, MAX_LENGTH)} ...` : description }
    </Text>
    {children}
  </View>
)

RepositoryBox.defaultProps = {
  repositoryName: '',
  description: '',
  alignLeft: false,
  children: null
}

export default RepositoryBox
