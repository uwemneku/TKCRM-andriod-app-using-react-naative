/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import Places from './Screens/Places'
import {NavigationContainer} from '@react-navigation/native'
import Home from './Screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()


export default function App() {
  const {width, height} = useWindowDimensions()
  return (
    
    // <SafeAreaView style={{
    //   width:width,
    //   height:height,
    //   backgroundColor:'white',
    // }}>
      <NavigationContainer>
      <Home/>
    </NavigationContainer>
    // </SafeAreaView>
  )
}
