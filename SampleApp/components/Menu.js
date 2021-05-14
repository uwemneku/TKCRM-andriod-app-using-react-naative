/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Avatar, Divider, IconButton } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Menu() {
    return (
        <View>
            <Header />
            <ScrollView>
            <Profile />
            <Divider style={styles.divider} />
            <Pages />
            <Divider style={styles.divider} />
            <Flex />
            </ScrollView>
        </View>
    )
}

function Header (){

    return(
        <View style={{
            width:'100%',
            paddingLeft:10,
            paddingRight:10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            }}>
                <Text style={{fontSize:25}}>Menu</Text>
                <IconButton style={{backgroundColor:'white'}} size={25} icon="magnify" color="darkgrey" />

        </View>
    )
}

function Profile(){
    return(
        <View style={{
            paddingLeft:10,
            paddingRight:10,
            width:'100%',
            flexDirection:'row',
            alignItems:'center'
        }}>
            <Avatar.Icon icon='head' size={50} />
            <View style={{paddingLeft:10}}>
                <Text style={{fontWeight:'bold'}}>
                    Uwem Chukwuneku Israel
                </Text>
                <Text style={{color:'grey'}}>
                    See your profile
                </Text>
            </View>
        </View>
    )
}

function Pages(){
    return(
       <View style={{
           paddingLeft:10,
           paddingRight:10,
           width:'100%',
           flexDirection:'row',
           alignItems:'center'
           }}>
                <MaterialIcons name='flag' size={50} color='orange' />
                <Text style={{paddingLeft:10, fontSize:18}}>Your 19 Pages</Text>
       </View> 
    )
}

function Flex(){

    function Link({icon, title, color, onPress}){
        return(
            <TouchableOpacity style={{
                margin:10, 
                borderRadius:10,
                elevation:10, 
                padding:10,
                width:'45%', 
                backgroundColor:'white',
                justifyContent:'space-around'
                }}
            >

                <MaterialIcons name={icon}  color={color} size={30} />
                <Text style={{paddingTop:5, paddingBottom:5}}>{title}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={{
            paddingLeft:10,
            paddingRight:10,
            flexDirection:'row',
            justifyContent:'center',
            flexWrap:'wrap'
        }}>
            <Link title='COVID-19 Information Center' icon='sick' color='purple' />
            <Link title='Jobs' icon='work' color='orange' />
            <Link title='Videos on Watch' icon='tv' color='skyblue' />
            <Link title='Friends' icon='people' color='skyblue' />
            <Link title='Marketplace' icon='store' color='skyblue' />
            <Link title='Groups' icon='group' color='skyblue' />
            <Link title='Saved' icon='bookmark' color='skyblue' />
            <Link title='Memories' icon='watch' color='skyblue' />
            <Link title='Gaming' icon='tv' color='skyblue' />
            <Link title='Events' icon='lock' color='skyblue' />
            <Link title='Nearby Friends' icon='close' color='skyblue' />
            <Link title='Update Facebook' icon='facebook' color='blue' />
           
        </View>
    )
}

const styles = StyleSheet.create({
    divider:{
        margin:10,
    }
})