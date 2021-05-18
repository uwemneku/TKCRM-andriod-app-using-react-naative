/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function SearchBar({setFilterTerm, data}){
    const [clearFilter, setClearFilter] = useState(true)
    const [showSearch, setShowSearch] = useState(false)
    const input = useRef(null)
    useEffect(() => {
        const show =()=>setShowSearch(false)
            Keyboard.addListener('keyboardDidHide', show )
        return () => {
          Keyboard.removeListener('keyboardDidHide', show)
        }
    }, [])
    return(
        <View style={{padding:16, alignItems:'flex-end'}}>
            {
                showSearch?
                <TextInput 
                ref={input}
                multiline={false}
                style={{
                    borderWidth:1,
                    width:'90%',
                    height:30,
                    fontSize:16,
                    padding:0,
                    paddingLeft:10,
                    paddingRight:10,
                    borderRadius:5,
                    
                }}
                onChangeText={(e)=>{setFilterTerm(data.filter(item => (item.name).includes(e)))}}
                autoFocus={true}
                 />
                 :  (
                     clearFilter?
                    <TouchableOpacity  onPress={()=>{setShowSearch(true); setClearFilter(false)}} >
                    <MaterialIcons name="search" size={24} />
                    </TouchableOpacity>:
                    <TouchableOpacity onPress={() => {setClearFilter(true); setFilterTerm(data)}}>
                        <Text>Clear Filter</Text>
                    </TouchableOpacity>  
                 )
            }
        </View>
        
    )
}
