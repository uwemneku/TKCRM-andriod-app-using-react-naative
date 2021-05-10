/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, useWindowDimensions, StatusBar } from 'react-native'
import { IconButton } from 'react-native-paper'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect } from '@react-navigation/core'

export default function Test() {
    const {height} = useWindowDimensions()
    const [headerHeight, setheaderHeight] = useState(50)

    return (
        <View style={{height:height}}>
            <StatusBar backgroundColor='white' />
            <Header height={headerHeight} />
            <Screen />
        </View>
    )
}



function Header({height}){
    const {width} = useWindowDimensions()
    return(
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                width:width,
                height:height,
            }}
        >
            <Text
                style={{
                    color:'blue',
                    fontWeight:'bold',
                    fontSize:30,
                    marginLeft:15
                }}
            >
                Facebook
            </Text>

            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <IconButton style={{backgroundColor:'whitesmoke'}} icon="magnify" color="darkgrey" />
                <IconButton style={{backgroundColor:'whitesmoke'}} icon="chat" color='darkgrey' />
            </View>
        </View>
    )
}

const TopBar = createMaterialTopTabNavigator()

function Screen(){
    return(
        <TopBar.Navigator tabBarOptions={{
            showLabel:false,
            showIcon:true,
            iconStyle:{
                justifyContent:'center',
                alignContent:'center',
                width:'100%',
                height:'100%'
            },

        }} >
            <TopBar.Screen  name="Home" component={Tt} options={{
                tabBarIcon:({focused})=>(<MaterialIcons name="home"  size={30}  color={focused?'blue':'grey'} />),
            }} />
            <TopBar.Screen name="Videos" component={Dummy} options={{
                tabBarIcon:({focused})=>(<MaterialIcons name='tv' size={30} color={focused?'blue':'grey'}  />)
            }} />
            <TopBar.Screen name="MarketPlace" component={Dummy} options={{
                tabBarIcon:({focused})=>(<MaterialIcons name='store' size={30} color={focused?'blue':'grey'} />)
            }} />
            <TopBar.Screen name="Pages" component={Dummy} options={{
                tabBarIcon:({focused})=>(<MaterialIcons name='flag' size={30} color={focused?'blue':'grey'} />)
            }} />
            <TopBar.Screen name="Notifications" component={Dummy} options={{
                tabBarIcon:({focused})=>(<MaterialIcons name='notifications' size={30} color={focused?'blue':'grey'} />)
            }} />
            <TopBar.Screen name="Menu" component={Dummy} options={{
                tabBarIcon:({focused})=>(<MaterialIcons name='menu' size={30} color={focused?'blue':'grey'} />)
            }} />
        </TopBar.Navigator>
    )
}

const Dummy = () => (
    <View>
        <MaterialIcons name="bell" color='red' size={30}  />

    </View>
)

function Tt(){
    const [num, setNum] = useState(0)
     useFocusEffect(
         React.useCallback(() => {
             console.log('y')
             setNum(num+1)
             
         }, [])
     )
    return(
        <>
        <Text>{num}</Text>
        </>
    )
}