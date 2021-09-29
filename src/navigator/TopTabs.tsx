import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumScreens } from '../screens/AlbumScreens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {

  // const { top } = useSafeAreaInsets()

  return (
    <Tab.Navigator
    style={{ 
      // paddingTop: top,
    }}
    screenOptions={ ({route}) => ({ 
    tabBarStyle: { backgroundColor: 'white' , elevation: 0, shadowColor: 'transparent'},
    tabBarPressColor: colors.primary,
    tabBarShowIcon: true,
    tabBarIndicatorStyle: { backgroundColor: colors.primary},
    tabBarIcon: ({ color, focused }) => {

      let iconName: string = '';
  
      switch(route.name) {
        case 'ChatScreen':
          iconName = 'chatbubbles-outline'
        break;
  
        case 'ContactsScreen':
          iconName = 'people-outline'
        break;
  
        case 'AlbumScreen':
          iconName = 'images-outline'
        break;
      }
  
      return <Ionicons name={iconName} size={20} color={ colors.primary }/>
    }}
    )}
    >
      <Tab.Screen name="ChatScreen" component={ ChatScreen } />
      <Tab.Screen name="ContactsScreen" component={ ContactsScreen } />
      <Tab.Screen name="AlbumScreen" component={ AlbumScreens } />
    </Tab.Navigator>
  );
}