/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import Contacts from './SubScreens/Contacts'

export default function Chats() {
    return (
        <View style={{
            height:'100%'
        }}
        >   
            {/* Header */}
            <View
                style={{flex:0}}
            >
                <ScreenHeader text='Chat' showIcon={true} iconName="people" />
            </View>
            {/* Contact List */}
            <View
                style={{
                    flex:1
                }}
            >
                <Contacts />
            </View>
            
        </View>
    )
}
