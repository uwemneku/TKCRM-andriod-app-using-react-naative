/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, useWindowDimensions, StatusBar } from 'react-native'
import { Badge, IconButton } from 'react-native-paper'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import { useFocusEffect } from '@react-navigation/core'
import Home from './Home'

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
                backgroundColor:'white',
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
                facebook
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

    const TopBarHeader = ({icon, focused}) => (
            <View style={{ width:60, justifyContent:'center', alignItems:'center' }}>
                <MaterialIcons name={icon} size={30} color={focused?'blue':'grey'} />
                <Badge  style={{position:'absolute', top:0, right:5, backgroundColor:focused?'blue':'skyblue'}} size={15}  > 3 </Badge>
            </View>
    )
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
            style:{
                elevation:0,
                borderBottomWidth:1,
                borderColor:'grey'
            }

        }} >
            <TopBar.Screen  name="Home" component={Home} options={{
                tabBarIcon:({focused})=>(<TopBarHeader icon="home" focused={focused} />),
            }} />
            <TopBar.Screen name="Videos" component={Dummy} options={{
                tabBarIcon:({focused})=>(<TopBarHeader icon="tv" focused={focused} />)
            }} />
            <TopBar.Screen name="MarketPlace" component={Dummy} options={{
                tabBarIcon:({focused})=>(<TopBarHeader icon="store" focused={focused} />)
            }} />
            <TopBar.Screen name="Pages" component={Dummy} options={{
                tabBarIcon:({focused})=>(<TopBarHeader icon="flag" focused={focused} />)
            }} />
            <TopBar.Screen name="Notifications" component={Dummy} options={{
                tabBarIcon:({focused})=>(<TopBarHeader icon="notifications" focused={focused} />)
            }} />
            <TopBar.Screen name="Menu" component={Dummy} options={{
                tabBarIcon:({focused})=>(<TopBarHeader icon="menu" focused={focused} />)
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
        <View>
        <Text></Text>
        </View>
    )
}