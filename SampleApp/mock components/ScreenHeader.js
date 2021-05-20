/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'


export default function ScreenHeader({text, iconName, showIcon = false, navigateTo}) {
    const navigation = useNavigation()
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

            {showIcon === true ?
            <TouchableOpacity
                onPress = {()=> navigation.navigate(navigateTo)}
            >
                <MaterialIcons size={24} name={iconName} style={{paddingRight:16}} />
            </TouchableOpacity>
             : null}

        </View>
    )
}
