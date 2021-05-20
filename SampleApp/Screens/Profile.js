/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ScreenHeader from '../mock components/ScreenHeader'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function Profile() {
    return (
        <View>
            <ScreenHeader text='My Profile' showIcon={true} iconName="settings" navigateTo="Settings" />
            <View style={{padding:16}}>
                <UserInfo />
                <ScrollView>
                    <ListHeader heading="Organization" details="Company Name, NINO  Position" listData={<Organization />} />
                    <ListHeader heading="Personal Info" details="Passport & Driving Licence" listData={<PersonalInfo />} />
                </ScrollView>
            </View>
        </View>
    )
}


function UserInfo(){

    return(
        <View style={{flexDirection:'row'}}>
            <View style={{}}>
                <View style={{width:72, height:72, borderRadius:36, backgroundColor:'gray', position:'relative', justifyContent:'center', alignItems:'center'}}>
                    <FontAwesome5 color="white" name="camera" />
                    <View style={{position:'absolute', justifyContent:'center', alignItems:'center', right:-12, bottom:'10%', width:32, height:32, borderRadius:16, backgroundColor:'black'}}>
                        <FontAwesome5 color="white" name="pen" />
                    </View>
                </View>
            </View>
            <View style={{justifyContent:'center', paddingLeft:16}}>
                <Text style={{fontFamily:'Roboto-Bold', fontSize:18}}>Uwem Israel</Text>
                <Text style={{fontFamily:'Roboto-Regular', fontSize:14, lineHeight:20}}>+2348064406063</Text>
            </View>
        </View>

    )
}

function ListHeader({heading, details, listData}){
    const [clicked, setClicked] = useState(false)
    return(
        <View>
            <TouchableOpacity onPress={()=>setClicked(!clicked)} style={{flexDirection:'row', justifyContent:'space-between', paddingTop:16}}>
                <View>
                    <Text style={{fontFamily:'Roboto-Bold', fontSize:18}} >{heading}</Text>
                    <Text style={{fontFamily:'Roboto-Regular', fontSize:14, lineHeight:20, color:'gray'}}>{details}</Text>
                </View>
                <View>
                    <FontAwesome5 name={clicked?"sort-up":"sort-down"} />
                </View>
            </TouchableOpacity>
            <View style={{display:clicked?"flex":"none"}}>
                {listData}
            </View>
        </View>
    )
}

function Organization(){
   
    return(
        <ScrollView>
            <RenderList heading="Company Name" details="Pergament Home Centers" />
            <RenderList heading="NINO" details="HH 14 70 75 C" />
            <RenderList heading="Position" details="Driver" />
        </ScrollView>
    )
}
function PersonalInfo(){
   
    return(
        <ScrollView>
            <RenderList heading="Registration Plate" details="YR 53 JEP" />
            <RenderList heading="Driving licenceNO" details="R-000-932-857-574" />
            <RenderList heading="Passport no." details="007-FB-10051973" />
            <RenderList heading="Authority" details="Foreign Bureau" />
            <RenderList heading="issue date" details="07/13/2004" />
            <RenderList heading="Address" details="Fazeley, 38 Wrexham Road" />
        </ScrollView>
    )
}

const RenderList = ({heading, details}) => (
    <View style={{height:56, paddingTop:16}}>
            <Text style={{fontFamily:'Roboto-Regular', fontSize:12, lineHeight:20, color:'gray'}}>{heading}</Text>
            <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color:'black'}} >{details}</Text>
        </View>
)