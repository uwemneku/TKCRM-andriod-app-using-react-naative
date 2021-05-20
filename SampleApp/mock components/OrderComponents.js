/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'

export default function OrderComponents() {
    const  {width} = useWindowDimensions()
    
    return (
        <View style={{
            width:width<700?'90%':'45%',
            borderRadius:16,
            borderWidth:0,
            marginTop:16,
            height:230,
            backgroundColor:'white',
            shadowOffset: {width:10, height:10},
            shadowRadius:3,
            elevation:3,

        }}>
            <View style={{flex:2, overflow:'hidden', position:'relative'}}>
                <View style={{position:'absolute', backgroundColor:'green', top:30, left:0, width:3, height:24}} />
                <View  style={{flex:1, justifyContent:'center', paddingLeft:26}}>
                    <View style={{ flexDirection:'row'}}>
                        <Lines />
                        <View style={{paddingLeft:16}}>
                         <List />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'whitesmoke', height:2, width:'100%',}} />
            <View style={{flex:1, justifyContent:'center', paddingLeft:26, paddingRight:16}}>
                <Footer/>
            </View>
            </View>
    )
}

function Lines(){
    return(
        <View style={{alignItems:'center'}}>
            <Dots size={18} />
            <View style={{height:40, justifyContent:'space-evenly'}}>
                
                <Dots size={5} />
                <Dots size={5} />
                <Dots size={5} />
                <Dots size={5} />
            </View>
            <Dots size={18} />
        </View>
    )
}
function Dots({size}){
    return(
        <View style={{}}>
            <View style={{width:size, height:size, borderRadius:30, backgroundColor:'#DADDDF', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:size/1.5, height:size/1.5, borderRadius:30, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
            <View style={{width:size/2.5, height:size/2.5, borderRadius:30, backgroundColor:'#DADDDF', justifyContent:'center', alignItems:'center'}}>
            </View>
            </View>
            </View>
        </View>
    )
}
function List(){
    return(
        <View
            style={{
                width:'100%'
            }}
        >
            <ListText />
            <ListText />
        </View>
    )
}

function ListText(){
    return(
        <View style={{}} >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontFamily:'Roboto-Medium', fontSize:18, lineHeight:24}}>Moscow</Text>
                <Text style={{fontFamily:'Roboto-Regular', fontSize:12, lineHeight:16, color:'#6E7882'}}>{' '} + 2places</Text>
            </View>
            <Text style={{fontFamily:'Roboto-Regular', fontSize:12, lineHeight:20, color:'#6E7882', paddingBottom:10}}>Pick up until 8 Dec 2018, 8:00am</Text>
        </View>
    )
}

function Footer(){
    return(
        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', backgroundColor:'white'}}>
            <View style={{height:28, borderWidth:0.4, borderRadius:100, justifyContent:'center', alignItems:'center', paddingLeft:16, paddingRight:16}}>
                <Text  style={{fontFamily:'Roboto-Regular', fontSize:12, color:'#6E7882'}} >On way to loading</Text>
            </View>

            <Text style={{color:'#6E7882'}}>
                #475
            </Text>
        </View>
    )
}