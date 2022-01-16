import { StatusBar } from 'expo-status-bar';
import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import { contactList } from "../data/contacts"; 

export const ContactsScreen = (props) => {
  const onButtonPress = () => {
    props.navigation.navigate("ViewDetailsScreen",{
      contactObject: contact,
    })
  };
  return (
    <View style = {styles.container}>
     {contactList.map((contact, index) => (
       <View key={index}><Text>{contact.name.first}</Text>
       <Button title= "more info" onPress={() => onButtonPress(contact)} />
        </View>
     ))}
    </View>

  ); 
}; 

 const styles= StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "rgb(82,46,145)",
     alignItems: "center",
     justifyContent: "center",
     padding: 20,
  }, 
}); 
