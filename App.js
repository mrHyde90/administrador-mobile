import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import AuthScreen from './Screens/AuthScreen';
import InstrumentListScreen from './Screens/InstrumentListScreen';
import CategoriesScreen from './Screens/CategoriesScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthScreen/>
        <InstrumentListScreen/>
        <CategoriesScreen/>
      </View>
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
