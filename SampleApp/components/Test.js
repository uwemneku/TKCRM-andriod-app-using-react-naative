/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, useWindowDimensions, StatusBar } from 'react-native'
import { IconButton, Searchbar } from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'

export default function Test() {


    return (
        <View style={{backgroundColor:'whitesmoke'}}>
            <StatusBar backgroundColor='whitesmoke' />
            <Header />
            <Text
                style={{
                    fontSize:40,
                    fontWeight:'bold',
                    padding:15

                }}
            >
                W
                elcome, Jack

            </Text>
            <Searchbar placeholder='Search'
                style={{
                    marginLeft:15,
                    marginRight:15,
                    borderRadius:30
                }}
            />
            <Item />
        </View>
    )
}


function Header (){
    const {width, height} = useWindowDimensions()
    return(
        <View 
            style={{
                width:width,
                height:80,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                paddingRight:10,
                paddingLeft:10
            }}
        >
                <IconButton style={{backgroundColor:'white',  borderRadius:10}} size={30} icon='menu' />
                <IconButton style={{backgroundColor:'white', borderRadius:10}}  size={30} icon='more' />

        </View>
    )
}
function Item(){
    return(
        <View
            style={{
                backgroundColor:'white',
                width:250,
                height:350,
                marginLeft:20,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <View
                style={{
                    backgroundColor:'blue',
                    width:'90%',
                    height:'60%',
                    borderRadius:20
                }}
            >

            </View>
            
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', paddingTop:10 }}>
                Adriatica Ad27744RRe
            </Text>
            <Text style={{textAlign:'center', fontSize:20, color:'grey'}}>
                Swiss Watches
            </Text>
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'skyblue', paddingTop:10}}>
                $ 656.77
            </Text>
        </View>
    )
}