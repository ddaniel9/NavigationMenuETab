import MenuScreen from '../calendar/src/screens/menu';
import CalendarsScreen from '../calendar/src/screens/calendars';
import AgendaScreen from '../calendar/src/screens/agenda';
import CalendarsList from '../calendar/src/screens/calendarsList';
import HorizontalCalendarList from '../calendar/src/screens/horizontalCalendarList';
import ExpandableCalendar from '../calendar/src/screens/expandableCalendar';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';



  const MenuCalendario = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Menu: {
      screen: MenuScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Menu',
      }),
    },
  });

  const Calendars = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Calendars: {
      screen: CalendarsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Calendars',
      }),
    },
  });

  const Agenda = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Agenda: {
      screen: AgendaScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Agenda',
      }),
    },
  });

  const CalendarsList1 = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    CalendarsList: {
      screen: CalendarsList,
      navigationOptions: ({ navigation }) => ({
        title: 'CalendarsList',
      }),
    },
  });

  const HorizontalCalendarList1 = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    HorizontalCalendarList: {
      screen: HorizontalCalendarList,
      navigationOptions: ({ navigation }) => ({
        title: 'HorizontalCalendarList',
      }),
    },
  });

  const ExpandableCalendar1 = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    ExpandableCalendar: {
      screen: ExpandableCalendar,
      navigationOptions: ({ navigation }) => ({
        title: 'ExpandableCalendar',
      }),
    },
  });





  const StackCalendar = createDrawerNavigator({
    //Drawer Optons and indexing
    MenuCalendario: {
      //Title
      screen: MenuCalendario,
      navigationOptions: {
        drawerLabel: 'Menu',
      },
    },
    Calendars: {
      //Title
      screen: Calendars,
      navigationOptions: {
        drawerLabel: 'Calendars',
      },
    },
    Agenda: {
      //Title
      screen: Agenda,
      navigationOptions: {
        drawerLabel: 'Agenda',
      },
      // contentOptions: {
      //   onItemPress :  async ({navigation}) => {
      //     await AsyncStorage.clear();
      //     navigation.navigate('Auth');
      //   },
      // },
    },
    CalendarsList: {
        //Title
        screen: CalendarsList1,
        navigationOptions: {
          drawerLabel: 'CalendarsList',
        },
      },
      HorizontalCalendarList: {
        //Title
        screen: HorizontalCalendarList1,
        navigationOptions: {
          drawerLabel: 'HorizontalCalendarList',
        },
      },
      ExpandableCalendar: {
        //Title
        screen: ExpandableCalendar1,
        navigationOptions: {
          drawerLabel: 'ExpandableCalendar',
        },
      },
  });
  
  
  export default StackCalendar;