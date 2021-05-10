import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreenStack} from './Naviagtion/MainNav';


const App = props => {
  return (
    <NavigationContainer>

      <HomeScreenStack />

    </NavigationContainer>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;