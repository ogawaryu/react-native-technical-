import Home from './containers/Home'
import RepositoryInfo from './containers/RepositoryInfo'

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
