/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Button, Chip, Divider } from 'react-native-paper'

export default function Pages() {
    return (
        <ScrollView style={{
            backgroundColor:'white'
        }}>
            <Text style={{
                fontSize:40,
                fontWeight:'bold',
                margin:10,
            }}>Pages</Text>
            <PageButtons />
            <Divider style={{margin:10}} />
        </ScrollView>
    )
}
function PageButtons(){

    function CustomButton({text}){
        return(
            <View style={{
                flex:1,
                // height:30,
                borderRadius:30,
                margin:5,
                paddingTop:10,
                paddingBottom:10,
                backgroundColor:'lightgray',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <MaterialIcons style={{paddingRight:5}} name='home' />
                <Text>{text}</Text>
            </View>
        )
    }

    return(
        <View style={{
            width:'100%',
            flexDirection:'row'
        }}>
           <CustomButton text='Create page' />
           <CustomButton text='Discover' />
           <CustomButton text='Invitations' />
           <CustomButton text='Liked Pages' />
        </View>
    )
}
function Header(){
    return(
        <View style={{}}>
            <Text>Pages</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons:{
        borderRadius:30,
        flex:1,
        margin:5,
        padding:3,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'whitesmoke'
    }
})
