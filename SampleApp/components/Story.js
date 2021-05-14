/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

export default function Story() {
    return (
        <View>
            <View style={{
                width:120,
                height:'100%',
                borderRadius:20,
                marginLeft:5,
                marginRight:5,
                backgroundColor:'white',
            }}>
                <StoryAvatar />

            </View>
        </View>
    )
}

function StoryAvatar(){
    return (
        <View style={{
            backgroundColor:'transparent',
            justifyContent:'center',
            alignItems:'center',
            width:50,
            height:50,
            margin:5,
            borderRadius:25,
            borderColor:'orange',
            borderWidth:3
        }}>
            <View style={{
                backgroundColor:'red',
                width:40,
                height:40,
                borderRadius:20,
            }}>
            </View>

        </View>
    )
}


