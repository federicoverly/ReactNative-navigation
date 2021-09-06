import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets()

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top}}>
      <Text style={ styles.title}>
        Setting Screen
      </Text>
    </View>
  )
}
