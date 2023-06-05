import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default () => {
  return (
    <View style = {styles.container}>
        <Icon name="bomb"/>
    </View>
  )
};

const styles = StyleSheet.create({  
    container: {
        alignItems:'center',
        justifyContent:'center'
    }
})
