/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import Test from './components/Test'
import {Provider as PaperProvider} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      
    <PaperProvider>
      <Test />
    </PaperProvider>
    </NavigationContainer>
  )
}
