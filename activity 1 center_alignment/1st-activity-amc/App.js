import React from 'react';
import {View,Text,Image,ScrollView,TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <Text
    style={{
      height:40,
      textAlign: 'center'
    }}
    >my name is paul antonio</Text>

    <View>
      <Text
      style={{
      height:40,
      textAlign: 'center'
    }}>AMC 303</Text>
      <Image
      source={{
        uri: 'https://th.bing.com/th/id/OIP.QeOFnH1uyf2-uhNr5c9YHwHaHD?w=184&h=200&c=7&r=0&o=5&pid=1.7'}}
        style = {{width: 200, height:200}}
        /> 
    </View>

    <TextInput
    style={{
      height:40,
      textAlign: 'center'
    }}

    defaultValue = "come as you are, as you we're, yes i want you to be"
    />

    </ScrollView>
  );
};

export default App
