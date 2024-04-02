import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './Screens/ProfileScreen';
import HelpScreen from './Screens/helpScreen'
import MainScreen from './Screens/MainScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Root () {
  return(
    <Drawer.Navigator screenOptions={{
      // headerShown:false
      headerLeftLabelVisible:false,
      headerStyle:{backgroundColor:'#fff',}
    }}>
      <Drawer.Screen  name='.' component={ProfileScreen}/>
      <Drawer.Screen   name='help?' component={HelpScreen}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // tarBarShowLabel: false,
         headerShown:false,
      }}>
        <Stack.Screen name="root" component={Root}/>
        <Stack.Screen name="main" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
