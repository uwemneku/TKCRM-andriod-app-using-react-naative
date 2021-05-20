/* eslint-disable prettier/prettier */
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import {ContactsContext, MessagesContext} from '../../Context/ContactProvider'
import {useNavigation} from '@react-navigation/native'
import SearchBar from '../../mock components/SearchBar'



function  ContactComponent ({list=false, name, role, pic, id, lastText}){
        const navigation = useNavigation()

    return(
        <TouchableOpacity  
            onPress = {() => navigation.navigate('Conversation', {
                name:name,
                id:id
            })} 
        >

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
                        <Text style={{color:'black', lineHeight:16}}>You:  </Text>
                        <Text numberOfLines={1}  style={{...styles.lastText}} >{lastText}</Text>
                    </View>:null
                }    
                <ContactDivider />    
        
        </TouchableOpacity>
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





export default function Contacts() {
    const contacts = useContext(ContactsContext)
    const [filterValue, setFilterValue] = useState('')
    const [show, setShow] = useState(false)
    const {height, width} = useWindowDimensions()
    const navigation = useNavigation()
    const [dataRender, setDataRender] = useState(contacts)

    useEffect(() => {
        setShow(true)
        console.log('mounted');
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:()=>(
                <SearchBar data={contacts} setFilterTerm={setDataRender} />
            )
        })
    })

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
                data={dataRender}
                renderItem={({item}) => <PureContactComponent id={item.id}  role={item.role} name={item.name} pic={item.pic} />}
                keyExtractor={item => `${item.id}`}
                key={9876545678}
                />
            : <ActivityIndicator animating={true} color='orange'  />
        }
            
       
        </View>
    )
}
export  function ChatList() {
    const contacts = useContext(ContactsContext)
    const [messages, setmessages] = useContext(MessagesContext)
    const [show, setShow] = useState(false)
    const {height, width} = useWindowDimensions()

   
    // 
    useEffect(() => {
        setShow(true)
        console.log('lookkk')

    }, [messages])

    const sortArray = messages.sort((a, b) => {
        if (a.date > b.date){
            return -1
        }else{
            return 1
        }
    })


     function extract(data){
        const {id, name, pic, role} =     contacts.find(oneContact => oneContact.id === data.item.id)
        const {conversation} = data.item
        const lastText= conversation[conversation.length-1].text
            return(
                <PureContactComponent id={id} name={name} pic={pic} role={role} list={true} lastText={lastText} />
            )
     }

    return (
        <View 
        style={{
            height:height,
            width:width,
        }}
        >
               {
                show?
                <FlatList 
                data={sortArray}
                initialNumToRender={50}
                renderItem={extract}
                keyExtractor={item => `${item.id}`}
                key={9876545678}
                contentContainerStyle={{flexDirection:'column'}}
            />: <ActivityIndicator animating={true} color='orange'  />
}
         
            

       
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
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:64,
        paddingRight:16,
        fontSize:14,
        paddingBottom:16
    },
    lastText:{
        lineHeight:16,
        color:'#6E7882',
        fontFamily:'Roboto-Regular',
    }
})