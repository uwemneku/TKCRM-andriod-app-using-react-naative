/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import { Avatar, Caption, Subheading, Text, Title } from 'react-native-paper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function FeedPost() {
    return (
        <View style={{
            width:'100%',
            backgroundColor:'white'
        }}
        >
            <Header />
            <PostText />
            <Actions />
        </View>
    )
}

function Header(){
    return(
        <View style={{
            padding:15,
            width:'100%',
            flexDirection:'row',
            alignItems:'flex-start',
            backgroundColor:'orange',
            justifyContent:'space-between'
        }}> 
            <View style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'flex-start'
                }}>

                <Avatar.Text size={60}  />
            
                <View style={{justifyContent:'center', paddingLeft:10, }}>
                    <Title style={{color:'black',  marginVertical:0}} >Uwem Neku</Title>
                    <Caption style={{color:'black',  marginVertical:0}} >Caption</Caption>
                </View>
            
            </View>
            

            <FontAwesome5 size={20} name={'ellipsis-h'}  />
        </View>
    )
}

function PostText(){
    return(
        <View style={{padding:15, paddingTop:0}}>
            <Text style={{color:'black'}} >Hey kljdskljlkskls kjhjkkja sdkjdsjkhkjhsjf sdjkhkjshjkhshs hbsjh</Text>
        </View>
    )
}

function Actions(){
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:'space-around'
        }}>
           <View style={{
               flexDirection:'row',
               alignItems:'center'
           }}>
               <FontAwesome5 size={30} selectable={true} selectionColor={"red"} name={"thumbs-up"} />
               <Text style={{color:'black', paddingLeft:10 }} >Like</Text>
           </View> 

           <View style={{
               flexDirection:'row',
               alignItems:'center'
           }}>
               <FontAwesome5 size={30} selectable={true} selectionColor={"red"} name={"comment"} />
               <Text style={{color:'black', paddingLeft:10}} >Comment</Text>
           </View> 
          
           <View style={{
               flexDirection:'row',
               alignItems:'center'
           }}>
               <FontAwesome5 size={30} selectable={true} selectionColor={"red"} name={"share-alt"} />
               <Text style={{color:'black', paddingLeft:10}} >Share</Text>
           </View> 


        </View>
    )
}