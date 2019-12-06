import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Application extends React.Component {
  render() {
    return (
        <View style={styles.conteiner}>
          <Text style={styles.textHeader}>Hello World</Text>
          <Text style={styles.textContent}>This is my first React Native application</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  textHeader: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  },
  textContent: {
    
  }
});