import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavitator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, useWindowDimensions, View, Image, TouchableOpacity } from 'react-native';
import { colors, styles } from '../theme/appTheme'
import { createStackNavigator } from '@react-navigation/stack';
import { startClock } from 'react-native-reanimated';
import { Tabs } from './Tabs';
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator()
// const SettingStackScreen = () => {
//   return(
//     <Stack.Navigator>
//       <Stack.Screen 
//         name={'SettingScreen'}
//         component={SettingsScreen}/>
//     </Stack.Navigator>
//   )
// }

export const  PersonalDrawer = () => {

  const { width }  = useWindowDimensions()

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front'
    }}
  drawerContent={ (props) => <DrawerContent {...props} />}
   >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const DrawerContent = ( { navigation } : DrawerContentComponentProps) => {
  return (
  <DrawerContentScrollView>

    { /* Avatar container */ }
    <View style={ styles.avatarContainer}>
      <Image style={ styles.avatar} source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
      }}/>
    </View>

    { /* Options Menu */ }
    <View style={ styles.menuContainer }>
      <TouchableOpacity style={ styles.menuButton }
      onPress= { () => navigation.navigate('Tabs')}>
        <Ionicons name='navigate-circle-outline' size={20} color={ colors.primary }/>
        <Text style={ styles.menuContent }>Navigation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.menuButton }
      onPress= { () => navigation.navigate('SettingScreen')}>
        <Ionicons name='settings-outline' size={20} color={ colors.primary }/>
        <Text style={ styles.menuContent }>Settings</Text>
      </TouchableOpacity>
    </View>


  </DrawerContentScrollView>
  )
}