import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerLeft: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  imageLeft: {
    marginRight: 10,
    height: 30,
    width: 30
  },
  image: {
    height: 40,
    width: 40
  },
  containerLabel: {
    alignItems: 'center'
  },
  username: {
    color: '#6eafd7',
    fontWeight: 'bold'
  },
  name: {
    fontSize: 12
  }
})
