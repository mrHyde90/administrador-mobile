import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

//Screens
import AuthScreen from './Screens/AuthScreen';
import InstrumentListScreen from './Screens/InstrumentListScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProfileScreen from './Screens/ProfileScreen';
import RequestScreen from './Screens/RequestScreen';

const InstrumentNavigator = createStackNavigator({
    category: CategoriesScreen,
    instrument: InstrumentListScreen
  }
);

const ProfileNavigator = createStackNavigator({
    profile: ProfileScreen,
    request: RequestScreen
  }, {
    initialRouteName: "profile"
  }
);

const HomeNavigator = createBottomTabNavigator({
    instrument: InstrumentNavigator,
    profile: ProfileNavigator
  })

const MainNavigator = createBottomTabNavigator({
    auth: AuthScreen,
    home: HomeNavigator
  },{
      navigationOptions: {
        tabBarVisible: false
      }
    })
export default class App extends React.Component {



  render() {
    return (
        <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
