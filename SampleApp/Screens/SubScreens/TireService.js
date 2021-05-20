/* eslint-disable prettier/prettier */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { View, Text, Keyboard, TouchableOpacity, StyleSheet, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import faker from 'faker'
import SearchBar from '../../mock components/SearchBar'

const data = [
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    {
        heading: faker.lorem.lines(1),
        time: faker.date.between(10, 20).toLocaleTimeString(),
        text: faker.lorem.lines(1),

    },
    
]

export default function TireService() {
    const {name} = useRoute().params
    const [renderData, setRenderData] = useState(data)
    const [filterTerm, setFilterTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title:name,
        })
    }, [name, navigation])

    useEffect(() => {
       setLoading(false)
    }, [])

    return (
        <View>
            
            {loading? <ActivityIndicator color="orange" />:
                 <ScrollView>
                        {
                            renderData.map(list => <Purell heading={list.heading} text={list.text} time={list.time} key={Math.random()} />)
                        }
                 </ScrollView>
            }
            
        </View>
    )
}

function ListComponent({heading, time, text}){

    return(
        <View style={styles.listContainer}>
            <View style={styles.listTop}>
                <Text style={{fontFamily:'Roboto-Regular', fontSize:14, lineHeight:16, width:'70%' }}>
                    {heading}
                </Text>
                <Text style={styles.listText}>{time}</Text>
            </View>
            <View>
                <Text style={styles.listText}>{text}</Text>
            </View>
        </View>
    )
}
const Purell = React.memo(ListComponent)



const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:'#FFFFFF',
        padding:16,
        borderBottomWidth:0.5,
        borderColor:'#6E7882'
    },
    listTop:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listText:{
        fontSize:12,
        lineHeight:16,
        color:'#6E7882'
    }
})

