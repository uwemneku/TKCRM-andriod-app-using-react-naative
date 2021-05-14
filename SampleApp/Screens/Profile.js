/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'

export default function Profile() {
    return (
        <View>
            <ScreenHeader text='My Profile' showIcon={true} iconName="settings" />
        </View>
    )
}
