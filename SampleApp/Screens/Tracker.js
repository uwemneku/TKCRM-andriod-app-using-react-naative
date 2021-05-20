/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, useWindowDimensions, StyleSheet, ScrollView } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import TrackerButton from '../mock components/TrackerButton'



export default function Tracker() {
    const {width} = useWindowDimensions()
    return (
        <View
            style={{width:width, flex:1}}
        >
            <ScreenHeader text='Tracker' />
            <TrackerButton text="Tracker is stopped" />
            <TableHeader />
            <View style={{width:'100%', height:1.5, backgroundColor:'whitesmoke'}} />   
            <View style={{flex:1, paddingBottom:60}}>
              <ScrollView>
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
                <TableDetails />
            </ScrollView>  
            </View>
                   
        </View>
    )
}

function TableHeader() {
    return(
        <View style={styles.container}>
            <Text style={{textAlign:'left', ...styles.text}}>Date</Text>
            <Text style={{textAlign:'center', ...styles.text}}>Driving Time</Text>
            <Text style={{textAlign:'right', ...styles.text}}>Distance, Km</Text>
        </View>
    )
}
function TableDetails() {
    return(
        <View style={styles.container}>
            <Text style={{textAlign:'left', color:'#6E7882', ...styles.textDetails}}>11 am</Text>
            <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:5, height:5, borderRadius:2.5, backgroundColor:'red'}} />
                <Text style={{textAlign:'center', textAlignVertical:'center', ...styles.textDetails,  flex:0}}>
                    {' '}2h 15m
                </Text>
            </View>
            <Text style={{textAlign:'right', ...styles.textDetails}}>{Math.floor(Math.random() * 100)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:48,
        flexDirection:'row',
        alignItems:'center',
        paddingRight:16,
        paddingLeft:16
    },
    text:{
        flex:1,
        fontSize:12,
        lineHeight:16,
        fontFamily:'Roboto-Medium'
    },
    textDetails:{
        flex:1,
        fontSize:16,
        lineHeight:24,
        fontFamily:'Roboto-Regular'
    }
})