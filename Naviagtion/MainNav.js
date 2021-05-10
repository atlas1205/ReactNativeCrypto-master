import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenZero from '../Screens/ScreenZero';
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';


const Stack = createStackNavigator();

function HomeScreenStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenZero" component={ScreenZero} />
      <Stack.Screen name="ScreenOne" component={ScreenOne} 
      options={{
        headerTitle: "Crypto Explorer",
      }} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo}/>
    </Stack.Navigator>
  );
}


export {HomeScreenStack};

