/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'

export default function OrderComponents() {
    return (
        <View style={{
            width:'70%',
            borderRadius:16,
            borderWidth:0,
            height:192,
            elevation:1,
            justifyContent:'center'
        }}>
            <List />
        </View>
    )
}

function List(){
    return(
        <View
            style={{
                width:'100%'
            }}
        >
            <ListText />
            <ListText />
        </View>
    )
}

function ListText(){
    return(
        <View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontFamily:'Roboto-Medium', fontSize:18, lineHeight:24}}>Moscow</Text>
                <Text style={{fontFamily:'Roboto-Regular', fontSize:12, lineHeight:16, color:'#6E7882'}}>{' '} + 2places</Text>
            </View>
            <Text style={{fontFamily:'Roboto-Regular', fontSize:14, lineHeight:20, color:'#6E7882'}}>Pick up until 8 Dec 2018, 8:00am</Text>
        </View>
    )
}