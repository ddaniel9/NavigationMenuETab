//vedere per costruire elementi del menù: CustomDrawerContentComponent 

//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity ,AsyncStorage} from 'react-native';
//per fare il logout

// import all basic components
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';
  
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';


import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import Profile from './Profile';
import  TabScreen  from './TabScreen'
import SignScreen from './auth/SigninScreen'




 
class NavigationDrawerStructure extends Component {

    constructor(props){
        super(props);
      }

  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };





  render() {
    //console.log(this.props.state);//undefined
   // console.log(this.state);//null
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../assets/img/drawer.png')}
            style={{ width: 35, height: 35, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Notifiche',
       headerLeft:()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
  
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: SettingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Da impostare',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: TabScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Simple Screen 3',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
      // contentOptions: {
      //   onItemPress :  async ({navigation}) => {
      //     await AsyncStorage.clear();
      //     navigation.navigate('Auth');
      //   },
      // },
    }),
  },
});
 
const Menu2 = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Notifiche',
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Da impostare',
    },
    // contentOptions: {
    //   onItemPress :  async ({navigation}) => {
    //     await AsyncStorage.clear();
    //     navigation.navigate('Auth');
    //   },
    // },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },
});


export default Menu2;