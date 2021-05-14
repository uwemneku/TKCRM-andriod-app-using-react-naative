/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View, ScrollView, StatusBar} from 'react-native'
import PlacesComp from '../mock components/PlacesComp'
import ScreenHeader from '../mock components/ScreenHeader'

const placesData = [
    {
        name: "Tire Service",
        iconName:'drive-eta'
    },
    {
        name: "Electric",
        iconName:'flash-on'
    },
    {
        name: "Engine Repair",
        iconName:'build'
    },
    {
        name: "Cafe",
        iconName:'restaurant'
    },
    {
        name: "Parking Places",
        iconName:'tv'
    },
    {
        name: "allout",
        iconName:'all-inclusive'
    },
]

export default function Places () {
        return (
            <View style={{
                height:'100%'
            }}>
                <StatusBar backgroundColor='white'  />
                <ScreenHeader text={'Places'} />

                <View style={{
                    // height:height * 0.80,
                    alignItems:'center',
                    justifyContent:'center',
                    
                }}>
                    <ScrollView
                        style={{
                            width:'100%',

                        }}
                        contentContainerStyle={{
                            paddingTop:30,
                            paddingBottom:200,
                            flexDirection:'row',
                            flexWrap:'wrap',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        {
                            placesData.map(item => <PlacesComp key={item.name} iconName={item.iconName} text={item.name} /> )
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
