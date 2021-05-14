/* eslint-disable prettier/prettier */
import { useFocusEffect, } from '@react-navigation/core'
import React, { useContext } from 'react'
import { View, Text, useWindowDimensions, Pressable, _ScrollView, ScrollView } from 'react-native'
import { Avatar, Divider, } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {ShowHeaderContext} from './Context'
import FeedPost from './FeedPost'
import Story from './Story'

export default function Home() {

    const [showHeader, setshowHeader] = useContext(ShowHeaderContext)

    useFocusEffect(
     React.useCallback(() => {
        setshowHeader(true)
        return ()=> setshowHeader(false)
     }, [])   
    )

    return (
        <View>
            <Header />
            <Divider style={{height:5}} />
            <Stories />
            <Divider style={{height:5}} />
            <FeedPost />
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

function Stories(){
    return (
        <ScrollView horizontal={true} 
            style={{
                backgroundColor:'red',
                width:'100%',
                height:250,
                paddingTop:15,
                paddingBottom:15,
            }}

            contentContainerStyle={{
                alignItems:'center'
            }}
        >

            <Story />
            <Story />
            <Story />
            <Story />
            <Story />

        </ScrollView>
    )
}

