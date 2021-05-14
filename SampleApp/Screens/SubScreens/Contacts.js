/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Image } from 'react-native'
import images from '../../constants/images'

export default function Contacts() {
    return (
        <View>
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
            <ContactComponent />
        </View>
    )
}

function ContactComponent(){
    return(
        <View>

            <View style={{
                flexDirection:'row',
                alignItems:'center',
                // height:100
            }}>
                <Image 
                    source={images.photo}
                    width={32}
                    height={32}
                    style={{
                        width:32,
                        height:32,
                        borderRadius:16,
                        margin:16,
                        backgroundColor:'red'
                    }}
                />
                 <View>
                    <Text style={{fontFamily:'Roboto-Regular', fontSize:16, lineHeight:24}}>Uwem Israel</Text>
                    <Text style={{fontFamily:'Roboto-Regular', fontSize:12, lineHeight:16, color:'#6E7882'}} >Driver</Text>
                </View>


                <View>
                    <Text>
                         <Text> 8, June</Text>
                         <Text> 8, June</Text>
                    </Text>
                </View>
    
                 
            </View>
                <ContactDivider />    
        
        </View>
    )
}

function ContactDivider(){
    
return(
    <View
        style={{
            backgroundColor:'#6E7882',
            width:'100%',
            height:0.5
        }}>
    </View>
    )
}