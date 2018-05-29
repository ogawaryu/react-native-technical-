import Home from './container/Home'
import RepositoryInfo from './container/RepositoryInfo'

import {
  createStackNavigator
} from 'react-navigation'

export default createStackNavigator({
  Home: { screen: Home },
  RepositoryInfo: { screen: RepositoryInfo }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#343438'
    },
    headerTintColor: '#fff'
  }
})
