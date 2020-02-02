import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
//import {Navigation} from 'react-native-navigation';


const appIcon = require('../img/app-icon-120x120.png');

export default class MenuScreen extends Component {

  static navigationOptions = {
    title: 'Menu',
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={appIcon} style={styles.image}/>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarsPress.bind(this)}>
          <Text style={styles.menuText}>Calendars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onHorizontalCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Horizontal Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAgendaPress.bind(this)}>
          <Text style={styles.menuText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onExpandablePress.bind(this)}>
          <Text style={styles.menuText}>Expandable Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onWeekPress.bind(this)}>
          <Text style={styles.menuText}>Week Calendar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  pushScreen(screen, props) {
    console.log(screen,this.props.componentId);
    this.props.navigation.navigate(this.props.componentId,{
    // Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        passProps: props,
        options: {
          topBar: {
            title: {
              text: screen
            },
            backButton: {
              showTitle: false, // iOS only
              color: Platform.OS === 'ios' ? '#2d4150' : undefined
            }
          }
        }  
      }
    });
  }

  onCalendarsPress() {
   // this.pushScreen('Calendars');
   console.log(this.props.navigation);
    this.props.navigation.navigate('Calendars');
  }

  onCalendarListPress() {
   // this.pushScreen('CalendarsList');
    this.props.navigation.navigate('CalendarsList');
  }

  onHorizontalCalendarListPress() {
   // this.pushScreen('HorizontalCalendarList');
    this.props.navigation.navigate('HorizontalCalendarList');
  }

  onAgendaPress() {
   // this.pushScreen('Agenda');
    this.props.navigation.navigate('Agenda');
  }

  onExpandablePress() {
   // this.pushScreen('ExpandableCalendar');
    this.props.navigation.navigate('ExpandableCalendar');
  }

  onWeekPress() {
   // this.pushScreen('ExpandableCalendar', {weekView: true});
    this.props.navigation.navigate('ExpandableCalendar');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center' 
  },
  image: {
    margin: 30,
    width: 90,
    height: 90
  },
  menu: {
    width: 300,
    padding: 10,
    margin: 10,
    // backgroundColor: '#f2F4f5',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7a92a5'
  },
  menuText: {
    fontSize: 18,
    color: '#2d4150'
  }
});
