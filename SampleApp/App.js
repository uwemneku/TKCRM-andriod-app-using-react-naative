/* eslint-disable prettier/prettier */
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Home from './Screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from './Screens/SubScreens/Contacts'
import ContactProvider from './Context/ContactProvider'
import Conversation from './Screens/SubScreens/Conversation'

const Main = createStackNavigator()

export default function App() {
  return (
    
   
      <ContactProvider>
        <NavigationContainer>
          <Main.Navigator
            initialRouteName="Home"
            detachInactiveScreens={false}
            mode = 'modal'
            
          >   
              {/* Home Screen */}
              <Main.Screen  name="Home" component={Home}  options={{headerShown:false}} />
              {/* Contact List Screen */}
              <Main.Screen name="Contacts" component={Contacts}/>
              <Main.Screen name="Conversation" component={Conversation}/>
          </Main.Navigator>
      </NavigationContainer>
    </ContactProvider>
  )
}
