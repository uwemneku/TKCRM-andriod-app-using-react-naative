/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import images from '../../constants/images'
import {ContactsContext} from '../../Context/ContactProvider'



function  ContactComponent ({list=false, name, role, pic}){
    return(
        <View>

            <View style={styles.container}>
                <Image 
                    source={pic}
                    width={32}
                    height={32}
                    style={{
                        width:32,
                        height:32,
                        borderRadius:16,
                        margin:16,
                    }}
                />

                <View style={styles.container1}>

                    <View>
                        <Text style={{fontFamily:'Roboto-Regular', fontSize:16, lineHeight:24}}>{name}</Text>
                        <Text style={{fontFamily:'Roboto-Regular', fontSize:12, lineHeight:16, color:'#6E7882'}} >{role}</Text>
                    </View>


                   {list?
                    <View>
                        <Text style={styles.date}>
                            <Text> 8, June</Text>
                            <Text> 8, June</Text>
                        </Text>
                    </View>:null
                    }


                </View>
    
                 
            </View>
                {
                    list?
                    <View style={styles.messageContainer}>
                        <Text style={styles.lastText} >bhbhbhbh</Text>
                    </View>:null
                }    
                <ContactDivider />    
        
        </View>
    )
}

const PureContactComponent = React.memo(ContactComponent)

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


const styles = StyleSheet.create({
    container:{
        flex:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    container1:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    date:{
        fontSize:12,
        marginRight:16,
        lineHeight:24,
        color:'#6E7882',
        fontFamily:'Roboto-Regular',
    },
    messageContainer:{
        marginLeft:64,
        fontSize:14,
        paddingBottom:16
    },
    lastText:{
        lineHeight:16,
        color:'#6E7882',
        fontFamily:'Roboto-Regular',
    }
})


export default function Contacts() {
    const contacts = useContext(ContactsContext)
    const [show, setShow] = useState(false)
    const {height, width} = useWindowDimensions()

    useEffect(() => {
        setShow(true)
        console.log('mounted');
    }, [])

    return (
        <View 
        style={{
            height:height,
            width:width
        }}
        >
            {
                show?
                <FlatList 
                data={contacts}
                initialNumToRender={50}
                renderItem={({item}) => <PureContactComponent key={item.id} role={item.role} name={item.name} pic={item.pic} />}
                keyExtractor={item => `${item.id}`}
                key={9876545678}
            />: <ActivityIndicator animating={true} color='orange'  />
        }
            

       
        </View>
    )
}