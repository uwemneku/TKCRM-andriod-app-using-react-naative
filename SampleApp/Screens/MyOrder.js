/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View, Text, useWindowDimensions, ScrollView } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import OrderComponents from '../mock components/OrderComponents'

const TopBar = createMaterialTopTabNavigator()

export default function MyOrder() {
    return (
        <View style={{
            height:'100%',
            width:'100%',
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
            backgroundColor:'whitesmoke',
            flexDirection:'column',
            alignItems:'center',
            flex:1
        }}
       >
           

           <ScrollView
            contentContainerStyle={{
                width:width,
                flexDirection:width<700?'column':'row',
                alignItems:'center',
                alignContent:'space-between',
                justifyContent:'space-around',
                flexWrap:width<700?'nowrap':'wrap',

            }}
           >
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />

           </ScrollView>
       </View> 
    )
}

function ArchiveScreen(){
    const  {width} = useWindowDimensions()

    return(
        <View
        style={{
            width:width,
            flexDirection:'column',
            alignItems:'center',
            backgroundColor:'whitesmoke',
            flex:1
        }}
       >
           

           <ScrollView
            contentContainerStyle={{
                width:width,
                flexDirection:width<700?'column':'row',
                alignItems:'center',
                alignContent:'space-between',
                justifyContent:'space-around',
                flexWrap:width<700?'nowrap':'wrap',

            }}
           >
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />
            <OrderComponents />

           </ScrollView>
       </View> 
    )
}