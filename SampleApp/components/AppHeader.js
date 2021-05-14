/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { View, Text, useWindowDimensions, Animated } from 'react-native'
import { IconButton } from 'react-native-paper'
import {ShowHeaderContext} from './Context'


export default function AppHeader({show}){
    const [showHeader] = useContext(ShowHeaderContext)
    const {width} = useWindowDimensions()
    // const height = new Animated.Value(0)
    return(
        <>{
            showHeader?
        <Animated.View View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                backgroundColor:'white',
                width:width,
                height:50
            }}
        >
            <Text
                style={{
                    color:'#4267B3',
                    fontWeight:'bold',
                    fontSize:30,
                    marginLeft:15
                }}
            >
                facebook
            </Text>
              <Text>{showHeader}</Text>  
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <IconButton style={{backgroundColor:'whitesmoke'}} icon="magnify" color="darkgrey" />
                <IconButton style={{backgroundColor:'whitesmoke'}} icon="chat" color='darkgrey' />
            </View>
        </Animated.View >:
            null
        }
        </>
    )
}





