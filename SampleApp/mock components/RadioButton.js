/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function RadioButton({clicked}) {
    return (
        <View   
            style={{
                width:34,
                height:14,
                borderRadius:20,
                zIndex:1,
                backgroundColor:clicked?'#FDEEB4':'#DADDDF',
                justifyContent:'center',
                alignItems:clicked?'flex-end':'flex-start',
                position:'relative'
            }}
        >
            <View
                style={{
                    width:20,
                    height:20,
                    opacity:1,
                    borderRadius:10,
                    elevation:clicked?0:2,
                    backgroundColor:clicked?'#FFE376':'white',
                    position:'absolute'
                }}
            >

            </View>
        </View>
    )
}
