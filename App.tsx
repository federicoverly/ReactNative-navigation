import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { StackNavitator } from './src/navigator/StackNavigator';
import { BasicDrawer } from './src/navigator/BasicDrawer';
import { PersonalDrawer } from './src/navigator/PersonalDrawer';
import { Tabs } from './src/navigator/Tabs';

export default function App() {
  return (
    <NavigationContainer >
      { /* <StackNavitator /> */ } 
      { /* <BasicDrawer /> */ } 
      <PersonalDrawer />
      { /* <Tabs />*/ } 
    </NavigationContainer>
  );
}
