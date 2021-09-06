import React from 'react'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/core'
import { useEffect } from 'react'

export const Page2Screen = () => {

  const navigator = useNavigation()

  useEffect( () => {
    navigator.setOptions({
      title: 'Hello World',
      headerbackTitle: '',
    })
  }, [])

  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button 
      title='To Screen 3'
      onPress={ () => navigator.navigate('Page3Screen')}/>
    </View>
  )
}
