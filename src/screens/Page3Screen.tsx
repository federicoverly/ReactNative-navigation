import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native';

interface Props extends StackScreenProps<any, any>{}

export const Page3Screen = ({ navigation } : Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={styles.title}>Page3Screen</Text>
      <Button 
       title='Back'
       onPress= { () => navigation.pop() }/>

      <Button 
       title='To Screen 1'
       onPress= { () => navigation.popToTop() }/>
    </View>
  )
}
