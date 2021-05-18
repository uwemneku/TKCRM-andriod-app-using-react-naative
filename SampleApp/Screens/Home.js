/* eslint-disable prettier/prettier */
import React, {  } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Places from './Places'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useWindowDimensions } from 'react-native'
import Tracker from './Tracker'
import MyOrder from './MyOrder'
import Profile from './Profile'
import Chats from './Chats'



const BottomTab = createBottomTabNavigator()
    
export default function Home() {
   


    
    const {height} = useWindowDimensions()



    return (
        
        <BottomTab.Navigator
             
             sceneContainerStyle={{
                 backgroundColor:'white',
             }} 
             tabBarOptions={{
                 inactiveTintColor:'#ADB4BB',
                 activeTintColor:'black',
                 style:{
                     position:'absolute',
                     height:56,
                     bottom:0,
                     paddingBottom:10,
                     
                 },
                 labelStyle:{
                     justifyContent:'center',
                     alignItems:'center',
                     fontFamily:"Roboto-Regular",
                     fontSize:12,
                     textAlign:'center',
                     textAlignVertical:'center'
                 },
                 tabStyle:{
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                 },
                 iconStyle:{
                     justifyContent:'center',
                     alignItems:'center',
                 },
                 labelPosition:'below-icon'
             }}
             initialRouteName="Orders">

            <BottomTab.Screen name="Orders"  component={MyOrder}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <MaterialIcons style={{color:focused?'black':'#ADB4BB'}} size={24} name={'list'} />
                    )
                }}
            />
            <BottomTab.Screen name="Tracker"  component={Tracker} 
                options={{
                    tabBarIcon:({focused}) => (
                        <MaterialIcons style={{color:focused?'black':'#ADB4BB'}} name={'navigation'} size={24} />
                    )
                }}
            />
            <BottomTab.Screen name="Chat"  component={Chats} 
                options={{
                    tabBarIcon:({focused}) => (
                        <MaterialIcons style={{color:focused?'black':'#ADB4BB'}} name={'chat'} size={24} />
                    )
                }}
            />
            <BottomTab.Screen name="Places"  component={Places} 
                options={{
                    tabBarIcon:({focused}) => (
                        <MaterialIcons style={{color:focused?'black':'#ADB4BB'}} name={'room'} size={24} />
                    )
                }}
            />
            <BottomTab.Screen name="Profile"  component={Profile} 
                options={{
                    tabBarIcon:({focused}) => (
                        <MaterialIcons style={{color:focused?'black':'#ADB4BB'}} name={'account-box'} size={24} />
                    ),

                }}
            />
        </BottomTab.Navigator>
    )
}
