/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { View,  Text, KeyboardAvoidingView, TextInput, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, Keyboard, FlatList } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {MessagesContext } from '../../Context/ContactProvider'
import { date } from 'faker'



export default function Conversation() {
    const [messages, setmessages] = useContext(MessagesContext)
    const [loading, setLoading] = useState(true)
    const ref = useRef(null)  //to store the index position of the conversion in the state and passed to the textInput component
    const scrollRef = useRef() //for reference to the scroll list so we can scroll to the bottom
    let newText;
    
    //Get navigation prop and route parmes using hooks
    const navigation = useNavigation();
    const {name, id} = useRoute().params

    //Set the name of the screen
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [name, navigation])

    useEffect(() => {
     setLoading(false)
    }, [])

    //Add keybord listener to scroll messages to the bottom so keyboard does not cover messages
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", scroll )

        return () => {
            Keyboard.removeListener("keyboardDidShow", scroll )
        }
    },[])


    const check = () => {
        const result =  messages.find((item, index) => {
                    ref.current = index
                    return  item.id === id
                })
        if(!(result)){newText = true}


        return result
    }

    const list = useRef(null)

   
    
    


    //This function scrolls to the bottom of the scrollView
    const scroll = () => {
        scrollRef.current?.scrollToEnd({animated:true})
    }
    
    return (
        <KeyboardAvoidingView style={{height:'100%', width:'100%' }}>
            <View style={Styles.scrollContainer}>
               <View>
                   {
                       (list.current = check())?
                        <FlatList 
                            ref={scrollRef}
                            data={list.current.conversation}
                            renderItem= {({item}) => <PureMessage key={Math.random()} sent={item.sent} text={item.text}  />}
                            keyExtractor = {() => Math.random()}
                            onContentSizeChange = {() => scroll()}
                        />
                       :
                       <View style={{height:"100%", justifyContent:'center', alignItems:'center' }}>
                            <Text>You have no history with {name}</Text>
                         </View>
                   }
                   
                   </View>

            </View>
            <CustomInput action={newText} id={id}  position={ref.current}  messages={messages} setmessages={setmessages} />
        </KeyboardAvoidingView>
        )
}

 
function CustomInput({position, messages, setmessages, action, id}){
    const [value, setValue] = useState('')
    const handleChange = (text) => {
        setValue(text)
    }
    function handleUpdate(){
        if(action){
            setmessages(prev => {
                const newState = prev
                newState.push({id:id, date:Date.now(), conversation: [{sent:true, text:value}] })
                setValue('')
                console.log('New Text');
                return [...newState]
            })
        }
        else{
            setmessages(prev => {
                const newState = prev
                newState[position].conversation.push({sent:true, text:value})
                newState[position].date = Date.now()
                setValue('')
                console.log('Old Text');
                return [...newState]
            })
        }
    }
    return(
        <View style={Styles.inputContaner} >

                <TextInput 
                    placeholder="Message" 
                    value={value} 
                    onChangeText={handleChange}  
                    numberOfLines={1}   
                    multiline={true} 
                    style={Styles.textInput}
                />
                <TouchableOpacity onPress={handleUpdate}>
                    <MaterialIcons name="send" size={24}  style={Styles.icon} />
                </TouchableOpacity>
                
            </View>
    )
}

function Message({sent, text}){
    

    return(
        <View style={
            {
                ...Styles.messageContainer,
                flexDirection:sent?'row':'row-reverse',
            }
            
            }>
            <Text 
                style={{ 
                    ...Styles.message,
                    backgroundColor:sent?'#FFE376':'#DADDDF'
                    
                    }}>
                     {text}
            </Text>
            <Text style={Styles.timeStamp}>
                9 am
            </Text>
        </View>
    )
}
const PureMessage = React.memo(Message)



const Styles = StyleSheet.create({
    scrollContainer:{
        flex:1,
        width:'100%',
        height:'100%',
        paddingLeft:16,
        paddingRight:16,
        justifyContent:'flex-end',
    },
    inputContaner:{
        borderTopWidth:1,
        width:'100%',
        paddingLeft:16,
        paddingRight:16,
        flex:0,
        flexDirection:'row',
        alignItems:'flex-end'
    },
    icon:{
        flex:0,
        marginBottom:10
    },
    textInput:{
        fontSize:14,
        fontFamily:'Roboto-Regular',
        flex:1,
        padding:2,
        minHeight:48,
        maxHeight:100,
    },
    messageContainer:{
        width:'100%',
        alignItems:'flex-end',
        marginBottom:16,
    },
    message:{
        fontSize:14,
        lineHeight:20,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:16,
        paddingRight:16,
        borderRadius:8,
        maxWidth:'70%',
        fontFamily:'Roboto-Regular'
    },
    timeStamp:{
        paddingLeft:10,
        paddingRight:10,
        color:'#6E7882'
    }
})