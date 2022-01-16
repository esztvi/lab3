import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { ContactsScreen } from './screens/ContactsScreen.js';
import { ViewDetailsScreen } from './screens/ViewDetailsScreen.js'; 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Stack = createStackNavigator(); 

export default function App() {
  return (
<NavigationContainer> 
    <Stack.Navigator>
    
    <Stack.Screen name="ContactsScreen" component={ContactsScreen} options={{title: "All Contacts"}}/> 
    <Stack.Screen name="ViewDetailsScreen" component={ViewDetailsScreen} options={{title: "Contact Details"}} /> 
  </Stack.Navigator> 
</NavigationContainer> 
  );
}
//<Stack.Navigator ​initialRouteName​=​"HomeScreen"​> (used to check screen status between HomeScreen and SecondScreen)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
