/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import TrackerButton from '../../mock components/TrackerButton'


export default function Settings() {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:()=>(
                <FontAwesome5 style={{paddingRight:20}} size={20} name="door-open" />
            )
        })
    }, [navigation])
    return (
        <View>
            <TrackerButton text="Notifications" />
        </View>
    )
}
