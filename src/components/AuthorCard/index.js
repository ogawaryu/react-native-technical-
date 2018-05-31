// @flow
import React from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image
} from 'react-native'

type Props = {
  userName: string,
  imagePath: string,
  alignLeft: boolean
}

const AuthorCard = ({ userName, imagePath, alignLeft }: Props) => (
  <View style={alignLeft ? styles.containerLeft : styles.container}>
    <Image
      style={alignLeft ? styles.imageLeft : styles.image}
      source={{uri: imagePath}} />
    <View style={alignLeft ? styles.containerLabelLeft : styles.containerLabel}>
      <Text
        style={styles.username}>
        {userName}
      </Text>
    </View>
  </View>
)

AuthorCard.defaultProps = {
  userName: '',
  imagePath: '',
  alignLeft: false
}

export default AuthorCard
