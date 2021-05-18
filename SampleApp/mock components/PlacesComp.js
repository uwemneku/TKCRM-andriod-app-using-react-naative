/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'

 


export default function PlacesComp({iconName, text}){

    const navigation = useNavigation();

    return(
        <TouchableOpacity 
            style={{
                width:"45%",
                height:158,
                borderRadius:12,
                margin:5,
                marginBottom:10,
                elevation: 10,
                shadowColor:'rgba(0, 0, 0, 0.4)',
                backgroundColor:'white',
                justifyContent:'center',
                alignItems:'center'
                
            }}
            onPress = {() => navigation.navigate("TireService", {
                name:text
            })}
            >
            <MaterialIcons size={32} name={iconName} />
            <Text
                style={{
                    marginTop:10,
                    fontSize:14,
                    fontFamily:'Roboto-Regular'
                }}
            >
                {text}
            </Text>

        </TouchableOpacity>
    )
}

// const styles = Stylesh
