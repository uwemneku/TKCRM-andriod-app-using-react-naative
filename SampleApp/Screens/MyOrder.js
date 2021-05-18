/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import OrderComponents from '../mock components/OrderComponents'

const TopBar = createMaterialTopTabNavigator()

export default function MyOrder() {
    return (
        <View style={{
            height:'100%',
            width:'100%'
        }}>
            <ScreenHeader text='My Order' />
            <TopBar.Navigator
                tabBarOptions={{
                    activeTintColor:'black',
                    style:{
                        elevation:0,
                        height:48
                    },
                    labelStyle:{
                        fontSize:14,
                        fontFamily:'Roboto-Medium'
                    },
                    indicatorStyle:{
                        backgroundColor:'black',
                        height:5
                    }
                }}
            >
                <TopBar.Screen name="Current" component={CurrentScreen} />
                <TopBar.Screen name="Archive" component={ArchiveScreen} />
            </TopBar.Navigator>
        </View>
    )
}

function CurrentScreen(){
    const  {width} = useWindowDimensions()
    return(
       <View
        style={{
            width:width,
            backgroundColor:'white',
            flex:1
        }}
       >
           <OrderComponents />
       </View> 
    )
}

function ArchiveScreen(){
    return(
       <View></View> 
    )
}