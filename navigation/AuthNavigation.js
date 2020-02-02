//AuthNavigation.js
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Login',          
     headerMode: 'none'          //    per togliere la scritta sopra "Login"
  }
)

export default AuthNavigation