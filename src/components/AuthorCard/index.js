// @flow
import React, { Component } from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image
} from 'react-native'

type Props = {
  imagePath: string,
  userName: string,
  alignLeft: boolean
};

export default class AuthorCard extends Component<Props> {
  render () {
    let {
      userName,
      imagePath,
      alignLeft
    } = this.props
    return (
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
  }
}
