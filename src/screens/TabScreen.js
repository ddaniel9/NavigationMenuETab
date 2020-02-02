import React from 'react'
import { View, Text, AsyncStorage, StyleSheet } from 'react-native'
import { Ionicons, SimpleLineIcons } from 'react-native-vector-icons'
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs'
 
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import Clendar from './CalendarScreen';
import StackCalendar from './indexCalendar';

//const SignoutScreen = () => {}

const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});


export const TabScreen = createBottomTabNavigator({
    Home: {
        screen: HomeScreen, 
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <Icon name="rocket" color={tintColor} size={25} />
            )
        }
    }, 
    Settings: {
        screen: SettingScreen, 
        navigationOptions: {
            tabBarLabel: 'Settings', 
            tabBarIcon: ({ tintColor }) => (
                <Icon name="person-add" color={tintColor} size={25} />
            )
        }
    }, 
    Signout: {
        screen: StackCalendar, 
        navigationOptions: {
            tabBarLabel: 'Calendar', 
            // tabBarIcon: ({ tintColor }) => (
            //     <SimpleLineIcons name="logout" color={tintColor} size={20} />
            // ), 
            // tabBarOnPress: async ({navigation}) => {
            //     await AsyncStorage.clear();
            //     navigation.navigate('Auth');
            // }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'red', 
        inactiveTintColor: 'grey', 
        showIcon: true
    }
});


const TabHelper = createStackNavigator({
    TabScreen: {
      screen: TabScreen,
      navigationOptions: {
        header: null,
      },
    },
  });
  export default createAppContainer(TabHelper);