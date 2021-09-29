import { DrawerScreenProps } from '@react-navigation/drawer'
// import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/appTheme'
import { Ionicons } from '@expo/vector-icons'


// interface Props extends StackScreenProps<any, any>{}

interface Props extends DrawerScreenProps<any, any>{}

export const Page1Screen = ( { navigation}: Props ) => {

  useEffect( () => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity 
        onPress={ () => navigation.toggleDrawer()}
        >
         <Ionicons name='menu' size={40} color={colors.primary}/>
        </TouchableOpacity>
      )
    })
  }, [])
  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button 
      title='To Screen 2'
      onPress={ () => navigation.navigate('Page2Screen')} />

      <Text>Navigate with params</Text>


      <View style={{ flexDirection: 'row'}}> 
      <TouchableOpacity 
        style={
          { ...styles.bigButton, backgroundColor: 'blue'}
          }
        onPress={ () => navigation.navigate('PersonScreen', 
          { id: 1, name: 'Peter'})}>
        <Text style= { styles.bigButtonText}>
          Peter
        </Text>
        <Ionicons name='football-outline' size={20} color='white'/>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          { ...styles.bigButton, backgroundColor: 'green'}}
        onPress={ () => navigation.navigate('PersonScreen', 
          { id: 2, name: 'Mary'})}>
        <Text style= { styles.bigButtonText}>
          Mary
        </Text>
        <Ionicons name='basketball-outline' size={20} color='white'/>
      </TouchableOpacity>
      </View>

      
    </View>
  )
}
