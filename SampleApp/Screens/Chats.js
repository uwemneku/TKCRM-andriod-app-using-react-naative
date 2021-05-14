/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import Contacts from './SubScreens/Contacts'

export default function Chats() {
    return (
        <View>
            <ScreenHeader text='Chat' showIcon={true} iconName="people" />
            <Contacts />
        </View>
    )
}
