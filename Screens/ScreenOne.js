import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';


const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const ScreenOne = props => {
  const [cryptoName, setCryptoName] = useState('')

  const [coins, setCoins] = useState([])
  const [otherCoins, setOtherCoins] = useState('')

  useEffect(() => {

    const getCrypto = async () => {

      const responseMovies = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

      const crypto = await responseMovies.json();

      setCoins(crypto);

      console.log(crypto);
    };

    getCrypto();
  }, [otherCoins]);

  const renderItem = ({item}) => {
    return (
      <View>
	  <Text>------------------------------</Text>
		<Text  style={styles.CryptoN}>{item.name}</Text>
		<Text style={styles.update}>Last update:</Text>
		<Text>{item.last_updated}</Text>
		<button type="button" style={{backgroundColor:'DodgerBlue',color:'white',width:200}}>Detail</button>
	  </View>
    )
  };

  return (
    <View style={styles.container}>

        <Text>Enter The Name of the Crypto You Are Searching For: </Text>
        <TextInput placeholder="Search for a Crypto" placeholderTextColor="grey" 
        value={cryptoName}
        onChangeText={(text) => setCryptoName(text)} />

        <Button 
          style={styles.fixToText} 
          title="Search" 
          onPress = {() => props.navigation.navigate("ScreenTwo")}></Button>
        <SafeAreaView>
        <FlatList
        data={coins}
        renderItem={renderItem}
        keyExtractor={coin => coin.id}
        />
      
        </SafeAreaView>
      
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CryptoN: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black"
  },
    update: {
	fontStyle: "italic"
  },
});

export default ScreenOne;