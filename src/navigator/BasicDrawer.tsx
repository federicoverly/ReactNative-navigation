import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavitator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  BasicDrawer = () => {

  const { width }  = useWindowDimensions()

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front'
    }}>
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={StackNavitator} />
      <Drawer.Screen name="SettingScreen" options={{title: 'settings'}}component={SettingsScreen} />
    </Drawer.Navigator>
  );
}