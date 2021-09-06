import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavitator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Text, useWindowDimensions, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme'
import { createStackNavigator } from '@react-navigation/stack';
import { startClock } from 'react-native-reanimated';

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
      <Drawer.Screen name="StackNavigator" component={StackNavitator} />
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
      onPress= { () => navigation.navigate('StackNavigator')}>
        <Text style={ styles.menuContent }>Navigation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ styles.menuButton }
      onPress= { () => navigation.navigate('SettingScreen')}>
        <Text style={ styles.menuContent }>Settings</Text>
      </TouchableOpacity>
    </View>


  </DrawerContentScrollView>
  )
}