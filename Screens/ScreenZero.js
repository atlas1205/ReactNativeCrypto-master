import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';


const ScreenZero = props => {


  return (
    <View>
      <Text>Crypto Coneseuor</Text>
      <Button 
            style={styles.fixToText} 
            title="Lets Start Exploring" 
            onPress = {() => props.navigation.navigate("ScreenOne")}></Button>
    </View>
  );
};


const styles = StyleSheet.create({
});

export default ScreenZero;