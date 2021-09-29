import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors, styles } from '../theme/appTheme'

export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect')
  }, [])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Icons </Text> 
      <Ionicons name='rocket' size={50} color={colors.primary} />
      <Ionicons name='airplane-outline' size={50} color={colors.primary} />
      <Ionicons name='logo-instagram' size={50} color={colors.primary} />
    </View>
  )
}
