import React, {useState} from 'react';
import {Text,StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] =  useState("Paul Lexxus Antonio");
  const bodyText = 'Im a leader of our group and im the who guide them and instruct them on what designs, and what we used in our system';

  const onPressTitle = () => {
    setTitleText("I want to become a programmer someday that I will help my family a normal life and leave them in poverty");
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text Style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  baseText: {
    fontFamily: 'cochin',
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default TextInANest
