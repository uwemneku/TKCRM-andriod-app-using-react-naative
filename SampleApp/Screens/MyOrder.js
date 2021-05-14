/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

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
    return(
       <View></View> 
    )
}

function ArchiveScreen(){
    return(
       <View></View> 
    )
}