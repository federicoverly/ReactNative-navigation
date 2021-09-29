import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavitator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabs } from './TopTabs';
import { Ionicons } from '@expo/vector-icons'


export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIos />
    : <TabsAndroid />
}

// Android tabs

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled= { true }
      barStyle={{
        backgroundColor: colors.primary
      }}
   
    screenOptions={ ({route}) => ({
   
    tabBarIcon: ({ color, focused }) => {
  
      let iconName: string = '';
  
      switch(route.name) {
        case 'Tab1Screen':
          iconName = 'flame'
        break;
  
        case 'TopTab':
          iconName = 'water'
        break;
  
        case 'StackNavigator':
          iconName = 'earth'
        break;
      }
  
      return <Ionicons name={iconName} size={40} color={ colors.primary }/>
    } 
    }
    )}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTab" options={{ title: 'TopTab'}} component={ TopTabs } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavitator } />
    </BottomTabAndroid.Navigator>
  );
}

// Ios tabs
const BottomTabIOS = createBottomTabNavigator();

function TabsIos() {
  return (
    <BottomTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
  screenOptions={ ({route}) => ({
  tabBarActiveTintColor: colors.primary,
  tabBarStyle: {
    // borderTopColor: colors.primary,
    // borderTopWidth: 0,
    shadowColor: 'transparent',
    elevation: 0
  },
  tabBarLabelStyle: {
    fontSize: 15
  },
  tabBarIcon: ({ color, focused, size }) => {

    let iconName: string = '';

    switch(route.name) {
      case 'Tab1Screen':
        iconName = 'flame'
      break;

      case 'TopTab':
        iconName = 'water'
      break;

      case 'StackNavigator':
        iconName = 'earth'
      break;
    }


    return <Ionicons name={iconName} size={25} color={ colors.primary }/>
  } 
  }
  )}
    >
      { /* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: () => <Text style={{ color: colors.primary}}>T1</Text>}} component={ Tab1Screen } /> */ }

      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTab" options={{ title: 'TopTab'}} component={ TopTabs } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavitator } />
    </BottomTabIOS.Navigator>
  );
}