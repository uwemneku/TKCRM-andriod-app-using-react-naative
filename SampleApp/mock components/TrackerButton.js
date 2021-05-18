/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import RadioButton from './RadioButton'

export default function TrackerButton() {
    const [clicked, setclicked] = useState(false)
    return (
        <Pressable
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                backgroundColor:clicked?'#FFFAE4':'#EAECEE',
                alignItems:'center',
                paddingRight:16,
                paddingLeft:16,
                width:'100%',
                height:48
            }}

            onPress = {() => setclicked(!clicked)}
        >
            <Text
                style={{
                    fontFamily:'Roboto-Regular',
                    fontSize:14,
                    lineHeight:20
                }}
            >
                Tracker is stopped
            </Text>
            <RadioButton clicked={clicked}  />
        </Pressable>
    )
}


