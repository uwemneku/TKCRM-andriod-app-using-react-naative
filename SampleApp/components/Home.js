/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, useWindowDimensions, Pressable } from 'react-native'
import { Avatar, Divider, } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Home() {
    return (
        <View>
            <Header />
            <Divider style={{height:10}} />
        </View>
    )
}

function Header(){
    const {width} = useWindowDimensions()
    return(
        <View style={{
            width:width,
            padding:10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            backgroundColor:'white'
            
            }}>
            <View style={{flex:1, }}>
                <Avatar.Icon icon='head' size={50}  />
            </View>
            <View style={{
                flex:5, 
                height:40,
                borderWidth:1,
                borderRadius:20,
                borderColor:'grey',
                justifyContent:'center'
                }}>
                <Text style={{paddingLeft:10}}>
                    What's on your mind?
                </Text>
            </View>
            <View style={{
                flex:1, 
                height:50,
                justifyContent:'center', 
                alignItems:'center',
                }}>
                <MaterialIcons  size={30} name='album'/>
                <Text style={{color:'grey'}}>Photos</Text>
            </View>

        </View>
    )
}
