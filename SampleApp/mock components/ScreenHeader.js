/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function ScreenHeader({text, iconName, showIcon = false}) {
    return (
        <View style={{
            height:56,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:20,
                paddingLeft:16,
                fontFamily:'Roboto-Medium',
            }} >
                {text}
            </Text>

            {showIcon === true ? <MaterialIcons size={24} name={iconName} style={{paddingRight:16}} /> : null}

        </View>
    )
}
