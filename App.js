import { TabScreen } from './src/screens/TabScreen'
import  Menu2  from './src/screens/Menu'
import LoginScreen from './src/screens/auth/LoginScreen'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import StackCalendar from './src/screens/indexCalendar'
//const AppStack = createStackNavigator({ TabScreen });
const Menu = Menu2;
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
      Starter: AuthLoadingScreen, 
      App: Menu2, 
      Auth: AuthStack
  }, 
  {
      initialRouteName: 'Starter'
  }
));


