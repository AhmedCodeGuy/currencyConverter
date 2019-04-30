import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../Containers/Home'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default createAppContainer(PrimaryNav)
